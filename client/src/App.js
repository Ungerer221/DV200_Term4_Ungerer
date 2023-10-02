import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages 
import Profile from './Pages/UserProfile'
import HomePage from './Pages/HomePage';
import QuestionPage from './Pages/QuestionPage';
import QuestionEditor from './Pages/QuestionEditor';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar />

      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Question' element={<QuestionPage/>} />
        <Route path='/ask' element={<QuestionEditor/>} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
