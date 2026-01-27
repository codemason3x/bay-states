import { clsx } from "clsx";

interface ContactAddressProps {
    icon?: string,
    content?: string,
    className?:string,
}
export default function ContactAddress({ icon, content, className }: ContactAddressProps) {
    return (
        <div className={clsx("flex", className)}>
            <img src={`./image/${icon}`} alt="icon" className="size-24 mr-16"/>
            <div className="font-Montserrat-medium text-main font-bold"> {content}</div>
        </div>
    );
}
