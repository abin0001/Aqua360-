import {Routes, Route } from "react-router-dom";
import './App.css';
import ReactDOM from 'react-dom'

import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Chatbot from "./components/Chatbot/Chatbot";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Globeinfo from "./components/Globeinfo/Globeinfo";
import Notification from "./components/Notification/Notification";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Waterusage from "./components/Waterusage/Waterusageanalytics";
import SignUp from './components/SignUp/SignUp';


function App() {
  return (

        <Routes>
          <Route path="/" element={<Landing />} ></Route>
            <Route path='Login' element={<Login />}  ></Route>
            <Route path="Home" element={<Home />} ></Route>
            <Route path='Chatbot' element={<Chatbot />}  ></Route>
            <Route path="Settings" element={<Settings />} ></Route>
            <Route path='Leaderboard' element={<Leaderboard />}  ></Route>
            <Route path="Globeinfo" element={<Globeinfo />} ></Route>
            <Route path='Notification' element={<Notification />}  ></Route>
            <Route path="Profile" element={<Profile />} ></Route>
            <Route path='Waterusage' element={<Waterusage />}  ></Route>
            <Route path="SignUp" element={<SignUp />} ></Route>
        </Routes>
  );
}


export default App;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);