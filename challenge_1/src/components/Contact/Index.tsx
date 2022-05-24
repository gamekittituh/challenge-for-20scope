export const Contact = () => {
    return(
        <div className="pb-[60px] md:pb-24 lg:grid lg:grid-cols-2 lg:py-10 lg:pt-16 lg:pb-20">
            <img src="https://beckschulte.com/assets/images/home/contact-us/contactUsDesktop.webp" alt="" className="mb-16 hidden w-full md:mb-12 lg:mb-0 xl:block" />
            <div className="grid grid-cols-1 content-center px-4 md:pl-28 md:pr-60 lg:pl-20 lg:pr-0">
                <p className="mb-3 md:whitespace-pre-wrap text-primary-500 text-xl false">Beckschulte</p>
                <p className="mb-3 md:whitespace-pre-wrap false false">André Beckschulte Immobilien-Management - Friedrich-Ebert-Str. 76 - 59425 Unna.</p>
                <p className="mb-3 md:whitespace-pre-wrap false cursor-pointer">Telefon 02303 / 94 237 - 0</p>
                <p className="mb-3 md:whitespace-pre-wrap false cursor-pointer">Email BIM@Beckschulte.com</p>
            </div>
            <div>
                <button className="null mx-auto !h-14 w-[244px] items-center justify-center text-lg md:mx-0 flex bg-primary-500 hover:bg-primary-600 active:bg-primary-700 h-10 min-w-[140px] rounded-[100px] px-4 py-3 text-sm font-semibold leading-4 text-white">
                    Kontakt aufnehmen
                </button>
            </div>
        </div>
    )
}