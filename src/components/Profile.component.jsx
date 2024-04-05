import React from "react";
import ProfileImg from "../imgs/profile.jpg";
import LinkedinImg from '../imgs/linkedin.gif';
import GithubImg from '../imgs/github.gif';
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return ( 
    <div className="text-white px-10 md:mx-10 mx-1 ">
      <h1 className="text-center text-5xl font-bold mb-6 animate-[slideBottom_1s_ease-in-out]">About <span className="text-purple">Me</span></h1>
      <hr className="border-t-2 border-white w-full mb-10" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="md:col-span-1 lg:col-span-1">
          <div className=" md:w-[300px] mx-auto w-[300px] [h-400px]">
            <img
              src={ProfileImg}
              alt="img"
              className="animate-[slideRight_1s_ease-in-out] rounded-lg bg-gradient-to-r from-purple via-red to-indigo p-[2px] hover:shadow-3xl duration-300 hover:shadow-purple_red"
              width="300"
              height="300"
              style={{ aspectRatio: "300 / 350", objectFit: "cover" }}
            />
            <div className="animate-[slideTop_1s_ease-in-out] mt-4 flex justify-between md:justify-between bg-transparent">
              <Link to="https://github.com/Goutam96801" target="_blank" className="flex flex-row gap-2 items-centers px-4 py-1 border hover:scale-105 text-center  border-purple border-solid hover:bg-purple duration-500 rounded-xl text-white">
                <img src={GithubImg} className="w-8 h-8 rounded"/>
                <p className="bg-transparent font-semibold">Github</p>
              </Link>
              <Link to="https://www.linkedin.com/in/goutam-kumar-choudhary-74601a181" target="_blank" className=" flex flex-row gap-2 items-center px-4 py-1 border hover:scale-105 text-center border-purple border-solid hover:bg-purple duration-500 rounded-xl text-white">
              <img src={LinkedinImg} className="w-8 h-8 rounded"/>
                <p className=" bg-transparent font-semibold">LinkedIn</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1 space-y-6">
          <div className=" w-full flex justify-center items-center">
          <table className="">
            <tbody>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Name:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">Goutam Kumar Choudhary</span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">B.E Degree:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">Chandigarh University <span className="text-red">(Computer Science & Engineering)</span></span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">B.E CGPA:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">7.64 CGPA <span className="text-muted capitalize text-red">(till 5th semester)</span></span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Date of Birth:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">May 19, 2002</span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Address:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">Madhubani, Bihar, India</span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Postal Code:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">847235</span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Email:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">
                    gautamkumar96801@gmail.com
                  </span>
                </td>
              </tr>
              <tr>
                <td className= "p-[14px] animate-[slideRight_1s_ease-in-out]">Phone:</td>
                <td className= "p-[14px] animate-[slideLeft_1s_ease-in-out]">
                  <span className="text-purple">+91-7323802366</span>
                </td>
              </tr>
               
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
