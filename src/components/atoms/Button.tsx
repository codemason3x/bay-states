import { clsx } from "clsx";

interface ButtonProps{
    content?:string;
    className?:string
}
export default function Button({content, className}:ButtonProps) {
  return (
    <button className={clsx("bg-main w-180 rounded-10 text-white uppercase font-Montserrat-medium h-48 text-center", className)}>{content}</button>
  )
}
