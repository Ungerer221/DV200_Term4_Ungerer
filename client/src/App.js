import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages 
import Profile from './Pages/UserProfile'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup';
import QuestionPage from './Pages/QuestionPage';
import QuestionEditor from './Pages/QuestionEditor';

function App() {

  // !!! please check this !!!
  let isLogged = localStorage.getItem("token");

  let content;

  // if the user is logged the it shows the home page and if not logged in the it will take them to the signup page. 
  // it doesnt work but is this the right way to do it ?
  if (isLogged) {
    content = <HomePage />;
  } else {
    content = <SignUp />;
  }

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

        {/* //!!! Please check this !!!  */}
        {isLogged && <Route path="/" element={<HomePage />} />}
        <Route path="/" element={<Navigate replace to="/SignUp" />} />


        <Route path='/' element={<HomePage />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Question' element={<QuestionPage />} />
        <Route path='/ask' element={<QuestionEditor />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
