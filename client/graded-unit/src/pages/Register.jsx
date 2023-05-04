
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const submit = (data) => {
    const {email,password}=data
    const userReg={
      email,
      password
    }
    console.log(userReg);
    axios
      .post('http://localhost:5000/register', userReg )
      .then((response) => {
        console.log(response.data); // do something with the response
      })
      .catch((error) => {
        console.error(error); // handle the error
      });
  };

  const validateConfirmPassword = (value) =>
    value === watch('password') || "Passwords don't match";

  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-4.5rem)] lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-[#0FCE7E] md:text-2xl dark:text-white font-anton'>
                Create and account
              </h1>
              <form
                onSubmit={handleSubmit(submit)}
                className='space-y-4 md:space-y-6'
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium  text-[#0FCE7E] dark:text-white font-anton'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder='name@gmail.com'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-[#0FCE7E] dark:text-white font-anton'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins ${
                      errors.password ? 'border-red-500 outline-none' : ''
                    }`}
                    required=''
                  />
                  {errors.password && (
                    <p className='text-red-500 text-sm mt-1'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='confirm-password'
                    className='block mb-2 text-sm font-medium text-[#0FCE7E]  dark:text-white font-anton'
                  >
                    Confirm password
                  </label>
                  <input
                    type='password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    {...register('confirm-password', {
                      required: 'Confirm password is required',
                      validate: validateConfirmPassword,
                    })}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-poppins ${
                      errors['confirm-password'] ? 'border-red-500' : ''
                    }`}
                    required=''
                  />
                  {errors['confirm-password'] && (
                    <span className='text-red-500 text-xs'>
                      {errors['confirm-password'].message}
                    </span>
                  )}
                </div>

                <button
                  type='submit'
                  className='w-full text-white bg-[#0FCE7E]  focus:ring-4 focus:outline-none focus:ring-[#0FCE7E] font-medium rounded-lg text-sm px-5 py-2.5 text-center font-anton'
                >
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400 font-poppins'>
                  Already have an account?{' '}
                  <a
                    href='/login'
                    className=' font-bold text-primary-600 hover:underline dark:text-primary-500 font-anton '
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
