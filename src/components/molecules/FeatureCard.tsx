import type { PropertyItem } from "../../types";
import { Property } from "../atoms";

interface FeatureCardProps {
    icon?: string;
    address?: string;
    postCode?: string;
    properties?: PropertyItem[];
    date?:string;

}

export default function FeatureCard({ icon, address, postCode, properties, date }: FeatureCardProps) {
    return (
        <div className="flex-none w-312 inline-block text-center border border-featureCard">
            <div className="relative">
                <img src={`/image/${icon}`} alt={icon} className="" />
                <img src="/image/button-location.png" alt="button-location.png" className="absolute left-5 bottom-5" />
            </div>
            <div className="flex flex-col justify-center py-16 border-b  border-property-border">
                <span className="text-14 leading-22">
                    {address}
                </span>
                <span className="text-11 leading-22">
                    {postCode}
                </span>
            </div>
            <div className="grid grid-cols-4">
                {properties?.map((value, index) => (
                    <Property key={index} property={value.property} value={value.value} />
                ))}
            </div>
            <div className="border-t py-16 text-14 text-featureCard border-property-border bg-instagram">
                {date}
            </div>

        </div>
    )
}
