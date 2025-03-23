
import React from 'react';
import { Pill, Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <header className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-center md:justify-start">
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
        </div>
      </header>
      <main className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to DawaiXpress</h2>
          <p className="text-lg text-gray-600">Your one-stop solution for all your medicine delivery needs</p>
        </div>
      </main>
    </div>
  );
};

export default App;
