import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Utilities/Loading';

const UpdateDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: schedules, isLoading } = useQuery('services', () => fetch('http://localhost:5000/schedules').then(res => res.json()))

    const imageStoreKey = '82734b493b00ae64f0a03aa4120c2c2a';


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStoreKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    img: img
                }
                fetch('http://localhost:5000/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization : `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)                           
                })
                .then(res => res.json())
                .then(data => {  
                    reset()                
                })
            } 
        })
        toast.success('Doctor updated') 
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='block w-1/2 border outline-0 rounded p-3 '
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
                    className='block w-1/2 border outline-0 rounded p-3 '
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
                <div className='border w-1/2 rounded mb-4'>
                    <select
                        className="select w-full block rounded focus:outline-0"
                        {...register('speciality')}
                    >
                        {
                            schedules.map(schedule => <option key={schedule._id} value={schedule.name}>{schedule.name}</option>)
                        }
                    </select>
                </div>
                <input
                    className='block w-1/2 border outline-0 rounded p-3 my-3'
                    type='file'
                    placeholder='Type Password'
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is required'
                        },
                    })}
                />
                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                <input className='block w-1/2 border outline-0 rounded p-3 my-3 bg-gradient-to-r from-secondary to-primary text-white cursor-pointer' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default UpdateDoctor;