import type { addressItem, benifitItem, ClientInfoItem, ContactAddressItem, FeaturedItem, HouseItem, NavItem, ReviewItem } from '../types';

export const NavigationItems: NavItem[] = [
    { content: 'home' },
    { content: 'buy' },
    { content: 'sell' },
    { content: 'communities' },
    { content: 'financing' },
    { content: 'testimonials' },
    { content: 'team' },
    { content: 'contact us' },
    { content: 'blog' },
];

export const addressItems: addressItem[] = [
    { icon: 'call.svg', address: '(410) 914-7355 (Nick direct)' },
    { icon: 'call.svg', address: '(443) 289-4994 (Cailean direct)' },
    { icon: 'call.svg', address: '(410) 823-0033 (office)' },
    { icon: 'email.svg', address: 'Cailean@BayStatesHomeGroup.com' },
    { icon: 'email.svg', address: 'Nick@BayStatesHomeGroup.com' },
];

export const benifitItems: benifitItem[] = [
    { icon: 'search.svg', title: 'Search New Homes for Sale!', description: 'Our listings are updated around the clock so you can see deals as soon as they hit the marketOur listings are updated around the clock so you can see deals as soon as they hit the market' },
    { icon: 'house.svg', title: 'What’s your Home Worth?', description: 'Discover the value of your home.' },
    { icon: 'agreement.svg', title: 'Why List With us?', description: 'Find out what sets us apart from every other agent out there.' },
]

export const HouseItems: HouseItem[] = [
    { image: 'house1.png', title: 'Howard country', height: '396px' },
    { image: 'house4.png', title: 'India', height: '570px' },
    { image: 'house2.png', title: 'Columbia', height: '396px' },
    { image: 'house5.png', title: 'Laurel', height: '396px' },
    { image: 'house3.png', title: 'Catonsville', height: '570px' },
    { image: 'house6.png', title: 'Ellicott city', height: '396px' },
]

export const LeftHouseItems: HouseItem[] = [
    { image: 'house1.png', title: 'Howard country', height: '396' },
    { image: 'house2.png', title: 'Columbia', height: '396' },
    { image: 'house3.png', title: 'Catonsville', height: '570' },
]

export const RightHouseItems: HouseItem[] = [
    { image: 'house4.png', title: 'India', height: '570' },
    { image: 'house5.png', title: 'Laurel', height: '396' },
    { image: 'house6.png', title: 'Ellicott city', height: '396' },
]

export const NeighborhoodItems: HouseItem[] = [
    { image: 'house1.png', title: 'Howard country', height: '396' },
    { image: 'house4.png', title: 'India', height: '570' },
    { image: 'house2.png', title: 'Columbia', height: '396' },
    { image: 'house5.png', title: 'Laurel', height: '396' },
    { image: 'house3.png', title: 'Catonsville', height: '570' },
    { image: 'house6.png', title: 'Ellicott city', height: '396' },
]

export const ReviewItems: ReviewItem[] = [
    { image: 'client1.png', icon: 'zillow.png', description: ' Nick helped me buy my first home and it was the best experience I could have asked for. He took the time to learn and understand my needs and wants as a first time home buyer, we only toured three homes ...', name: 'Morgan Cavanaugh' },
]

export const ContactAddressItems: ContactAddressItem[] = [
    { icon: 'location.png', content: '10050 Baltimore National Pike, Ellicott City, MD, 21042' },
    { icon: 'call.png', content: '(410) 914-7355' },
    { icon: 'mail.png', content: 'Nick@BayStatesHomeGroup.com' },
]

export const ClientInfoItems: ClientInfoItem[] = [
    { type: 'text', placeholder: 'Name' },
    { type: 'email', placeholder: 'Email Address' },
    { type: 'text', placeholder: 'content' },
    { type: 'text', placeholder: 'Subject' },
    { type: 'textarea', placeholder: 'Message' },
]

export const GroupAddressItems: ContactAddressItem[] = [
    { icon: 'g-location.png', content: '10050 Baltimore National Pike, Ellicott City, MD, 21042' },
    { icon: 'g-call.png', content: '(410) 914-7355' },
    { icon: 'g-mail.png', content: 'Nick@BayStatesHomeGroup.com' },
]

export const SectionItems = ['popular page', 'home', 'buy', 'sell', 'communities', 'financing', 'testimonials', 'team', 'contact us', 'blog']

export const FeaturedListings: FeaturedItem[] = [
    {
        icon: 'list1.png',
        address: '9345 Indian Trail Way 9345',
        postCode: 'Perry Hall, MD 21128',
        properties: [
            { property: 'price', value: '$455,000' },
            { property: 'beds', value: '5' },
            { property: 'baths', value: '4' },
            { property: 'sqft', value: '2,048' },
        ],
        date: 'Listed 1 Day Ago'
    },
    {
        icon: 'list2.png',
        address: '9510 Coyle Rd 409',
        postCode: 'PeOwings Mills, MD 21117',
        properties: [
            { property: 'price', value: '$4290,000' },
            { property: 'beds', value: '2' },
            { property: 'baths', value: '5' },
            { property: 'sqft', value: '1,620' },
        ],
        date: 'Listed 3 Day Ago'
    },
    {
        icon: 'list3.png',
        address: '9510 Coyle Rd 409',
        postCode: 'Owings Mills, MD 21117',
        properties: [
            { property: 'price', value: '$4290,000' },
            { property: 'beds', value: '2' },
            { property: 'baths', value: '5' },
            { property: 'sqft', value: '1,620' },
        ],
        date: 'Listed 4 Day Ago'
    },
    {
        icon: 'list4.png',
        address: '7854 Kentley Rd',
        postCode: 'Dundalk, MD 21222',
        properties: [
            { property: 'price', value: '$175,000' },
            { property: 'beds', value: '3' },
            { property: 'baths', value: '2' },
            { property: 'sqft', value: '1,152' },
        ],
        date: 'Listed 2 Day Ago'
    },
     {
        icon: 'list1.png',
        address: '9345 Indian Trail Way 9345',
        postCode: 'Perry Hall, MD 21128',
        properties: [
            { property: 'price', value: '$455,000' },
            { property: 'beds', value: '5' },
            { property: 'baths', value: '4' },
            { property: 'sqft', value: '2,048' },
        ],
        date: 'Listed 1 Day Ago'
    },
    {
        icon: 'list2.png',
        address: '9510 Coyle Rd 409',
        postCode: 'PeOwings Mills, MD 21117',
        properties: [
            { property: 'price', value: '$4290,000' },
            { property: 'beds', value: '2' },
            { property: 'baths', value: '5' },
            { property: 'sqft', value: '1,620' },
        ],
        date: 'Listed 3 Day Ago'
    },
    {
        icon: 'list3.png',
        address: '9510 Coyle Rd 409',
        postCode: 'Owings Mills, MD 21117',
        properties: [
            { property: 'price', value: '$4290,000' },
            { property: 'beds', value: '2' },
            { property: 'baths', value: '5' },
            { property: 'sqft', value: '1,620' },
        ],
        date: 'Listed 4 Day Ago'
    },
    {
        icon: 'list4.png',
        address: '7854 Kentley Rd',
        postCode: 'Dundalk, MD 21222',
        properties: [
            { property: 'price', value: '$175,000' },
            { property: 'beds', value: '3' },
            { property: 'baths', value: '2' },
            { property: 'sqft', value: '1,152' },
        ],
        date: 'Listed 2 Day Ago'
    },
]

