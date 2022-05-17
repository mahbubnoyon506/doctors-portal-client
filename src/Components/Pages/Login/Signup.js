import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../Hook/UserToken';
import Loading from '../../Utilities/Loading';

const Signup = () => {
  const navigate = useNavigate()
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // const [authUser, authLoading] = useAuthState(auth);
  const [updateProfile, updating, nameError] = useUpdateProfile(auth);

   //private auth
   let location = useLocation();
  const [token] = useToken(user || googleUser);

  const { register, formState: { errors }, handleSubmit } = useForm();

 

  let from = location.state?.from?.pathname || "/";

  // handle login submit
  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate(from, { replace: true })
  }

  // error handiling
  let gotError;
  if (error || googleError || nameError) {
    gotError = <p className='text-red-500'>{error.message || googleError.message || nameError.message}</p>
  }
  if (loading || googleLoading || updating) {
    return <Loading></Loading>;
  }
  if (token) {
   return navigate('/appointment')
    // navigate(from, { replace: true });
  }

  return (
    <div className="card max-w-lg flex mx-auto bg-base-100 shadow-xl my-12">
      <div className="card-body">
        <h2 className="text-center text-secondary text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='block w-full border outline-0 rounded p-3 '
            type='text'
            placeholder='Type full name'
            {...register("name", {
              required: {
                value: true,
                message: 'Name is required.'
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
          <input
            className='block w-full border outline-0 rounded p-3 '
            type='email'
            placeholder='Type Email'
            {...register("email", {
              required: {
                value: true,
                message: 'Email is required.'
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Type right email format.'
              }

            })}
          />
          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
          <input
            className='block w-full border outline-0 rounded p-3 my-3'
            type='password'
            placeholder='Type Password'
            {...register("password", {
              required: {
                value: true,
                message: 'Password is required'
              },
              minLength: {
                value: 8,
                message: 'Password must be 8 character or more.'
              }
            })}
          />
          {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
          {gotError}
          <input className='block w-full border outline-0 rounded p-3 my-3 bg-gradient-to-r from-secondary to-primary text-white cursor-pointer' type="submit" value="SIGN UP" />
        </form>
        <p>Already have an account?<Link className='text-secondary ml-2' to='/login'>Login</Link></p>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline text-secondary hover:bg-gradient-to-r from-secondary to-primary"> <img className='w-8 mr-3' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Continue With Google </button>
      </div>-
    </div>
  );
};

export default Signup;