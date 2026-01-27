interface ReviewCardProps {
    image?: string;
    icon?: string;
    description?: string;
    name?: string;
}

export default function ReviewCard({ image, icon, description, name }: ReviewCardProps) {
    return (
        <div className="flex gap-20 text-white">
            <img src={`/image/${image}`} alt={image} />
            <div className="w-715 pt-20 grid grid-cols-1 content-between border-t border-light-gray">
                <div className="flex justify-between">
                    <img src={`/image/${icon}`} alt={icon} />
                    <div className="flex gap-16">
                        <img src="/image/review-leftArrow.png" alt="review-leftArrow" />
                        <img src="/image/review-rightArrow.png" alt="review-rightArrow" />
                    </div>
                </div>
                <div className="text-18">
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
