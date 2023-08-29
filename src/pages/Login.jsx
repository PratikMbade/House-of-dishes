/* eslint-disable react/prop-types */
import  { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import GoogleLogin from '../components/GoogleLogin/GoogleLogin';

const Login = () => {

  

    const [showPassword ,setShowPassword] = useState(false)

     const[formData, setFormData] = useState({
        email:"",password:""
     });

     const navigate = useNavigate();

     function changeHandler(event){
       setFormData((prevData) =>(
        {
            ...prevData,
            [event.target.name] : event.target.value
        }
       ))
     }

     function submitHandler(event){
        event.preventDefault();
        toast.success("Logged In");
        navigate("/")
     }

  return (
   <>
   <div className='h-screen bg-[#101826]'>
   <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           <div className='text-white text-center text-4xl font-extrabold'>House of Dishes</div>
          <h2 className="mt-10 text-center text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  onSubmit={submitHandler}>
            <div>
              <label htmlFor="email" className="block text-white text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  required
                  onChange={changeHandler}
                  className="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-white text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative z-0 ">
                <input
                  id="password"
                  name="password"
                  type={showPassword? ("text") : ("password")}
                  value={formData.password}
                  onChange={changeHandler}
                  required
                  className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className='absolute'>
                <span className='text-black relative  bottom-6 left-80  translate-x-80 z-10' onClick={()=>setShowPassword((prev) => !prev)}>
                {
                    showPassword?(<AiOutlineEye/> ):(<AiOutlineEyeInvisible/>)
                }
                </span>
                </div>
              
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
        <GoogleLogin/>
      </div>
   </div>
    <Toaster/>
 
   </>
  )
}

export default Login