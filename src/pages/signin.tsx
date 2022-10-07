import Image from 'next/image';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { commonStrings } from '@/translation/vi';
import api from '@/utils/api';
import { storeToken } from '@/utils/authUtils';

import { Landmark } from '~/images';
const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // const navigate = useNavigate();
  const handleSubmitCallback = async (data: FieldValues) => {
    try {
      const response = await api.post('/v1/auth/login', data);
      console.log(response);
      if (response) {
        const token = {
          access_token: response.data.token.accessToken,
          refresh_token: response.data.token.refreshToken,
        };
        console.log(token);
        storeToken(token);
        // navigate('/');
      }
    } catch (error: any) {
      // console.log(error.response.status);
    }
  };

  const style = {
    errorMessage: 'text-red-600 ml-4',
    input:
      'w-80 h-10 p-6 mb-2 border-2 rounded-xl outline-none  border-main-blue',
  };
  return (
    <div className='flex h-full w-full flex-col items-center lg:flex-row  lg:items-start lg:justify-between'>
      <Image
        alt='logo'
        className='hidden h-full lg:inline-block lg:w-1/2'
        src={Landmark}
      />
      <div className='mt-32 flex flex-col items-center  lg:w-1/2'>
        <h1 className='mb-4 text-3xl'>{commonStrings.signIn}</h1>
        <form
          onSubmit={handleSubmit(handleSubmitCallback)}
          className='flex w-fit flex-col'
        >
          <input
            {...register('email', {
              required: 'Xin hãy nhập tên đăng nhập',
              // maxLength: 10,
              // pattern: {
              //   value: regex.username,
              //   message: 'Tên không hợp lệ',
              // },
            })}
            className={`${style.input}  ${
              errors.username ? ' focus:border-red-600 focus:outline-none' : ''
            }`}
            placeholder='Tên đăng nhập*'
          />
          <span className={`${style.errorMessage}`}>
            {errors.username?.message as React.ReactNode}
          </span>
          <input
            {...register('password', {
              required: 'Xin hãy nhập mật khẩu',
              // pattern: {
              //   value: regex.password,
              //   message: 'Mật khẩu không hợp lệ',
              // },
            })}
            className={`${style.input}   ${
              errors.password ? ' focus:border-red-600 focus:outline-none' : ''
            }`}
            placeholder='Mật khẩu*'
            type={passwordShown ? 'text' : 'password'}
          />
          <span className={`${style.errorMessage}`}>
            {errors.password?.message as React.ReactNode}
          </span>
          <button
            type='submit'
            className='bg-main-blue btn mt-4 w-80 rounded-xl border-none text-white'
            // onClick={handleSubmit((data) => {
            //   alert(JSON.stringify(data));
            // })}
          >
            {commonStrings.signIn}
          </button>
          <div className='divider my-4'>Hoặc</div>
        </form>
        <button
          type='submit'
          className='bg-google-red btn w-80 rounded-xl border-none text-white'
          // onClick={handleSubmit((data) => {
          //   console.log(data);
          // })}
        >
          {/* <FaGoogle className='mr-2 inline-block' /> */}
          {commonStrings.signInWithGoogle}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
