import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './navbar';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sohnb1g', 'template_02kdq6h', form.current, 'ETh4mRn5hhRetAbvz')
      .then((result) => {
          console.log(result.text);
          console.log("successful")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
        <NavBar/>
        <div className='text-xl pt-10 font-bold leading-10 lg:pt-36 md:pt-30 '>
        <p className='text-center pt-10 pb-10 lg:text-7xl mg:text-[82px] text-[78px]  text-[#00df9a] uppercase'>Contact</p>
        <form ref={form} onSubmit={""} className="flex flex-col align-middle md:max-w-2xl sm:max-w-xl max-w-[300px] mx-auto ">
          <label>Name</label>
          <input type="text" name="user_name" className='rounded-lg '/>
          <label>Email</label>
          <input type="email" name="user_email" className='rounded-lg ' />
          <label>Message</label>
          <textarea name="message" className='rounded-lg '/>
          <input type="submit" value="Send" className='p-1 m-6 bg-[#00df9a] w-20 mx-auto rounded-lg'/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs