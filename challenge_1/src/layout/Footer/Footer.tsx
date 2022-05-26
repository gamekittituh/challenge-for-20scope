import React from "react"
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
class Footer extends React.Component {
    // footer
    render() {
        return (
            <footer className="w-full font-semibold">
                <div className="bg-neutral-800 text-neutral-500 px-4 pt-8 pb-[32px] text-sm !leading-[17px] md:!px-8 md:!py-8 md:!text-base md:!leading-[19px] css-lcn7jo">
                    <div className="max-w-[920px] lg:mx-auto lg:max-w-[1144px]">
                        <div className="lg:flex lg:justify-between lg:!text-sm lg:!leading-[17px]">
                            <a href="#flogo">
                                Beckschulte
                            </a>
                            <div className="mt-4 md:flex md:justify-between lg:!mt-0">
                                <div className="max-w-[230px] md:!max-w-[350px] ">
                                    <div className="md:flex">
                                        <div className="mr-1">
                                            André Beckschulte Immobilien
                                            Management
                                            Friedrich-Ebert-Str. 76
                                            59425 Unna
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 md:!mt-0 lg:ml-16">
                                    <div className="mb-2 cursor-pointer">
                                        Telefon: 02303 / 94 237 - 0
                                    </div>
                                    <div>
                                        <a href="mailto:BIM@Beckschulte.com">Email: BIM@Beckschulte.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="text-neutral-50 flex text-base !leading-[19px] md:!hidden">

                        </div> */}
                        <div className="text-neutral-50 flex text-base !leading-[19px] md:justify-evenly md:!text-lg md:!leading-[22px]">
                            {menuList.map((item, index) => (
                                <div key={index} className="mt-2 hidden cursor-pointer md:flex">
                                    <a href={item.path}>{item.title}</a>
                                </div>
                                )
                            )}
                        </div>
                        <div className="mt-[20px] md:flex md:justify-between">
                            <div className="text-base !leading-[19px]">
                                © 2019 - 2022 Beckschulte All rights reserved
                            </div>
                            <div className="mt-4 flex text-base !leading-[19px] md:!mt-0">
                                <div className="cursor-pointer">
                                    <a href="#Impressum">Impressum</a>
                                </div>
                                <div className="text-neutral-700 mx-2 cursor-pointer">/</div>
                                <div className="cursor-pointer">
                                    <a href="#Datenschutz">Datenschutz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer