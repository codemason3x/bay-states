import { useEffect, useState } from "react";
import { NavigationItems } from "../../config";
import { useMediaQuery } from "../../hook/useMediaQuery";

export default function HeaderSection() {
    const [openMenu, setOpenMenu] = useState(false);
    const isLgUp = useMediaQuery('(min-width: 1280px)');

    useEffect(() => {
        if (isLgUp) {
            setOpenMenu(false);
        }
    }, [isLgUp]);
    return (
        <>
            {openMenu &&
                <div className="absolute w-full h-667 bg-main z-20 flex flex-col ">
                    <div className="flex flex-col items-center gap-30 mt-114 md:text-20">
                        {NavigationItems.map((value, index) => (
                            <span key={index} className="uppercase leading-20 text-white">{value.content}</span>
                        ))}
                    </div>
                    <div className="mt-60 flex justify-center w-full">
                        <div className="flex gap-32">
                            <img src="/image/header-facebook.png" alt="" className="" />
                            <img src="/image/header-instagram.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            }

            <div className="absolute w-full z-30 px-50 max-md:px-15 py-20 flex justify-between items-center">
                <img src="/image/header-logo.png" alt="" className="max-md:w-72 max-md:h-54 " />
                <div className="flex gap-30 max-xl:hidden">
                    {NavigationItems.map((value, index) => (
                        <span key={index} className="uppercase text-16 3xl:text-20 text-white font-Montserrat-medium"> {value.content}</span>
                    ))}
                </div>
                <div className="flex gap-32 max-xl:hidden">
                    <img src="/image/header-facebook.png" alt="" />
                    <img src="/image/header-instagram.png" alt="" />
                </div>
                {openMenu ?
                    <img src="/image/close.png" alt="" className="xl:hidden" onClick={() => setOpenMenu(!openMenu)} />
                    :
                    <img src="/image/toast.png" alt="" className="xl:hidden" onClick={() => setOpenMenu(!openMenu)} />
                }
            </div>
        </>
    );
}
