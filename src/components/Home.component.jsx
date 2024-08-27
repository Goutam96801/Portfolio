import React, { useEffect } from 'react';
import HomeProfileImg from "../imgs/goutam's.png"
import AOS from 'aos';
import "aos/dist/aos.css";

const HomeComponent = () => {

  const handleResumeClick = (e) => {
    e.preventDefault();
    const resumeLink = 'https://drive.google.com/file/d/1RVNbn2bgsOpc5zLvzzMRQxrMuMFakzzP/view?usp=sharing'

    window.open(resumeLink, '_blank')
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="p-10 mx-20 mb-5">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
        <div className="flex-1 " data-aos="fade-right">
  
          <h1 className="text-6xl font-bold " >Hey There!</h1>
          <h2 className="text-5xl font-bold mt-4">I Am <span className='text-purple'>Goutam Kumar Choudhary</span></h2>
          <hr className="border-t-2 border-purple w-full mt-4 mb-6"/>
          <span className=" bg-white text-black font-semibold px-2 py-1 rounded-full" variant="secondary">
            Software Developer
          </span>
          <p className="text-lg my-6">
          Hi! I'm Goutam, and I'm a 3rd year student at Chandigarh University. I'm studying computer science, and I really love it! I'm interested in learning more about how computers work, and I have been working on my own projects that combine coding and art.
          </p>
          <button onClick={handleResumeClick} className="px-6 py-2 rounded-full bg-purple hover:bg-indigo hover:scale-105 duration-500" variant="default">
            Resume
          </button>
        </div>
        <div className="flex-1 flex justify-end " data-aos="fade-left">
          <div className='w-200 h-200 bg-gradient-to-r from-purple via-red to-indigo p-[2px] rounded-full hover:shadow-3xl hover:shadow-purple_red duration-300'>
          <img
            alt="Goutam Choudhary"
            className="rounded-full"
            height="300"
            src={HomeProfileImg}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
