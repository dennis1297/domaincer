import Button from '@mui/material/Button';
import React from 'react'
import '../components/homepage.css'
import Footer from './Footer';
import Description from './Description'

const Homepage = () => {
  return (
<div>
	<nav class="navbar">
		<div class="navdiv">
			<div class="logo"><a href="/">Domaincer</a> </div>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Description</a></li>
				<li><a href="#">Footer</a></li>
				<Button variant="outlined" href="/login">Login</Button>
				<Button variant="outlined" href="/signin">Signin</Button>
			</ul>
		  </div>
	</nav>
    <Description/>
    <Footer/>
</div>
 
  )
}

export default Homepage