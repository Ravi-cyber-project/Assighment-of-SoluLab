import React from 'react'
import './styles/Navbar.css'
import { Link } from 'react-router-dom'
import { FaPlus as Plus } from "react-icons/fa";
import { RxPerson as Person } from "react-icons/rx";
import { VscFolderOpened as Folder } from "react-icons/vsc";
import { AiOutlineSetting as Setting } from "react-icons/ai";
import { TbFileUpload as Upload } from "react-icons/tb";
import { FiFileText as Report } from "react-icons/fi";
import { FiLogOut as Logout } from "react-icons/fi";

const Navbar = () => {
  return (
    <ul>
        <li><Link to="/" className="logo">logo</Link></li>
        <li><Link to="/add">
            <Plus style={{width:"23px", height:"23px"}} />
            <p>NEW</p>
        </Link></li>
        <li><Link to="/patient">
            <Person style={{width:"18px", height:"18px"}} />
            <p>PATIENT</p>
        </Link></li>
        <li><Link to="/folder">
            <Folder style={{width:"24px", height:"24px"}} />
            <p>FOLDER</p>
        </Link></li>
        <li><Link to="/upload">
            <Upload style={{width:"28px", height:"28px"}}/>
            <p>UPLOAD</p>
        </Link></li>
        <li><Link to="/report">
            <Report style={{width:"23px", height:"23px"}} />
            <p>REPORT</p>
        </Link></li>
        <li><Link to="/setting">
            <Setting style={{width:"27px", height:"27px"}} />
            <p>SETTING</p>
        </Link></li>
        <li><Link to="/logout">
            <Logout style={{width:"24px", height:"24px"}} />
            <p>LOGOUT</p>
        </Link></li>
    </ul>
  )
}

export default Navbar