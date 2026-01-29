import { clsx } from "clsx";

interface Titleprops {
    content?: string;
    className?: string;
}

export default function Title({ content, className }: Titleprops) {
    return (
        <div className={clsx("text-center text-38 font-Montserrat-bold uppercase max-md:text-28 leading-36", className)}>
            {content}
        </div>
    )
}
