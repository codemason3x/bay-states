import Title from "./title";

interface AdsProps {
  image?: string;
  title?: string;
  height?: string;
}

export default function Ads({ image, title, height }: AdsProps) {
  return (
    <div className={`relative w-660 h-${height} rounded-10 overflow-hidden group/ads`} >
      <img src={`/image/${image}`} alt={image} />
      <div className="absolute top-0 left-0 size-full opacity-60 bg-linear-to-b from-gray-800 from-0% to-main to-80% group-hover/ads:hidden"></div>
      <Title content={title} className="absolute left-30 bottom-40 text-42 text-white line" />
      <div className="absolute top-0 left-0 size-full flex justify-center items-center invisible group-hover/ads:visible">
        <div className="absolute  m-auto w-400 h-270 box-shadow-2xl border rounded-15 bg-main opacity-60 ">
        </div>
      </div>

      <div className="absolute top-0 left-0 size-full flex justify-center items-center invisible group-hover/ads:visible">
        <div className=" left-130 w-400 h-270 rounded-15 backdrop-blur-sm p-50 text-white font-Montserrat-medium text-center flex flex-col gap-16">
          <div className="text-20 leading-26 uppercase">
            9345 Indian Trail way 9345 Perry Hall MD 21128
          </div>
          <div className="text-18 leading-22">
            9345 Perry Hall MD 21128
          </div>
          <div className="text-18 leading-22">
            5 beds 3 bath
          </div>
          <div className="text-20 leading-24">
            $455, 000
          </div>
        </div>
      </div>
    </div>
  );
}
