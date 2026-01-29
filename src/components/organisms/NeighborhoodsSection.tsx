import { LeftHouseItems, NeighborhoodItems, RightHouseItems } from "../../config";
import { Ads, Title } from "../atoms";

export default function NeighborhoodsSection() {
    return (
        <div className="px-50 max-md:px-15 1800:px-150 pb-150 max-md:pb-0">
            <Title content="EXPLORE OUR NEIGHBORHOODS" className="max-md:text-28 max-md:leading-36" />
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 pt-70 max-md:pt-40 max-md:hidden">
                <div className="grid grid-cols-1 gap-20">
                    {LeftHouseItems.map((value, index) => (
                        <Ads key={index} image={value.image} title={value.title} height={value.height} />
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-20">
                    {RightHouseItems.map((value, index) => (
                        <Ads key={index} image={value.image} title={value.title} height={value.height} />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-20 pt-40 pb-70 md:hidden">
                {NeighborhoodItems.map((value, index) => (
                    <Ads key={index} image={value.image} title={value.title} height={value.height} />
                ))}
            </div>
        </div>
    );
}
