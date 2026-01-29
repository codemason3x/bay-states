import { ReviewItems } from "../../config";
import { Title } from "../atoms";
import { ReviewCard } from "../molecules";

export default function ClientReviews() {
  return (
    <div className="mt-150 max-md:mt-70 bg-main px-50 pt-80 pb-120 max-md:pb-60 max-md:px-15">
      <Title content="what our clients have to say" className="text-white text-left mb-70 max-md:text-28 max-md:leading-36 max-lg:text-center max-sm:text-left " />
      <div className="flex justify-center">
        {ReviewItems.map((value, index) => (
          <ReviewCard key={index} image={value.image} icon={value.icon} description={value.description} name={value.name} />
        ))}
      </div>
    </div>
  );
}
