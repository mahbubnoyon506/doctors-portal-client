import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Utilities/Loading';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from '../../Hook/UserToken';
import { toast } from 'react-toastify';

const Login = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  const { register, formState: { errors }, handleSubmit } = useForm();
  // const [authUser, authLoading] = useAuthState(auth);

  const [token] = useToken(user || googleUser);

  //private auth
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // handle login submit
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password)
    // console.log(data);
  }
  useEffect( () => {
    if (token) {
      return navigate(from, { replace: true });
    }
  }, [token, from, navigate])


   // error handiling
  if (loading || googleLoading || sending) {
    return <Loading></Loading>;
  }

  let gotError;
  if (error || googleError) {
    gotError = <p className='text-red-500'>{error.message || googleError.message}</p>
  }




  return (
    <div className="card max-w-lg flex mx-auto bg-base-100 shadow-xl my-12">
      <div className="card-body">
        <h2 className="text-center text-secondary text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            onChange={(e) => setEmail(e.target.value)}
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
          <input className='block w-full border outline-0 rounded p-3 my-3 bg-gradient-to-r from-secondary to-primary text-white cursor-pointer' type="submit" value="LOGIN" />
        </form>
        <p>Forget password?<button 
        onClick={async () => {
          await sendPasswordResetEmail(email);
          toast('Password reset link send');
        }} 
        className='text-secondary ml-2'>Reset password</button></p>
        <p>New to our Site?<Link className='text-secondary ml-2' to='/signup'>Sign Up</Link></p>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-outline text-secondary hover:bg-gradient-to-r from-secondary to-primary"> <img className='w-8 mr-3' src="https://i.ibb.co/9tw7sWw/google.png" alt="" /> Continue With Google </button>
      </div>-
    </div>
  );
};

export default Login;