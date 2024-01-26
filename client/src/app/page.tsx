import Image from "next/image";
import Link from "next/link";
import { BellRing } from 'lucide-react';

export default function Home() {
  return (
    <main className="mt-20 w-[100%] bg-gray-800">
      <div className="w-full bg-gray-100 py-10">
        <div className="h-[50%] flex flex-col items-center justify-center md:gap-8 gap-4 md:px-60 px-20 text-center">
          <h1 className="text-5xl font-extrabold px-10">
            &quot;Your Journey, Your Story – Let&apos;s Build It Together.&quot;
          </h1>
          <p className="text-lg text-gray-700">
            At <b> Online CV-Builder</b>, we believe in the power of a
            well-crafted resume. Our innovative resume builder combines
            simplicity with sophistication, enabling you to showcase your skills
            and experiences effortlessly. Elevate your job search with resumes
            that make an impact.
          </p>

          <Link
            href={"/resume"}
            className="p-4 rounded-lg bg-blue-500 text-gray-100 cursor-pointer hover:bg-blue-700 transition-all"
          >
            Let&apos;s Build It!!
          </Link>

          <span className="font-bold text-sm text-green-500">
            {Math.ceil(Math.random() * 2000)} resume(s) builded today
          </span>
        </div>

        <div className="mt-4 py-2 flex items-center justify-center h-max bg-gray-300 overflow-hidden">
          <div className="w-max h-max flex items-start ">
            <Image
              height={4000}
              width={4000}
              alt="resumetemplate"
              src="/images/resume.jpg"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="py-10 h-[50%] bg-white flex flex-col items-center justify-center md:gap-8 gap-4 md:px-60 px-20 text-center">
          <span className="text-lg font-bold text-gray-700">
            Level up your job hunt!!
          </span>
          <h1 className="text-5xl font-extrabold ">
            &quot;Build a resume that gets more job offers&quot;
          </h1>
          <p className="text-lg text-gray-700">
            Landing more interviews and earning better job offers is only a few
            steps away, and it all starts with your resume. Here&apos;s how to
            make your application stand out today:
          </p>

          <div className="flex flex-col w-screen p-6 bg-gray-200 md:flex-row gap-8 items-center justify-center">
            <div className="md:w-60 w-[80%] h-56 p-8 bg-gray-100 rounded-md shadow-lg flex flex-col justify-between">
              <p className="uppercase text-xl font-bold">
                sign in and pick a resume template
              </p>
              <span className="text-gray-500">
                With a good resume template, you don&apos;t need to worry about
                details like formatting.
              </span>
            </div>
            <div className="md:w-60 w-[80%] h-56 p-6 bg-gray-100 rounded-md shadow-lg flex flex-col justify-between">
              <p className="uppercase text-xl font-bold">customize each section</p>
              <span className="text-gray-500">
                Fill in your personal information and work experience.
              </span>
            </div>
            <div className="md:w-60 w-[80%] h-56 px-6 bg-gray-100 rounded-md shadow-lg flex flex-col justify-between py-8">
              <p className="uppercase text-xl font-bold">Download/print your resume</p>
              <span className="text-gray-500">Download or print your resume with ease.</span>
            </div>
          </div>
          <BellRing className="text-red-500 animate-bounce" />
          <p className="text-lg text-gray-700">
          This resume builder fullstack application is hosted on render free-tier. So it may
          take a while to spin up and to connect with a database also if you revisit the
          website later. So, wait a minute or two and you are good to go. <br /> THANK YOU!!
          </p>
        </div>
      </div>
    </main>
  );
}
