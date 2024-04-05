import React from 'react';
import ProjectsData from '../json-data/projectsData.json'
import { Link } from 'react-router-dom';
import AnimationWrapper from './page-animation';

const ProjectComponent = () => {
  const generateApiFlashUrl = (url) => {

    return `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.REACT_APP_ACCESS_KEY}&wait_until=page_loaded&url=${encodeURIComponent(url)}`;
  };

  return (
    <div className="text-white min-h-screen p-10 sm:mx-10">
        <h1 className="text-center text-5xl font-bold mb-6 animate-[slideBottom_1s_ease-in-out]">My <span className='text-purple'>Projects</span></h1>
        <hr className="border-t-2 border-white w-full mb-10 animate-[slideRight_1s_ease-in-out]"/>
        <div className='flex gap-4 flex-col'>
        {
          ProjectsData.map((project, i) => {
            return (
              <AnimationWrapper key={i}
                  transition={{ duration: 1, delay: i * 0.1 }}
>
                <div className="flex w-full p-2 rounded-lg relative shadow-[10px_10px_30px_-10px_rgba(255,255,255,0.4)] hover:scale-105 duration-500 animate-[slideBottom_1s_ease-in-out]" key={i}>
              <div className='flex-2 hover:scale-95 duration-300 w-full h-[300px] overflow-hidden rounded-lg py-2 flex items-center' >
                <img
              src={project.imagePreview ? project.imagePreview : generateApiFlashUrl(project.liveLink)}
              alt="UI Design"
              className="hidden sm:block rounded-lg animate-[slideRight_1s_ease-in-out]"
            />
            </div>
              <div className='flex-2 flex flex-col justify-center gap-4 items-center px-4'>
              <h1 className="text-3xl bg-transparent font-semibold text-center text-wrap text-purple animate-[slideBottom_1s_ease-in-out]">{project.title}</h1>
              <hr className="border-t-2 border-white w-full mb-4 animate-[slideTop_1s_ease-in-out]" />
              <ul className='list-disc text-sm px-4 animate-[slideTop_1s_ease-in-out]'>
              {
                project.description.map((des, i) => (

                      <li className=' pb-1 text-center bg-transparent ' key={i}>{des.des}</li>
                  
                 
                ))
              }
              </ul>
            
              </div>
              <div className='flex-1 flex flex-col justify-center gap-4 p-2 animate-[slideLeft_1s_ease-in-out]' >
              <Link to={project.githubLink} target='_blank' className='px-4 py-2 bg-purple rounded-full capitalize hover:bg-indigo hover:scale-105 duration-500 w-full'>GitHub </Link>
              <Link to={project.liveLink} target='_blank' className='px-4 py-2 bg-purple rounded-full capitalize hover:bg-indigo hover:scale-105 duration-500 w-full'>Live </Link>
              </div>
          </div>
              </AnimationWrapper>
            )
          }
            
          )
        }
        </div>
    </div>
  );
};

export default ProjectComponent;
