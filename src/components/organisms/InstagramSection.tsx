import { Title } from "../atoms";


export default function InstagramSection() {
  return (
    <div className="bg-instagram pb-120 pt-80 px-100 max-md:pt-40 max-md:pb-60 max-lg:px-50 max-sm:px-15">
      <Title content="instagram" className="mb-70 max-md:mb-40 max-md:text-28" />
      <div className="grid grid-cols-5 grid-rows-2 gap-20 max-lg:grid-cols-1 max-md:gap-x-0 ">
        <div className="col-span-2 row-span-2 grid grid-cols-2 grid-rows-2 gap-20 ">
          <img src="/image/instagram1.png" alt="instagram1" className="size-full" />
          <img src="/image/instagram2.png" alt="instagram2" className="size-full" />
          <img src="/image/instagram3.png" alt="instagram3" className="size-full" />
          <img src="/image/instagram4.png" alt="instagram4" className="size-full" />
        </div>
        <img src="/image/instagram5.png" alt="instagram5" className="col-span-2 row-span-2 size-full" />
        <div className="row-span-2 grid gird-cols-1 gap-20 max-lg:grid-cols-2">
          <img src="/image/instagram6.png" alt="instagram6" className="size-full" />
          <img src="/image/instagram7.png" alt="instagram7" className="size-full" />
        </div>
      </div>
    </div>
  );
}
