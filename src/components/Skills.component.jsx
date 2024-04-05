import React, { useEffect, useState } from 'react';
import skillsData from '../json-data/skillsData.json'
import styled, { keyframes } from 'styled-components';

const ProgressBar = ({ percentage }) => {
  const [barWidth, setBarWidth] = useState(0);
  useEffect(() => {
    setBarWidth(percentage)
    
  }, [percentage])
  return (
    <div className="relative w-full bg-indigo h-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-purple transition-all duration-3000"
        style={{ width: `${barWidth}%` }}
      />
    </div>
  );
}

const Skill = ({ title, percentage, imageUrl })=> {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedPercentage(prevPercentage => {
        const nextPercentage = prevPercentage + 1;
        return nextPercentage <= percentage ? nextPercentage : percentage;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [percentage]);
  return (
    <div>
      <div className="flex justify-between mb-1">
        <div className='flex flex-row gap-2'>
          <img className='w-5 h-5 animate-[slideRight_1s_ease-in-out]' src={imageUrl} alt={title}/>
        <span className="font-medium animate-[slideRight_1s_ease-in-out]">{title}</span>
        </div>
        <span className='[slideLeft_1s_ease-in-out]'>{animatedPercentage}%</span>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
}

function ProfessionalSkill({ title, percentage }) {

  const animatePath1 = keyframes `
  100% {
    stroke-dashoffset: ${502 - 5*percentage};
  }`

  const AnimatedCircle = styled.circle`
  animation: ${animatePath1} 2s linear forwards;
`;

  return (
    <div className='radical-bars'>
      <div className='radical-bar'>
      <svg x="0px" y="0px" viewBox='0 0 200 200' className=''>
      <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
      <AnimatedCircle className='path path-1 stroke-purple' cx="100" cy="100" r="80"></AnimatedCircle>
      </svg>
      <div className='percentage '>{percentage}%</div>
      <p className="animate-[slideLeft_1s_ease-in-out] text-center absolute -bottom-6 left-[50%] translate-x-[-50%] ">{title}</p>
    </div>
    </div>
  );
}

function MySkills() {
  return (
    <div className="text-white min-h-screen p-10 mx-10">
      <h1 className="text-center text-5xl font-bold mb-6 animate-[slideBottom_1s_ease-in-out]">My <span className='text-purple'>Skills</span></h1>
      <hr className="border-t-2 border-white w-full mb-10 animate-[slideBottom_1s_ease-in-out]"/>
      <div className="flex justify-between items-start gap-16">
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-center animate-[slideRight_1s_ease-in-out]">Technical Skills</h2>
          <hr className="border-t-2 border-white w-full mt-4 mb-6 animate-[slideBottom_1s_ease-in-out]"/>
          <div className="space-y-4">
         {
          skillsData.technicalSkills.map((skill, index) => (
            <Skill key={index} title={skill.title} percentage={skill.percentage} imageUrl={skill.imageUrl}/>
          ))
         }
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-6 text-center animate-[slideLeft_1s_ease-in-out]">Professional Skills</h2>
          <hr className="border-t-2 border-white w-full mt-4 mb-6 animate-[slideBottom_1s_ease-in-out]"/>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
           {
            skillsData.professionalSkills.map((skill, index) => (
              <ProfessionalSkill title={skill.title} percentage={skill.percentage} />
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
