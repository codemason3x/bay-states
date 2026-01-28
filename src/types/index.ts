export interface NavItem {
    content: string;
    href?: string;
};

export interface addressItem {
    icon: string;
    address: string;
};

export interface benifitItem {
    icon: string;
    title: string;
    description: string;
};

export interface HouseItem {
    image: string;
    title: string;
    height: string;
};

export interface ReviewItem {
    image: string;
    icon: string;
    description: string;
    name: string;
};

export interface ContactAddressItem {
    icon: string;
    content: string;
};

export interface ClientInfoItem {
    type: string;
    placeholder: string;
};

export interface FeaturedItem {
    icon: string;
    address: string;
    postCode: string;
    properties: PropertyItem[];
    date:string;
    
};

export interface PropertyItem {
    property: string;
    value: string;
};
