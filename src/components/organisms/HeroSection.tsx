import { Title } from "../atoms"

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden h-667 ">
            <img src="/image/hero.jpg" alt="hero" className="w-full max-xl:absolute max-xl:bottom-0 max-xl:min-w-1440 max-xl:h-667 max-xl:right-0 max-mini:hidden" />
            <img src="/image/iphone8-header.png" alt="" className="max-mini:absolute max-mini:bottom-0 max-mini:right-0 max-mini:block max-mini:min-w-375 max-mini:h-667 hidden w-full" />
            <div className="absolute w-full top-304 max-md:top-170 max-md:px-15">
                <Title content="Your Next Move Starts Here!" className="text-white leading-76 text-62 mb-40 max-md:text-42 max-md:leading-50 max-md:mb-30" />
                <div className="relative mx-auto max-w-724">
                    <input type="text"
                        placeholder="Start your search by City, Neighborhood or Zipcode"
                        className="bg-white rounded-10 w-full h-56 max-md:h-45 pl-50 pr-126 placeholder:text-16 placeholder:text-placehold " />
                    <div className="absolute text-18 h-56 max-md:h-45 px-30 max-md:px-20 pt-17 max-md:pt-10 right-0 top-0 bg-main rounded-r-10 text-white font-Montserrat-light max-w-130 flex-none">
                        search
                    </div>
                    <img src="/image/location.svg" alt="location" className="absolute size-24 top-16 max-md:top-10 left-16" />
                </div>
            </div>
        </div>
    );
}
