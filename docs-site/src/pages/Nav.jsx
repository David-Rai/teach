import React from 'react'
import githubLogo from "../../public/github.png"
const Nav = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-400">Limitless</h1>
                    <ul className="flex gap-6 text-gray-300 text-sm items-center">
                        <li><a href="#home" className="hover:text-white"></a></li>
                        <img src={githubLogo} alt="GITHUB" className='h-[50px] flex items-center justify-center' />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav