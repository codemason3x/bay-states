interface AddressInfo {
    icon?: string;
    content?: string;
}

export default function AddressInfo({ icon, content }: AddressInfo) {
    return (
        <div className="flex gap-4 items-center h-24 text-18 text-white">
            <img src={`/image/${icon}`} alt={icon} />
            <div>
                {content}
            </div>
        </div>
    );
}
