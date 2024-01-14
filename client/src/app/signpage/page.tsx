"use client";
import React, { useEffect, useState } from "react";
import SignIn from "./sign-component/signIn";
import SignUp from "./sign-component/signUp";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Page = () => {
  const router=useRouter();
  const [isSignedUp, setIsSignedUp] = useState<boolean>(true);
  const userDetails = useSelector((state:RootState)=>state.users);
useEffect(()=>{
 if(userDetails?.currentUser){
  router.push('/')
 }
},[])
  return (
    <div className="bg-gray-200  w-full py-10 px-10 min-h-screen  flex md:flex-row flex-col md:items-start items-center md:justify-center">
      <div className="flex md:flex-row rounded-md  bg-white flex-col  h-max">
        <div className="flex items-center p-10 md:w-[50%] w-full ">
          <ul className="w-full flex flex-col gap-2 transition-all">
            <li className="w-full bg-red-500 hover:bg-red-600 flex justify-center rounded-md">
              <a
                href=""
                className="py-2 w-full flex justify-center items-center gap-2 text-white font-normal "
              >
                <svg
                  data-v-012fb887=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.658"
                  height="18"
                  viewBox="0 0 17.658 18"
                >
                  <path
                    id="Icon_ionic-logo-google"
                    data-name="Icon ionic-logo-google"
                    d="M21.21,10.995l-.091-.385H12.745v3.545h5a5.008,5.008,0,0,1-4.9,3.765,5.859,5.859,0,0,1-3.943-1.571,5.629,5.629,0,0,1-1.679-3.973A5.806,5.806,0,0,1,8.876,8.407a5.609,5.609,0,0,1,3.917-1.532,5.109,5.109,0,0,1,3.333,1.3l2.519-2.506A8.912,8.912,0,0,0,12.71,3.382h0a9.173,9.173,0,0,0-6.492,2.64A9.136,9.136,0,0,0,3.656,12.38a9.044,9.044,0,0,0,2.463,6.254,9.4,9.4,0,0,0,6.773,2.748,8.355,8.355,0,0,0,6.085-2.558A8.985,8.985,0,0,0,21.314,12.6,10.363,10.363,0,0,0,21.21,10.995Z"
                    transform="translate(-3.656 -3.382)"
                    fill="#fffefe"
                  ></path>
                </svg>
                Continue with Google
              </a>
            </li>
            <li className="w-full bg-blue-700 hover:bg-blue-800 flex justify-center rounded-md">
              <a
                href=""
                className="py-2 w-full flex justify-center items-center gap-2 text-white font-normal "
              >
                <svg
                  data-v-012fb887=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="18.671"
                  viewBox="0 0 10 18.671"
                >
                  <path
                    id="Icon_awesome-facebook-f"
                    data-name="Icon awesome-facebook-f"
                    d="M10.954,10.5l.519-3.379H8.23V4.931a1.69,1.69,0,0,1,1.905-1.826h1.474V.228A17.975,17.975,0,0,0,8.993,0C6.323,0,4.578,1.618,4.578,4.548V7.123H1.609V10.5H4.578v8.169H8.23V10.5Z"
                    transform="translate(-1.609)"
                    fill="#fff"
                  ></path>
                </svg>{" "}
                Continue with Facebook
              </a>
            </li>
            <li className="w-full bg-blue-500 hover:bg-blue-600 flex justify-center rounded-md">
              <a
                href=""
                className="py-2 w-full flex justify-center items-center gap-2 text-white font-normal "
              >
                <svg
                  data-v-012fb887=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path
                    id="Icon_awesome-linkedin-in"
                    data-name="Icon awesome-linkedin-in"
                    d="M4.029,18H.3V5.983H4.029ZM2.161,4.344A2.172,2.172,0,1,1,4.323,2.162,2.179,2.179,0,0,1,2.161,4.344ZM18,18H14.273v-5.85c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.238,1.515-2.238,3.082V18H6.367V5.983H9.946V7.622H10a3.921,3.921,0,0,1,3.531-1.941C17.306,5.682,18,8.169,18,11.4V18Z"
                    transform="translate(0 -0.001)"
                    fill="#fff"
                  ></path>
                </svg>{" "}
                Continue with Linkedin
              </a>
            </li>
            <li className="w-full bg-black hover:bg-gray-800 flex justify-center rounded-md">
              <a
                href=""
                className="py-2 w-full flex justify-center items-center gap-2 text-white font-normal "
              >
                <svg
                  data-v-012fb887=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.615"
                  height="24"
                  viewBox="0 0 24.615 24"
                >
                  <path
                    id="Icon_awesome-github"
                    data-name="Icon awesome-github"
                    d="M8.233,19.887c0,.1-.114.179-.258.179-.164.015-.278-.065-.278-.179s.114-.179.258-.179S8.233,19.773,8.233,19.887ZM6.69,19.664c-.035.1.065.213.213.243a.233.233,0,0,0,.308-.1c.03-.1-.065-.213-.213-.258A.255.255,0,0,0,6.69,19.664Zm2.194-.084c-.144.035-.243.129-.228.243s.144.164.293.129.243-.129.228-.228S9.027,19.565,8.883,19.58ZM12.149.563A11.9,11.9,0,0,0,0,12.672,12.442,12.442,0,0,0,8.412,24.542c.635.114.859-.278.859-.6s-.015-2-.015-3.047c0,0-3.474.744-4.2-1.479,0,0-.566-1.444-1.38-1.816,0,0-1.136-.779.079-.764a2.62,2.62,0,0,1,1.916,1.28,2.623,2.623,0,0,0,3.618,1.037,2.758,2.758,0,0,1,.794-1.672c-2.774-.308-5.573-.71-5.573-5.484A3.761,3.761,0,0,1,5.677,9.074,4.689,4.689,0,0,1,5.806,5.7c1.037-.323,3.424,1.34,3.424,1.34a11.724,11.724,0,0,1,6.233,0s2.387-1.667,3.424-1.34a4.687,4.687,0,0,1,.129,3.37A3.858,3.858,0,0,1,20.3,12c0,4.789-2.923,5.171-5.7,5.484a2.935,2.935,0,0,1,.844,2.3c0,1.672-.015,3.742-.015,4.149,0,.323.228.715.859.6a12.327,12.327,0,0,0,8.327-11.861A12.168,12.168,0,0,0,12.149.563ZM4.824,17.679c-.065.05-.05.164.035.258s.194.114.258.05.05-.164-.035-.258S4.888,17.614,4.824,17.679Zm-.536-.4c-.035.065.015.144.114.194a.148.148,0,0,0,.213-.035c.035-.065-.015-.144-.114-.194C4.4,17.212,4.323,17.227,4.288,17.277ZM5.9,19.044c-.079.065-.05.213.065.308.114.114.258.129.323.05s.035-.213-.065-.308C6.109,18.979,5.96,18.964,5.9,19.044Zm-.566-.73c-.079.05-.079.179,0,.293s.213.164.278.114a.226.226,0,0,0,0-.308C5.538,18.3,5.409,18.25,5.33,18.314Z"
                    transform="translate(0 -0.563)"
                    fill="#fff"
                  ></path>
                </svg>{" "}
                Continue with Github
              </a>
            </li>
          </ul>
        </div>
        <div className="h-max   p-5  md:w-[50%]  bg-white border-2 border-gray-400">
          {isSignedUp ? <SignIn /> : <SignUp />}

          {/* <GoogleLogin onSuccess={login as any}/> */}

          <div className="flex flex-row gap-2 justify-center align-center">
            <p>
              {!isSignedUp
                ? "Already have an account?"
                : "Didn't have an account?"}
            </p>
            <button
              onClick={() => setIsSignedUp(!isSignedUp)}
              className="outline-none text-blue-600"
            >
              {isSignedUp ? "Sign up" : " Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// {" "}
// asfsefEFef
// <span>
//   google
//   <svg
//     data-v-012fb887=""
//     xmlns="http://www.w3.org/2000/svg"
//     width="17.658"
//     height="18"
//     viewBox="0 0 17.658 18"
//   >
//     <path
//       id="Icon_ionic-logo-google"
//       data-name="Icon ionic-logo-google"
//       d="M21.21,10.995l-.091-.385H12.745v3.545h5a5.008,5.008,0,0,1-4.9,3.765,5.859,5.859,0,0,1-3.943-1.571,5.629,5.629,0,0,1-1.679-3.973A5.806,5.806,0,0,1,8.876,8.407a5.609,5.609,0,0,1,3.917-1.532,5.109,5.109,0,0,1,3.333,1.3l2.519-2.506A8.912,8.912,0,0,0,12.71,3.382h0a9.173,9.173,0,0,0-6.492,2.64A9.136,9.136,0,0,0,3.656,12.38a9.044,9.044,0,0,0,2.463,6.254,9.4,9.4,0,0,0,6.773,2.748,8.355,8.355,0,0,0,6.085-2.558A8.985,8.985,0,0,0,21.314,12.6,10.363,10.363,0,0,0,21.21,10.995Z"
//       transform="translate(-3.656 -3.382)"
//       fill="#fffefe"
//     ></path>
//   </svg>
// </span>
// <span>
//   facebook{" "}
//   <span data-v-012fb887="">
//     <svg
//       data-v-012fb887=""
//       xmlns="http://www.w3.org/2000/svg"
//       width="10"
//       height="18.671"
//       viewBox="0 0 10 18.671"
//     >
//       <path
//         id="Icon_awesome-facebook-f"
//         data-name="Icon awesome-facebook-f"
//         d="M10.954,10.5l.519-3.379H8.23V4.931a1.69,1.69,0,0,1,1.905-1.826h1.474V.228A17.975,17.975,0,0,0,8.993,0C6.323,0,4.578,1.618,4.578,4.548V7.123H1.609V10.5H4.578v8.169H8.23V10.5Z"
//         transform="translate(-1.609)"
//         fill="#fff"
//       ></path>
//     </svg>
//   </span>
// </span>
// <span>
//   Github{" "}
//   <span data-v-012fb887="">
//     <svg
//       data-v-012fb887=""
//       xmlns="http://www.w3.org/2000/svg"
//       width="24.615"
//       height="24"
//       viewBox="0 0 24.615 24"
//     >
//       <path
//         id="Icon_awesome-github"
//         data-name="Icon awesome-github"
//         d="M8.233,19.887c0,.1-.114.179-.258.179-.164.015-.278-.065-.278-.179s.114-.179.258-.179S8.233,19.773,8.233,19.887ZM6.69,19.664c-.035.1.065.213.213.243a.233.233,0,0,0,.308-.1c.03-.1-.065-.213-.213-.258A.255.255,0,0,0,6.69,19.664Zm2.194-.084c-.144.035-.243.129-.228.243s.144.164.293.129.243-.129.228-.228S9.027,19.565,8.883,19.58ZM12.149.563A11.9,11.9,0,0,0,0,12.672,12.442,12.442,0,0,0,8.412,24.542c.635.114.859-.278.859-.6s-.015-2-.015-3.047c0,0-3.474.744-4.2-1.479,0,0-.566-1.444-1.38-1.816,0,0-1.136-.779.079-.764a2.62,2.62,0,0,1,1.916,1.28,2.623,2.623,0,0,0,3.618,1.037,2.758,2.758,0,0,1,.794-1.672c-2.774-.308-5.573-.71-5.573-5.484A3.761,3.761,0,0,1,5.677,9.074,4.689,4.689,0,0,1,5.806,5.7c1.037-.323,3.424,1.34,3.424,1.34a11.724,11.724,0,0,1,6.233,0s2.387-1.667,3.424-1.34a4.687,4.687,0,0,1,.129,3.37A3.858,3.858,0,0,1,20.3,12c0,4.789-2.923,5.171-5.7,5.484a2.935,2.935,0,0,1,.844,2.3c0,1.672-.015,3.742-.015,4.149,0,.323.228.715.859.6a12.327,12.327,0,0,0,8.327-11.861A12.168,12.168,0,0,0,12.149.563ZM4.824,17.679c-.065.05-.05.164.035.258s.194.114.258.05.05-.164-.035-.258S4.888,17.614,4.824,17.679Zm-.536-.4c-.035.065.015.144.114.194a.148.148,0,0,0,.213-.035c.035-.065-.015-.144-.114-.194C4.4,17.212,4.323,17.227,4.288,17.277ZM5.9,19.044c-.079.065-.05.213.065.308.114.114.258.129.323.05s.035-.213-.065-.308C6.109,18.979,5.96,18.964,5.9,19.044Zm-.566-.73c-.079.05-.079.179,0,.293s.213.164.278.114a.226.226,0,0,0,0-.308C5.538,18.3,5.409,18.25,5.33,18.314Z"
//         transform="translate(0 -0.563)"
//         fill="#fff"
//       ></path>
//     </svg>
//   </span>
// </span>
// <span>
//   Linkedin{" "}
//   <span data-v-012fb887="">

//   </span>
// </span>
