import React from 'react';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
          Welcome to My Portfolio
        </h1>
        <div className='max-w-4xl mx-auto'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
              About Me
            </h2>
            <p className='text-gray-600 leading-relaxed'>
              This is your portfolio built with React, TypeScript, and Tailwind
              CSS. Start building your amazing portfolio here!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
