import { clsx } from "clsx";
import { Title } from "../atoms";

interface AdsProps {
  image?: string;
  title?: string;
  height?: string;
}

export default function Ads({ image, title, height }: AdsProps) {
  let pictureKind = false;
  if (height != "396") { pictureKind = true; }
  return (
    <div className={`relative place-self-center h-${height}  rounded-10 overflow-hidden group/ads`} >
      <img src={`/image/${image}`} alt={image} className={clsx("max-md:w-345 max-mini:w-full max-mini:h-auto max-md:h-300", pictureKind && "max-md:h-360")} />
      <div className="absolute top-0 left-0 size-full opacity-60 bg-linear-to-b from-gray-800 from-0% to-main to-80% group-hover/ads:hidden"></div>
      <Title content={title} className="absolute max-mini:text-18 max-mini:w-full max-mini:text-center max-mini:left-0 text-left left-30 bottom-40 text-42 max-xl:text-30 text-white max-lg:text-26 max-md:text-30 group-hover/ads:hidden " />
      <div className="absolute top-0 left-0 size-full flex justify-center items-center invisible group-hover/ads:visible">
        <div className="absolute  m-auto w-400 max-xl:w-[38dvw]  max-md:w-304 h-270 max-xl:h-[20dvw] max-md:h-216 max-mini:size-full box-shadow-2xl border rounded-10 bg-main opacity-60 ">
        </div>
      </div>

      <div className="absolute top-0 left-0 size-full flex justify-center items-center invisible group-hover/ads:visible">
        <div className="left-130 w-400 max-xl:w-[38dvw] max-md:w-304 h-270 max-xl:h-[20dvw]  max-md:h-216 max-mini:size-full max-mini:p-10 rounded-10 backdrop-blur-sm  text-white font-Montserrat-medium text-center flex justify-center">
          <div className="flex flex-col gap-16 max-xl:gap-10 m-auto ">
            <div className="text-20 max-xl:text-18 leading-26 uppercase max-xl:leading-24  max-mini:text-12 max-mini:leading-12">
              9345 Indian Trail way 9345 Perry Hall MD 21128
            </div>
            <div className="text-18 max-xl:text-16 leading-22 max-xl:leading-20 max-mini:text-12 max-mini:leading-12">
              9345 Perry Hall MD 21128
            </div>
            <div className="text-18 max-xl:text-16 leading-22 max-xl:leading-20 max-mini:text-12 max-mini:leading-12">
              5 beds 3 bath
            </div>
            <div className="text-20 max-xl:text-18 leading-24 max-xl:leading-22 max-mini:text-12 max-mini:leading-12">
              $455, 000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
