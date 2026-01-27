import { addressItems } from "../../config";
import { ContactAddress, Title } from "../atoms";

export default function AboutUsSection() {
    return (
        <div className="relative px-50 pt-80 pb-120 bg-main">
            <div className="flex flex-col gap-70 ">
                <Title content="about us" className="text-white text-left" />
                <div className="grid grid-cols-2 gap-40">
                    <img src="/image/people.png" alt="people" className="object-cover rounded-20" />
                    <div className="rounded-20 px-35 pt-35 py-40 bg-white flex flex-col gap-16  mt-160">
                        <div className="text-black font-bold font-Montserrat-bold text-26 leading-32">
                            Nick & Cailean
                        </div>
                        <div className="text-black">
                            After having a lunch and catching up, Nick and  Cailean realized they shared a similar outlook on real estate. Over the next few months they devised a plan to launch a client-centric real estate team. Thus, The Bay States Home Group was born.  Their vision for The Bay States Home Group is simple: Always put the client first and never stop searching for ways to add value to the real estate transaction. With 15 years of combined real estate experience Nick and Cailean have the knowledge and skills to help any client achieve their real estate goals. 
                        </div>
                        <div className="flex flex-col gap-16">
                            {addressItems.map((value, index)=>(
                                <ContactAddress key={index} icon={value.icon} content={value.address} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
    );
}
