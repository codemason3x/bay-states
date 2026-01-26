interface address {
    icon?: string,
    phone?: string,
}

export default function ConnectAddress({ icon, phone }: address) {
    return (
        <div className="flex">
            <img src={`./image/${icon}`} alt="icon" className="size-24 mr-16"/>
            <div className="font-Montserrat-medium text-main font-bold"> {phone}</div>
        </div>
    );
}
