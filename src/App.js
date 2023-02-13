
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Patient from './components/Patient';
import Folder from './components/Folder';
import Upload from './components/Upload';
import Report from './components/Report';
import Setting from './components/Setting';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Home from './components/Home';






function App() {
  return (
    <>
      
      <BrowserRouter>
      <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/patient" element={<Patient/>} />
            <Route path="/folder" element={<Folder />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/report" element={<Report />} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
