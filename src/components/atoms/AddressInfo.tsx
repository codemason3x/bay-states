interface AddressInfo {
    icon?: string;
    content?: string;
}

export default function AddressInfo({ icon, content }: AddressInfo) {
    return (
        <div className="flex gap-4 items-center text-18 max-md:items-start max-md:text-14 max-md:leading-24 text-white">
            <img src={`/image/${icon}`} alt={icon} className="max-md:size-20"/>
            <div className="wrap-anywhere">
                {content}
            </div>
        </div>
    );
}
