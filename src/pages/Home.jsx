import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'



const Home = () => {

	

  return (
	<div>
		{/* <div className="w-full m-0 p-0 bg-cover bg-top" style={{ backgroundImage: "url('https://images.pexels.com/photos/31412713/pexels-photo-31412713/free-photo-of-romantic-wedding-couple-in-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
			<Navbar/>
		<div class="container bg-white max-w-4xl mx-auto mt-56 md:mt-96 text-center break-normal">
			<p className="text-white font-extrabold text-3xl md:text-5xl">👻 Ghostwind CSS</p>
			<p className="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
		</div>
		</div> */}

		<Navbar/>
		<Banner/>
	</div>
		

  )
}

export default Home