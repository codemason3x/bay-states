import { Title } from "../atoms"


export default function HeroSection() {
    return (
        <div className="relative overflow-hidden w-full ">
            <img src="/image/hero.jpg" alt="hero" className="w-full" />
            <div className="absolute w-full top-304">
                <Title content="Your Next Move Starts Here!" className=" text-white leading-76 text-62 mb-40" />
                <div className="w-full">
                    <div className="relative mx-auto max-w-724">
                        <input type="text"
                            placeholder="Start your search by City, Neighborhood or Zipcode"
                            className="bg-white rounded-10 w-full h-56 pl-50 pr-126 placeholder:text-16 placeholder:text-placehold " />
                        <div className="absolute text-18 h-56 px-30 pt-17 right-0 top-0 bg-main rounded-r-10 text-white font-Montserrat-light max-w-130 flex-none">
                            search
                        </div>
                        <img src="/image/location.svg" alt="location" className="absolute size-24 top-16 left-16"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
