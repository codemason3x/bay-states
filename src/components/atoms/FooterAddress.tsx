interface FooterAddressProps {
    icon?: string,
    content?: string,
}
export default function FooterAddress({ icon, content }: FooterAddressProps) {
    return (
        <div className="flex flex-col gap-16 bg-white rounded-8 pt-35 px-35 max-lg:px-25 max-md:pt-20 max-md:px-20 pb-24">
            <img src={`./image/${icon}`} alt="icon" className="size-35 max-md:size-25" />
            <div className="font-Montserrat-medium text-main font-bold  grow ">
                <span className="max-md:text-14 max-md:leading-24 wrap-anywhere">{content}</span>
            </div>
        </div>
    );
}
