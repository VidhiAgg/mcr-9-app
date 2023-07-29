import { Explore, Home, PlaylistAdd, WatchLater, } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"
const getActiveStyle= ({isActive})=>(
    {
       
        margin:"1rem",
        fontWeight : isActive ?"800" :"700",
    listStyle: "none",
       color: isActive ?"blue":"black",
        textDecoration :"none",
        paddingTop :"2rem",
    }

)
const SideNavigationBar = () => {
  return (
    <div className='side-bar'>
    <nav className='video-nav-header'>
    
    <NavLink style={getActiveStyle} to="/"><Home/>Home</NavLink>
    <NavLink style={getActiveStyle}to="/explore"><Explore/>Explore</NavLink>
    <NavLink style={getActiveStyle} to="/playlist"><PlaylistAdd/> Videos</NavLink>
    <NavLink style={getActiveStyle}to="/watchLaterVideos"><WatchLater/>Watch Later</NavLink>

     
        </nav>
    </div>
  )
}

export default SideNavigationBar