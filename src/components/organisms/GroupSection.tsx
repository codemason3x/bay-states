import { GroupAddressItems, SectionItems } from "../../config";
import { FooterAddress } from "../atoms";

export default function GroupSection() {
    return (
        <div className="relative px-50 max-md:px-15 pt-40 pb-60 bg-main border-b-2 border-white">
            <div className="flex flex-col gap-60 max-md:gap-40 items-center">
                <img src="/image/footer-Logo.png" alt="footer-Logo.png" className="max-md:w-100 max-md:h-72" />
                <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-20 w-full">
                    {GroupAddressItems.map((value, index) => (
                        <FooterAddress key={index} icon={value.icon} content={value.content} />
                    ))}
                </div>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full max-lg:gap-40">
                    <div className="flex justify-between max-[420px]:flex-col items-end max-[420px]:items-center max-[420px]:gap-40">
                        <div className="flex flex-col gap-20  max-[420px]:items-center  ">
                            {SectionItems.map((value, index) => (
                                <span key={index} className="text-white text-16 font-Montserrat-medium uppercase">{value}</span>
                            ))}
                        </div>
                        <div className=" max-[420px]:text-center">
                            <img src="/image/mortgage.png" alt="mortgage.png" className="w-170 h-70 mb-16  max-[420px]:mx-auto" />
                            <div>
                                <p className="text-white text-14 font-Montserrat-bold mb-10">David Ferrell </p>
                                <p className="text-white text-14 mb-10">Senior Mortgage Loan Officer </p>
                                <p className="text-white text-14 font-Montserrat-bold mb-10">Contour Mortgage </p>
                                <p className="text-white text-14 mb-10">NMLS# 917155 </p>
                                <p className="text-white text-14 font-Montserrat-bold mb-10"><span className="font-Montserrat-bold">Email:</span>  dferrell@contourmtg.com </p>
                                <p className="text-white text-14 font-Montserrat-bold mb-10"><span className="font-Montserrat-bold">Phone: </span>(443) 517-9546 </p>
                                <p className="text-white text-14 mb-10">555 Fairmount Ave, Suite 301</p>
                                <p className="text-white text-14 mb-10">Towson, MD. 21286  </p>
                            </div>
                            <div className="mt-32">
                                <img src="/image/compass.png" alt="" className="w-170 h-22 mb-16 max-[420px]:m-auto" />
                                <p className="text-white text-14 font-Montserrat-bold mb-10">©Compass 2023 </p>
                                <p className="text-white text-14 mb-10">All Rights Reserved </p>
                                <p className="text-white text-14 font-Montserrat-bold ">Office: 410-220-5745 </p>
                            </div>
                        </div>
                    </div>
                    <div className="place-self-end max-lg:place-self-center flex gap-32">
                        <img src="/image/facebook.png" alt="facebook" />
                        <img src="/image/instagram.png" alt="instagram" />
                    </div>

                </div>
            </div>
        </div>
    )
}
