import React from 'react'

const menuList = [
    {
        title: 'Verwalten',
        path:'/'
    },
    {
        title: 'Vermieten',
        path:'/'
    },
    {
        title: 'Verkaufen',
        path:'/'
    },
    {
        title: 'Uber uns',
        path:'/'
    },
    {
        title: 'Kontakt',
        path:'/'
    },
]
// function Navbar(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
// }
class Header extends React.Component {
  render() {
    return (
        <header className="fixed block w-full h-[100] z-[100] overflow-y-hidden bg-transparent mb-1 transition duration-1000 ease:bg-lime-600">
            <nav className="container mx-auto flex items-center justify-between flex-wrap p-6" id="navbar">
                <div className="w-full px-6 md:px-8">
                    <div className="flex w-full text-center items-center justify-between">
                        <div className="flex items-center flex-shrink-0 text-white mr-9 text-center">
                            {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                            <span className="font-semibold text-xl tracking-tight">Beckschulte</span>
                        </div>
                        <div className="w-full block flex-grow flex-row flex-nowrap justify-center lg:flex lg:items-center lg:w-auto ml-9">
                            <ul className="flex">
                                {menuList.map((menu, index) => (
                                    <li className="mr-6" key={index}>
                                        <a className="text-white hover:text-white" href={menu.path}>{menu.title}</a>    
                                    </li>
                                )
                                )}
                            </ul>
                        </div>
                        <div className="flex-auto">
                            <button className="flex-initial items-center justify-center h-10 w-40 bg-lime-600 rounded-full text-lg text-white hover:bg-lime-800 border-transparent">02303 942370</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
  }
}

export default Header