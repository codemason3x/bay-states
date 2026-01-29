import { benifitItems } from "../../config";
import { BenifitCard } from "../molecules";

export default function BenifitsSection() {
    return (
        <div className="px-50 py-150 max-xl:py-70  max-md:px-15">
            <div className="text-center text-38 max-md:text-28 font-Montserrat-bold uppercase">
                Why Us
            </div>
            <div className="grid grid-cols-3 gap-20 max-xl:grid-cols-1">
                {benifitItems.map((value, index)=>(
                    <BenifitCard key={index} icon={value.icon} title={value.title} description={value.description} button="read more" />
                ))}
            </div>
        </div>
    );
}
