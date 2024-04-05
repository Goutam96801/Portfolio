import React, { useState } from "react";
import { Link } from "react-router-dom";
// import emailjs from 'emailjs'
// import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {

  // const formRef = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_h23j6pq', 'template_wns4frh', formRef.current, 'jJMOoTjV76T-J7V-P')
  //   .then((result) => {
  //       toast.success('Thank you for contacting us!')
  //   })
  //   .catch((error) => {
  //     console.log(error.text);
  //     toast.error('Failed to send email!')
  // });
  // }
  return (
    <div className="text-white p-10">
      {/* <Toaster/> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4 animate-[slideBottom_1s_ease-in-out]">Let's Work <span className="text-purple">Together</span></h2>
          <p className="mb-6 animate-[slideRight_1s_ease-in-out]">
            Are you seeking a proficient developer with expertise in React.js,
            Node.js, and the MERN stack? Look no further! Whether you have a
            project in mind or are interested in discussing job opportunities,
            I'm here to help. Let's collaborate and turn your ideas into
            reality!
          </p>
          <Link target="_blank" to="mailto:gautamkumar96801@gmail.com" className="flex items-center mb-2 animate-[slideRight_1s_ease-in-out]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500 mr-2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            gautamkumar96801@gmail.com
          </Link>
          <div className="animate-[slideRight_1s_ease-in-out] flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500 mr-2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +919472456791
          </div>
          <div className="flex space-x-4">
            <Link className="animate-[slideRight_1s_ease-in-out]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            </Link>

            <Link className="animate-[slideTop_1s_ease-in-out]" to="https://twitter.com/GautamK95443811" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4 .9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            </Link>
            <Link className="animate-[slideTop_1s_ease-in-out]" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-pink-600"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            </Link>
            <Link className="animate-[slideLeft_1s_ease-in-out]" target="_blank" to="https://www.linkedin.com/in/goutam-kumar-choudhary-74601a181/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-700"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 animate-[slideBottom_1s_ease-in-out]">Contact <span className=" text-purple">Me</span></h2>
          <form className="flex flex-col space-y-4">
            <input
              className="animate-[slideRight_1s_ease-in-out] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Name"
              name="user_name"
              type="text"
            />
            <input
              className=" animate-[slideLeft_1s_ease-in-out] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter Your Email"
              type="email"
              required
              name="user_email"
            />
            <input
              className=" animate-[slideRight_1s_ease-in-out] flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter Your Subject"
              type="text"
              name="subject"
            />
            <textarea
              className=" animate-[slideLeft_1s_ease-in-out] flex min-h-[80px] w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
              placeholder="Enter Your Message"
              name="message"
              required
            ></textarea>
            <button type="submit" className="animate-[slideTop_1s_ease-in-out] inline-flex items-center justify-center w-full py-2 bg-purple hover:bg-indigo hover:scale-105 duration-500 text-center rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
