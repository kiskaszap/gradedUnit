import React from 'react'

const Login = () => {
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 h-[calc(100vh-4.5rem)] ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md: h-[calc(100vh-4.5rem)] lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#0FCE7E] md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium  text-[#0FCE7E] dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" placeholder='user@gmail.com' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0FCE7E] focus:border-[#0FCE7E] block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0FCE7E] dark:focus:border-[#0FCE7E]" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-[#0FCE7E] dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#0FCE7E] focus:border-[#0FCE7E] block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#0FCE7E] dark:focus:border-[#0FCE7E]" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-[#0FCE7E]  focus:ring-4 focus:outline-none focus:ring-[#0FCE7E] font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Login
