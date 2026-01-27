import { Title } from "../atoms";


export default function InstagramSection() {
  return (
    <div className="bg-instagram pb-120 pt-80 px-100">
        <Title content="instagram" className="mb-70"/>
        <div className="flex gap-20">
            <div className="grid grid-cols-2 grid-rows-2 gap-20">
                <img src="/image/instagram1.png" alt="instagram1" />
                <img src="/image/instagram2.png" alt="instagram2" />
                <img src="/image/instagram3.png" alt="instagram3" />
                <img src="/image/instagram4.png" alt="instagram4" />
            </div>
            <img src="/image/instagram5.png" alt="instagram5" />
            <div className="grid gird-cols-1 gap-20">
                <img src="/image/instagram6.png" alt="instagram6" />
                <img src="/image/instagram7.png" alt="instagram7" />
            </div>
        </div>
    </div>
  );
}
