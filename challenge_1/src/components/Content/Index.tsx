const list = [
    {
        title:'Verwalten',
        description: 'Seit mehr als 25 Jahren vertrauen unsere Kunden auf unseren Sachverstand und legen die Betreuung ihrer Immobilien in unsere Hände.',
        link: '#verwalten',
        image: 'https://beckschulte.com/assets/images/Details/verwaltenDesktop.webp'
    },
    {
        title:'Vermieten',
        description: 'Mieter und Vermieter haben mit uns einen Partner an Ihrer Seite der Sie engagiert und kompetent betreut.',
        link: '#vermieten',
        image: 'https://beckschulte.com/assets/images/Details/vermietenDesktop.webp'
    },
    {
        title:'Verkaufen',
        description: 'Käufer und Verkäufer profitieren von unserer langjährigen Erfahrung und unserer professionellen Vorgehensweise.',
        link: '#verkaufen',
        image: 'https://beckschulte.com/assets/images/Details/verkaufenDesktop.png'
    }
]
export const Content = () =>{
    return (
        <div className="mx-auto grid max-w-xs grid-cols-1 gap-4 px-4 py-12 md:max-w-[704px] md:px-0 lg:max-w-[1152px] lg:grid-cols-3 lg:px-8 xl:max-w-screen-2xl">
            {
                list.map((item, index) => (
                    <a href={item.link} key={index} >
                        <div className="min-h-[440px] w-full grid gap-4 relative lg:block hover:cursor-pointer">
                            <div className="dim-content absolute rounded-lg w-full h-full hover:bg-lime-600 opacity-40 transition duration-700"></div>
                            <img src={item.image} alt="" className="rounded-lg " />
                            <div className="absolute md:bottom-0 bottom-[30px] z-10 p-4 lg:px-4 lg:py-8 font-semibold">
                                <p className="text-[28px] font-semibold text-white lg:mb-2">{item.title}</p>
                                <p className="text-white lg:h-[110px] xl:h-[110px] xl:text-lg">{item.description} </p>
                                <div className="mt-6 flex items-center">
                                    <span className="text-primary-500 mr-3 text-lg font-semibold text-lime-600">weitere Infos</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lime-600 mt-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </a>
                )
            )}
            
        </div>
    )
}