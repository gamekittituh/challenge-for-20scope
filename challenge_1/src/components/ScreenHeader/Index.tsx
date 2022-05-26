import React from 'react'

interface ScreenState {
    title: string
}
export const ScreenHeader = ({title}:ScreenState) => {
    return (
        <div className="relative h-full w-full">
            <img src="https://beckschulte.com/assets/images/home/hero/heroImageDesktop.webp" alt="" />
            <div className="absolute top-0 flex h-full w-full items-center justify-content text-center">
                <div className="mx-auto flex flex-col items-center">
                    <div className="">
                        <p className="md:mb-6 mt-10 text-[18px] font-medium leading-[40px] text-white md:text-[72px] md:leading-[84px] transition duration-1000 ease">
                            {title}
                        </p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-white text-[24px] md:text-[28px] mr-1">Kontakt</p>
                        <a href="#kontakt">
                            <button className="rounded-full bg-lime-500 md:w-16 w-10 md:h-16 h-10 p-1 transition ease-in-out delay-150 hover:-translate-1 hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" className="md:h-14 h-8 md:w-14 h-8 text-white items-center" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}