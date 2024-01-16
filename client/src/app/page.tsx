
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  
  return (
    <main className='h-max mt-20'>
      <div className="w-screen bg-gray-200 h-max py-10">
    <div className="h-[50%] w-full flex flex-col items-center justify-center md:gap-8 gap-4 px-80 text-center">
      <h1 className="text-5xl font-extrabold px-10">
      "Your Journey, Your Story – Let's Build It Together."
      </h1>
      <p className="text-lg text-gray-700">
      At [Your App Name], we believe in the power of a well-crafted resume. Our innovative resume builder combines simplicity with sophistication, enabling you to showcase your skills and experiences effortlessly.
       Elevate your job search with resumes that make an impact.
      </p>
      

         <Link 
         href={'/resume'}
        className="p-4 rounded-lg bg-blue-500 text-gray-100 cursor-pointer hover:bg-blue-700 transition-all"
      >
       Let's Build It!!
      </Link>
      
     <span className="font-bold text-sm text-green-500">{Math.ceil(Math.random()*2000)} resume(s) builded today</span>
    </div>
    
   
  </div></main>
  )
}
