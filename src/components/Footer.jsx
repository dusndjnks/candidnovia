import React from 'react'
import instagram from "../images/Instagram.jpg"
import facebook  from "../images/Facebook.jpg"
import youtube from "../images/youtube.jpg"
import x from "../images/twitter-x.webp"

const Footer = () => {

  return (
    <div>
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src="https://www.floatui.com/logo.svg" className="w-32 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <ul className="sm:items-center sm:justify-center sm:mt-8 mt-2 space-x-5 flex xs:text-start sm:text-center">
                <li className="hover:text-gray-800">About</li>
                <li className="hover:text-gray-800">Blog</li>
                <li className="hover:text-gray-800">Team</li>
                <li className="hover:text-gray-800">Careers</li>
                <li className="hover:text-gray-800">Support</li>
            </ul>

            <div className="sm:items-center sm:justify-center space-x-5 flex xs:text-start sm:text-center">
                <div className="sm:mt-6 mt-4 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <button>
                                <img src={x} alt="" />
                            </button>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <button>
                                <img src={instagram} alt="" />
                            </button>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <button >
                                <img src={youtube} alt="" />
                            </button>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <button>
                                <img src={facebook} alt="" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer