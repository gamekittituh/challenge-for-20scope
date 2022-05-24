export const Partner = () => {
    return(
        <div className="from-primary-50 bg-gradient-to-t to-white px-4 pt-14 pb-[67px] text-center md:pb-[114px] md:pt-[104px] lg:pb-[121px]">
            <p className="mb:mb-8 md:leadig-6 mx-auto mb-[42px] max-w-[288px] leading-[19px] md:max-w-[683px] md:text-lg lg:mb-16 lg:max-w-[750px] lg:text-2xl lg:leading-[29px]">
                Durch unsere Mitgliedschaft in Berufsverbänden verpflichten wir uns zu 
                <span className="text-primary-500">Qualität und hohen Leistungsstandards.</span>
            </p>
            <div className="flex flex-col items-center gap-y-[26px] md:flex-row md:justify-center md:gap-x-[30px] lg:gap-x-[38px]">
                <img src="https://beckschulte.com/assets/images/Certificates/ivdCertificate.webp" alt="" className="mx-auto h-[79px] w-[231px] cursor-pointer lg:h-[126px] lg:w-[369px]" />
                <img src="https://beckschulte.com/assets/images/Certificates/vdivCertificate.webp" alt="" className="mx-auto h-[100px] w-[200px] cursor-pointer lg:h-[160px] lg:w-[320px]" />
                <img src="https://beckschulte.com/assets/images/Certificates/dekraCertificate.webp" alt="" className="mx-auto h-[79px] w-[79px] cursor-pointer lg:h-[126px] lg:w-[126px]" />
            </div>
        </div>
    )
}