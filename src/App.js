import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import Viewpro from "./pages/Viewpro";
import MyProfile from "./components/MyProfile";
import MyEnquiry from "./components/MyEnquiry";
import AddPro from "./components/AddPro";
import axios from 'axios';
import { UserContextProvider } from './components/UserContext';
import Auth from './components/Auth';
import About from './components/About';
import Contact from './components/Contact';
axios.defaults.baseURL = 'http://localhost:4000'

function App() {
  return (
    <>
      <Header/>
      <UserContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/register' element={<Auth register/>}></Route>
        <Route path='/viewpro' element={<Viewpro/>}/>
        <Route path='/account' element={<ProfilePage/>}/>
        <Route path='/account/myprofile' element={<MyProfile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account/myenquiry' element={<MyEnquiry/>}/>
        <Route path='/account/viewpro/addprofile' element={<AddPro/>}/>
      </Routes>
      </UserContextProvider>
      <Footer/>
    </>
  );
}

export default App;
