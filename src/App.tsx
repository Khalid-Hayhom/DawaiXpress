
import React from 'react';
import { Pill, Heart, MapPin, Send, Phone, Mail } from 'lucide-react';
import Map from './components/Map';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <header className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-md">
              <div className="text-white font-bold text-xl">DX</div>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 inline-block text-transparent bg-clip-text">
                DawaiXpress
              </h1>
              <div className="flex items-center -mt-1">
                <Pill className="h-4 w-4 text-purple-500" />
                <span className="text-xs text-gray-500 ml-1">Medicines Delivered</span>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-600">About Us</a>
            <a href="#" className="text-purple-600 font-medium">Contact</a>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-600">Reach out to us for all your medicine delivery needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div>
                <p className="text-sm text-gray-500">All fields marked with * are required</p>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-md hover:from-purple-700 hover:to-indigo-700 flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">
                  Moti Nagar Eid Gah Road<br/>
                  Khalilabad 272175
                </p>
              </div>
              
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700">+91 9876543210</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                <p className="text-gray-700">info@dawaixpress.com</p>
              </div>
            </div>
            
            <Map />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 text-sm">&copy; 2023 DawaiXpress. All rights reserved.</p>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 text-red-500 mr-1" />
              <p className="text-gray-600 text-sm">Delivering care to your doorstep</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
