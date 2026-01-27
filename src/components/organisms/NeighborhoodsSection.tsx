import {  LeftHouseItems, RightHouseItems } from "../../config";
import { Ads, Title } from "../atoms";

export default function NeighborhoodsSection() {
    return (
        <div className="px-50 pb-150">
          <Title content="EXPLORE OUR NEIGHBORHOODS" />
          <div className="grid grid-cols-2 gap-20 pt-70">
            <div className="grid grid-cols-1 gap-20">
                {LeftHouseItems.map((value, index)=>(
                    <Ads key={index} image={value.image} title={value.title} height={value.height} />
                ))}
            </div>
            <div className="grid grid-cols-1 gap-20">
                {RightHouseItems.map((value, index)=>(
                    <Ads key={index} image={value.image} title={value.title} height={value.height} />
                ))}
            </div>

          </div>
        </div>
    );
}
