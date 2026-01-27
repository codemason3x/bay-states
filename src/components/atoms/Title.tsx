import { clsx } from "clsx";

interface Titleprops {
    content?: string;
    className?: string;
}

export default function Title({ content, className }: Titleprops) {
    return (
        <div className={clsx("text-center text-38 font-Montserrat-bold uppercase", className)}>
            {content}
        </div>
    )
}
