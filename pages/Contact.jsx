import React from 'react';
import './HomePage.css'; // Asegúrate de crear este archivo CSS

const ContactPage = () => {
 return (
  <div class="flex h-[730px] items-center justify-start bg-white">
    <div class="mx-auto w-full max-w-lg p-10 bg-white border-gray-300 border-[1px] rounded-md shadow-lg">
      <h1 class="text-gray-800 text-3xl font-bold">Contactanos</h1>
      <p class="mt-3">Escribe un correo a <a href="mailto:contacto@helloheath.com" class="underline text-[#3E8AED]">contacto@helloheath.com</a> o escribenos aquí:</p>
  
      <form class="mt-10">
        <div class="grid gap-6 sm:grid-cols-2">
          <div class="relative z-0">
            <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-400 focus:border-[#3E8AED] focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#3E8AED]">Your name</label>
          </div>
          <div class="relative z-0">
            <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-400 focus:border-[#3E8AED] focus:outline-none focus:ring-0" placeholder=" " />
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#3E8AED] ">Your email</label>
          </div>
          <div class="relative z-0 col-span-2">
            <textarea name="message" rows="5" class="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-[#3E8AED] focus:outline-none focus:ring-0" placeholder=" "></textarea>
            <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#3E8AED]">Your message</label>
          </div>
        </div>
        <button type="submit" class="mt-5 rounded-md bg-black px-10 py-2 text-gray-400">Send Message</button>
      </form>
    </div>
  </div>
 );
}

export default ContactPage;