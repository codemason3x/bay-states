import { ReviewItems } from "../../config";
import { Title } from "../atoms";
import { ReviewCard } from "../molecules";

export default function ClientReviews() {
  return (
    <div className="mt-150 bg-main px-50 pt-80 pb-120">
        <Title content="what our clients have to say" className="text-white text-left mb-70"/>
        <div className="flex justify-center">

            {ReviewItems.map((value, index)=>(
                <ReviewCard key={index} image={value.image}  icon={value.icon} description={value.description} name={value.name}/>
            ))}
        </div>
    </div>
  );
}
