interface ReviewCardProps {
    image?: string;
    icon?: string;
    description?: string;
    name?: string;
}

export default function ReviewCard({ image, icon, description, name }: ReviewCardProps) {
    return (
        <div className="xl:w-1000 flex gap-20 justify-center max-md:flex-col text-white">
            <div className="flex-none max-md:max-h-316 flex justify-center ">
                <div className="max-md:h-316 max-mini:h-[80dvw] max-md:w-345 max-mini:w-full rounded-10 overflow-hidden ">
                    <img src={`/image/${image}`} alt={image} className="m-auto max-md:w-345 max-md:" />
                </div>
            </div>
            <div className=" pt-20 grid grid-cols-1 max-md:gap-50 content-between border-t border-light-gray">
                <div className="flex justify-between">
                    <img src={`/image/${icon}`} alt={icon} />
                    <div className="flex gap-16">
                        <img src="/image/review-leftArrow.png" alt="review-leftArrow" />
                        <img src="/image/review-rightArrow.png" alt="review-rightArrow" />
                    </div>
                </div>
                <div className="text-18 max-md:text-16 max-md:leading-20">
                    {description}<br></br><br></br>
                    <div className="text-right font-Montserrat-mediumItalic">
                        - {name}
                    </div>
                </div>
                <div className="flex justify-between pt-20 border-t border-light-gray">
                    <div className="flex items-center">
                        <div className="flex gap-1">
                            <img src="/image/dot.png" alt="dot.png" />
                            <img src="/image/dot.png" alt="dot.png" />
                            <img src="/image/dot.png" alt="dot.png" />
                            <img src="/image/dot.png" alt="dot.png" />
                        </div>
                    </div>
                    <div className="uppercase ">
                        read more
                    </div>
                </div>
            </div>
        </div>
    );
}
