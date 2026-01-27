import { Button } from "../atoms";

interface BenifitCardProps {
  icon: string;
  title: string;
  description: string;
  button: string;
}

export default function BenifitCard({ icon, title, description, button }: BenifitCardProps) {
  return (
    <div className="flex flex-col px-30 pt-30 pb-40 h-430 shadow-lg">
      <img src={`/image/${icon}`} alt="search" className="size-80" />
      <div className="pt-20 grow">
        <div className="font-ExtraBold uppercase text-18">
          {title}
        </div>
        <div className="mt-16">
          {description}
        </div>
      </div>
      <Button content={button} />

    </div>
  )
}
