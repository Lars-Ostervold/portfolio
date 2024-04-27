'use client';
import { useState } from 'react';
import Link from 'next/link';
import ChatIcon from '@mui/icons-material/Chat';
import { NextResponse } from 'next/server'
import { POST } from 'app/api/sendEmail/route';


// To add: email logic, back to home button, and styling
//FIX: The children bit causes some issues when going back to the home page. 
//Need to figure out how the logic works. That's in layout.tsx. 

function Page() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      // Email sent successfully
      alert('Email sent successfully');
    } else {
      // Error sending email
      alert('Error sending email');
    }
  };

  //Class for input text box
  const inputClassName = "w-full mt-1 p-2 rounded-lg border border-gray-300 dark:border-black bg-sky-100 dark:bg-slate-600";

  return (
    <section>
    <div className="card bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-md p-4 md:pd-2 border border-gray-400 dark:border-gray-600 overflow-hidden">
      <h1 className="font-medium text-3xl mb-2 tracking-tighter"> Contact me! 🤠</h1>
      <p className="prose prose-neutral dark:text-white mb-8">
        You want to talk about something? Let's do it.
        You got an idea you want to work on? I'm in. I'm fired up by people who are fired up.
        Just shoot me a message through the form below and I'll get back as soon as I see it.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="prose prose-neutral dark:text-white mb-8">Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClassName} />
        </label>
        <label className="block">
          <span className="prose prose-neutral dark:text-white mb-8">Email:</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClassName}/>
        </label>
        <label className="block">
          <span className="prose prose-neutral dark:text-white mb-8">Message:</span>
          <textarea name="message" value={formData.message} onChange={handleChange} className={inputClassName} />
        </label>
        <div className="flex justify-center">
          <input type="submit" value="Submit" className="w-1/2 py-2 px-4 border dark:border-white rounded-lg bg-sky-200 dark:bg-slate-700 dark:text-white font-bold hover:bg-sky-500 dark:hover:bg-gray-800 transition-colors duration-200" />
        </div>
      </form>
    </div>
    </section>
  );
}

export default Page;