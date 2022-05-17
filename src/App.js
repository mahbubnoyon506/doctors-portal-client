
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Login/Signup';
import Header from './Components/Shared/Header/Header';
import Required from './Components/Utilities/Required';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myappointment from './Components/Pages/Dashboard/Myappointment';
import Reviews from './Components/Pages/Dashboard/Reviews';
import Myhistory from './Components/Pages/Dashboard/Myhistory';
import Users from './Components/Pages/Dashboard/Users';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <Required>
            <Appointment></Appointment>
          </Required>
        }></Route>
        <Route path='/dashboard' element={
          <Required>
            <Dashboard />
          </Required>
        }>
          <Route index element={<Myappointment></Myappointment>}></Route> 
          <Route path='reviews' element={<Reviews></Reviews>}></Route> 
          <Route path='history' element={<Myhistory></Myhistory>}></Route> 
          <Route path='users' element={<Users></Users>}></Route> 
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
