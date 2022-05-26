import React, { useEffect, useState } from 'react'

const menuList = [
    {
        title: 'Verwalten',
        path: '/'
    },
    {
        title: 'Vermieten',
        path: '/'
    },
    {
        title: 'Verkaufen',
        path: '/'
    },
    {
        title: 'Uber uns',
        path: '/'
    },
    {
        title: 'Kontakt',
    },
]
// function Navbar(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {

const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const changeNavbar = () => {
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeNavbar()
        window.addEventListener("scroll", changeNavbar)
    })
        return (
            <header className={!navbar ? 
            'fixed block w-full h-[100] z-[100] overflow-y-hidden bg-transparent mb-1 transition duration-1000 ease  font-semibold' : 
            'fixed block w-full h-[100] z-[100] overflow-y-hidden bg-lime-600 mb-1 transition duration-1000 ease  font-semibold'}>
                <nav className="container mx-auto flex items-center justify-between flex-wrap p-6 xs:!hidden w-full md:flex md:items-center md:w-auto">
                    <div className="w-full px-6 md:px-8">
                        <div className="flex w-full text-center items-center justify-between">
                            <div className="flex items-center flex-shrink-0 text-white mr-9 text-center">
                                <span className="font-semibold text-xl tracking-tight">Beckschulte</span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="menu-button"
                                className="h-6 w-6 cursor-pointer lg:hidden block text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <div className="hidden md:hidden w-full block md:flex flex-grow flex-row flex-nowrap justify-center lg:flex lg:items-center lg:w-auto ml-9">
                                <ul className="pt-4 text-base md:flex md:justify-between md:pt-0">
                                    {menuList.map((menu, index) => (
                                        <li className="mr-6" key={index}>
                                            <a className="text-white hover:text-white" href={menu.path}>{menu.title}</a>    
                                        </li>
                                    )
                                    )}
                                </ul>
                            </div>
                            <div className="hidden lg:block md:hidden md:flex ">
                                <button className={!navbar ? 
                                'mx-6 hidden h-14 w-[186px] items-center justify-center md:border-0 border-white text-lg text-white  md:flex lg:mx-0 flex bg-lime-500 hover:bg-lime-600 active:bg-lime-600 active:border-lime-100 active:text-lime-100 h-10 min-w-[140px] rounded-[100px] border-2 border-solid border-white px-4 py-2.5 text-sm font-semibold leading-4 text-white' : 
                                'mx-6 hidden h-14 w-[186px] items-center justify-center border border-white text-lg text-white  md:flex lg:mx-0 flex bg-lime-500 hover:bg-lime-600 active:bg-lime-600 active:border-lime-100 active:text-lime-100 h-10 min-w-[140px] rounded-[100px] border-2 border-solid border-white px-4 py-2.5 text-sm font-semibold leading-4 text-white'} >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    02303 942370
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
}

export default Header