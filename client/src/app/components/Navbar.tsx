"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { resumeTemplate } from "../utils/template";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar: React.FC = () => {
  const [showDiv, setShowDiv] = useState<Boolean>(false);
const userDetails = useSelector((state:RootState)=>state.users);
console.log(userDetails);
  return (
    <div className=" px-10 min-w-full h-20  shadow-md flex flex-row items-center justify-between">
      <div>Logo</div>
      <div className=" h-full flex flex-row items-center justify-between text-md gap-6 font-medium">
        <Link
          href={"/resume"}
          onMouseEnter={() => setShowDiv(true)}
          onFocus={() => setShowDiv(true)}
          onBlur={() => setShowDiv(false)}
          onMouseLeave={() => setShowDiv(false)}
          className={`relative flex h-full flex-row items-center gap-0.5 md:gap-1  cursor-pointer hover:text-blue-500 transition-all ${
            showDiv && "text-blue-500"
          }`}
        >
          Resume
          <ChevronDown width={20} height={20} />
        </Link>
        {showDiv && (
          <div
            onMouseEnter={() => setShowDiv(true)}
            onMouseLeave={() => setShowDiv(false)}
            className="z-10 w-[40%] h-max absolute top-20 left-[50%] -translate-x-[30%] bg-white shadow-md p-4"
          >
            <div className="w-full flex items-center justify-between px-2 font-medium">
              <span className="text-lg">Resume Template</span>
              <Link
                href={"/resume"}
                className="text-blue-500 hover:text-blue-700 py-1 "
              >
                {" "}
                View all
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 w-full px-2 mt-4">
              {resumeTemplate.map((resume, index) => {
                return (
                  <Link
                    href={`/resume/${resume.to}`}
                    key={index}
                    className="w-[48%] h-max group cursor-pointer"
                  >
                    <div className="flex flex-row w-full justify-between items-center group-hover:text-blue-500">
                      <div className="flex gap-2 ">
                        <span>
                          <resume.icon />
                        </span>
                        <span className="capitalize">{resume.name}</span>
                      </div>
                      <ChevronRight />
                    </div>
                    <p className="p-3 text-gray-600">{resume.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        <span className="flex flex-row items-center hover:text-blue-500 cursor-pointer ">
          Support
        </span>
        <span className="font-bold text-xl text-yellow-600">{userDetails?.currentUser?.username}</span>
        <span className="w-1 h-6 bg-blue-500"></span>
        <div className="w-60 flex flex-row items-center justify-between">
          <div className="w-full flex flex-row items-center ">
            <Link href="/signpage" className="px-4 py-2  text-blue-800 hover:text-blue-500 font-medium tracking-wide transition-all">
              Log In
            </Link>
            <Link href="/signpage" className="px-4 py-2  bg-blue-600 rounded-md text-gray-100 hover:bg-blue-800 transition-all  font-medium  tracking-wide">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
