import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from './components/navbar';

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
        <div className='text-xl pt-44 font-bold leading-10 lg:pt-36'>
        <p className='text-center text-5xl pt-10 pb-10 lg:text-7xl mg:6xl'>Contact</p>
        <form ref={form} onSubmit={""} className="flex flex-col align-middle md:max-w-2xl sm:max-w-lg max-w-[300px] mx-auto ">
          <label>Name</label>
          <input type="text" name="user_name" className=''/>
          <label>Email</label>
          <input type="email" name="user_email" className='' />
          <label>Message</label>
          <textarea name="message" className=''/>
          <input type="submit" value="Send" className=''/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs