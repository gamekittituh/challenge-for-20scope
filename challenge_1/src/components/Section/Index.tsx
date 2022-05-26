export const Section = () => {
    return(
        <div className="mx-auto lg:grid lg:grid-cols-2 lg:py-16 xl:max-w-screen-2xl">
            <div className="lg:flex lg:justify-end xl:justify-center">
                <img src="https://beckschulte.com/assets/images/home/about-us/aboutUsMobile.webp" alt="" className="block min-h-[184px] w-full md:hidden object-cover md:min-h-[640px] md:w-[448px] md:rounded-lg lg:block"/>
            </div>
            <div className="mx-auto md:max-w-[704px] lg:ml-[88px] lg:max-w-[443px] xl:ml-0 xl:flex xl:max-w-[564px] xl:items-center">
                <div className="mt-8 px-4 text-left md:px-0 lg:mt-0 lg:px-0 lg:pr-8 xl:mt-8 font-semibold">
                    <p className="mb-8 text-center text-2xl font-medium md:text-5xl lg:text-left">
                        Wir sind <span className="ml-1 text-lime-500">Beckschulte</span>
                    </p>
                    <p className="mb-8 leading-[19px]">
                        Wir sind ein Team von Spezialisten und befassen uns seit mehr als 25 Jahren erfolgreich mit der Verwaltung, 
                        der Vermietung und dem Verkauf von Wohn- u. Gewerbe-Immobilien im Kreis Unna und dem gesamten Ruhrgebiet. Seriosität, 
                        Kompetenz und Engagement sind die Grundlagen unseres Handelns. Besonderen Wert legen wir auf die Qualifikation unserer Mitarbeiter, 
                        die über ausgezeichnete, fachspezifische Kenntnisse und Berufserfahrung verfügen. So erwartet Sie bei uns Professionalität verbunden mit Persönlichkeit.
                    </p>
                    <div className="text-center lg:text-left">
                        <button className="w-fit h-14 text-[18px] lg:w-[168px] xl:w-[216px] border-lime-500 text-lime-500 hover:bg-lime-100 hover:border-lime-600 hover:text-lime-600 active:border-lime-700 active:text-lime-700 active:bg-lime-300 h-10 min-w-[140px] rounded-[100px] border-2 border-solid px-4 py-2.5 text-sm font-semibold leading-4 css-4ixksw">
                            weitere Infos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}