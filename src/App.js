import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <Toaster></Toaster>
      <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <button className='px-2 bg-red-600 rounded-sm' onClick={toggleDarkMode}>Dark/Light</button>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </>
  );
}

export default App;