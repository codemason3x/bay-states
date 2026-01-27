interface FooterAddressProps {
    icon?: string,
    content?: string,
}
export default function FooterAddress({ icon, content }: FooterAddressProps) {
    return (
        <div className="flex flex-col gap-16 bg-white rounded-8 pt-35 pl-35 pb-24">
            <img src={`./image/${icon}`} alt="icon" className="size-35"/>
            <div className="font-Montserrat-medium text-main font-bold"> {content}</div>
        </div>
    );
}
