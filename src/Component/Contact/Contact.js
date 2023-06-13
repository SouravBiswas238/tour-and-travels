import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" required />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" rows="4" className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring focus:ring-blue-300" required></textarea>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
