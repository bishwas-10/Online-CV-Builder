import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="h-max mt-20">
      <div className="w-screen bg-gray-100 h-max py-10">
        <div className="h-[50%] w-full flex flex-col items-center justify-center md:gap-8 gap-4 px-80 text-center">
          <h1 className="text-5xl font-extrabold px-10">
            "Your Journey, Your Story – Let's Build It Together."
          </h1>
          <p className="text-lg text-gray-700">
            At [Your App Name], we believe in the power of a well-crafted
            resume. Our innovative resume builder combines simplicity with
            sophistication, enabling you to showcase your skills and experiences
            effortlessly. Elevate your job search with resumes that make an
            impact.
          </p>

          <Link
            href={"/resume"}
            className="p-4 rounded-lg bg-blue-500 text-gray-100 cursor-pointer hover:bg-blue-700 transition-all"
          >
            Let's Build It!!
          </Link>

          <span className="font-bold text-sm text-green-500">
            {Math.ceil(Math.random() * 2000)} resume(s) builded today
          </span>
        </div>

        <div className="mt-4 flex items-center justify-center  h-max bg-gray-300 overflow-hidden">
          <div className=" w-max h-max flex items-start ">
            <Image
            height={4000}
            width={4000}
              alt="resumetemplate"
              src="/images/resume.jpg"
              className="= w-full h-full  "
            />
          </div>
        </div>
        <div className="py-10 h-[50%] bg-white w-full flex flex-col items-center justify-center md:gap-8 gap-4 px-80 text-center">
         <span className="text-lg font-bold text-gray-700">Level up your job hunt!!</span>
          <h1 className="text-5xl font-extrabold ">
            "Build a resume that gets more job offers"
          </h1>
          <p className="text-lg text-gray-700">
          Landing more interviews and earning better job offers is only a few steps away, 
          and it all starts with your resume. Here's how to make your application stand out today:
          </p>

      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="w-60 h-max p-4 bg-gray-200 rounded-md">
        <p className="uppercase text-xl font-bold">pick a resume template</p>
        </div>
        <div className="w-60 h-40 bg-gray-200 rounded-md">

        </div>
        <div className="w-60 h-40 bg-gray-200 rounded-md">

        </div>
      </div>

         
        </div>
      </div>
    </main>
  );
}
