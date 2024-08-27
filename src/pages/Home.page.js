import React from 'react'
import HomeComponent from '../components/Home.component'
import MySkills from '../components/Skills.component'
import ProjectComponent from '../components/Projects.component'
import ProfileCard from '../components/Profile.component'
import ContactForm from '../components/Contact.component'

const HomePage = () => {

  return (
    <div className='home'>
     <HomeComponent/>
     <ProfileCard/>
     <MySkills/>
     <ProjectComponent/>
     <ContactForm/>
    
    </div>
  )
}

export default HomePage
