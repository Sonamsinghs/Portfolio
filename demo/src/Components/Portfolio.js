import React from 'react'
import '../CSS/Portfolio.css'
//import logo from'../Image/Image.png'
export default function Portfolio() {
  return (
  <div>
   <div className='main'>
    <ul className='container'>
      <li className='navbar'>
        <a className='nav-link active' aria-current='page' to='/'>Home</a>
        </li>
        <li className='navbar'>
        <a className='nav-link' to='/'>About</a>
        </li>
        <li className='navbar'>
        <a className='nav-link' to='/'>Portfoloi</a>
        </li>
        <li className='navbar'>
        <a className='nav-link' to='/'>Contact</a>
        </li>
        </ul>
        </div>
        <button className='btn1'>Hire me</button>

        <img src='{logo}' alt='image' id='s'/>
      <h1 className='h'>I'm Web Developer</h1>
      <h1 className='h1'>Natalie E. Watson</h1>
      <p className='p'>
        Lorem ipsum dolor sit amet,consectetur adipiscing elit.Ut elit tellus<br></br> luctusnec ullamcorper mattis, Pulvinar dapibus leop llamcorper, lorem ipsum
      </p>
      <button className='btn2'>Learn more</button>
    </div>
  )
}
