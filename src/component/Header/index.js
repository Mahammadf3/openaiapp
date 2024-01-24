
import { RxDashboard } from "react-icons/rx";
import { BsFilterLeft } from "react-icons/bs";
import { MdStackedBarChart } from "react-icons/md";
import { SiIcons8 } from "react-icons/si";
import { FaFileInvoice } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoIosNotifications } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import Subtract from "../Images/Subtract.jpg"
import {useState} from "react"
import Home from "../Home";
import men from "../Images/men.jpg"

import './index.css'

const Header = () => {

    const[data,setData]=useState(false)
    const[homeData,setHome]=useState(false)

    const getFilter=()=>{
        setData(prevValue=>!prevValue)
    }

    const clickHomeData=()=>{
        setHome(prevHome=>!prevHome)
    }

  return (
    <nav className="containerFlow" >
        <div className="nav-header">
    {data ?<div className="nav-content2">
        <div className="baseContainer">
      <img src={Subtract} alt="logo" id="hello" className="logoImage2"/>
      <label htmlFor="hello" className="helloBase">Base</label>
      </div>
      <RxCross2 className="filterLogo" onClick={getFilter}/>
    </div> :<div className="nav-content">
      
      <BsFilterLeft  className="filterLogo" onClick={getFilter}/>
   
      <img src={Subtract} alt="logo" className="logoImage"/>
    </div>}
     
        <div className="notationContainer">
        <IoIosNotificationsOutline className="iconData"/>
      
        <img src={men} alt=" men" className="notationContainer2"/>
       
        </div>
        </div>

        {data &&<div className="uploadContainer">
         <div className="dataContainer">
                <div className="subContainer">
                <RxDashboard  id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">DashBoard</label>
                </div>
                <div className="subContainer" onClick={clickHomeData}>
                <MdStackedBarChart  id="dashbord" className="rxDashBord" />
                <label htmlFor="dashboard">Upload</label>
                </div>
                <div className="subContainer">
                <SiIcons8 id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">Invoice</label>
                </div>
                <div className="subContainer">
                <FaFileInvoice id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">Schedule</label>
                </div>
                <div className="subContainer">
                <SlCalender id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">Calender</label>
                </div>
                <div className="subContainer">
                <IoIosNotifications  id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">Notification</label>
                </div>
                <div className="subContainer">
                <IoIosSettings id="dashbord" className="rxDashBord"/>
                <label htmlFor="dashboard">Setting</label>
                </div>
            </div>
            {homeData && <div className="homeContainer2"><Home /></div>}
            </div>}
      
    </nav>
  )
}

export default Header