import React from 'react'

const contact = () => {
  return (
    <div >
      <div className='bg-gray-100 flex items-center justify-center h-screen'>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
    <form action="https://formspree.io/f/mgvekbov" method="POST">
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" 
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" 
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
        <textarea id="message" name="message"  placeholder="Your Message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      
      <button type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Send Message
      </button>
    </form>
  </div>
  </div>
    </div>
  )
}

export default contact