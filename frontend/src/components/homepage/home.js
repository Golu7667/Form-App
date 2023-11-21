import React from 'react'
import "./home.css"
import {useNavigate} from 'react-router-dom'
function Home(props){
    const history=useNavigate()
    console.log(props.email)
    return(
        <div className='home'>
           <h1>Home</h1>
           <h1>{props.email}</h1>
           <div className='button' onClick={()=>history("/login")} >Logout</div>
        </div>
    )
}

export default Home