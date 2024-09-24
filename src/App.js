import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Components/Layout';

function App() {
  return (
    <>
      {/* Layout will be displayed on all pages$``````````````````` */}
      {/* search Layout on all pages in react  */}
      <Layout>
        {/* ```````````````````$Define the routes$``````````````````` */}
        <Routes>
          {/* ```````````````````$Home page route$``````````````````` */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
