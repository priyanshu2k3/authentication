import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { AppProvider } from "./context/context";

function App() {
  return (
  <>
  <AppProvider>
    <Navbar/>
    <Profile/>
    <BrowserRouter>
    <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<SignUp/>}/>
    </Routes></BrowserRouter>
  </AppProvider>
  </>
  );
}

export default App;

