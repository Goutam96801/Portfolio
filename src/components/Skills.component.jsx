import React, { useEffect, useState } from 'react';
import skillsData from '../json-data/skillsData.json'
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';

function MySkills() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="text-white min-h-screen mx-10">
      <h1 className="text-center text-5xl font-bold mb-6 animate-[slideBottom_1s_ease-in-out]" data-aos="fade-down">My <span className='text-purple'>Skills</span></h1>
      <hr className="border-t-2 border-white w-full mb-10 animate-[slideBottom_1s_ease-in-out]"/>
      <div className="flex justify-between items-start gap-16">
        <div className="w-1/2" data-aos="fade-right">
          <h2 className="text-3xl font-semibold mb-6 text-center animate-[slideRight_1s_ease-in-out]" >Technical Skills</h2>
          <hr className="border-t-2 border-white w-full mt-4 mb-6 animate-[slideBottom_1s_ease-in-out]"/>
          <div className="space-y-4 flex flex-row justify-between gap-4 flex-wrap">
         {
          skillsData.technicalSkills.map((skill, index) => (
            <div key={index} className='w-[50%] p-2 flex flex-row'>
              <h1>{skill.title}</h1>
              <img width={40} height={40} src={skill.imageUrl} alt='missing'/>
            </div>
          ))
         }
          </div>
        </div>
        <div className="w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-semibold mb-6 text-center animate-[slideLeft_1s_ease-in-out]">Professional Skills</h2>
          <hr className="border-t-2 border-white w-full mt-4 mb-6 animate-[slideBottom_1s_ease-in-out]"/>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
           {
            skillsData.professionalSkills.map((skill, index) => (
              <p key={index}>{skill.title}</p>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
