import { Button } from "../atoms";

interface BenifitCardProps {
  icon: string;
  title: string;
  description: string;
  button: string;
}

export default function BenifitCard({ icon, title, description, button }: BenifitCardProps) {
  return (
    <div className="flex flex-col px-30 pt-30 pb-40 max-md:px-20 max-md:py-30 h-430 max-mini:h-auto max-xl:h-376 shadow-lg">
      <img src={`/image/${icon}`} alt="search" className="size-80" />
      <div className="pb-50 pt-20 grow">
        <div className="font-ExtraBold uppercase text-18 max-md:text-16">
          {title}
        </div>
        <div className="mt-16 max-md:text-14">
          {description}
        </div>
      </div>
      <Button content={button} />
    </div>
  )
}
