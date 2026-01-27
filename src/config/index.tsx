import type { addressItem, benifitItem, HouseItem } from "../types";

export const addressItems: addressItem[] = [
    { icon: 'call.svg', address: '(410) 914-7355 (Nick direct)' },
    { icon: 'call.svg', address: '(443) 289-4994 (Cailean direct)' },
    { icon: 'call.svg', address: '(410) 823-0033 (office)' },
    { icon: 'email.svg', address: 'Cailean@BayStatesHomeGroup.com' },
    { icon: 'email.svg', address: 'Nick@BayStatesHomeGroup.com' },
];

export const benifitItems: benifitItem[] = [
    { icon: 'search.svg', title: 'Search New Homes for Sale!', description: 'Our listings are updated around the clock so you can see deals as soon as they hit the marketOur listings are updated around the clock so you can see deals as soon as they hit the market'},
    { icon: 'house.svg', title: 'What’s your Home Worth?', description: 'Discover the value of your home.' },
    { icon: 'agreement.svg', title: 'Why List With us?', description: 'Find out what sets us apart from every other agent out there.' },

]

export const HouseItems:HouseItem[]=[
    {image: 'house1.png', title:'Howard country', height:'396px'},
    {image: 'house4.png', title:'India', height:'570px'},
    {image: 'house2.png', title:'Columbia', height:'396px'},
    {image: 'house5.png', title:'Laurel', height:'396px'},
    {image: 'house3.png', title:'Catonsville', height:'570px'},
    {image: 'house6.png', title:'Ellicott city', height:'396px'},
]

export const LeftHouseItems:HouseItem[]=[
    {image: 'house1.png', title:'Howard country', height:'396'},
    {image: 'house2.png', title:'Columbia', height:'396'},
    {image: 'house3.png', title:'Catonsville', height:'570'},
]

export const RightHouseItems:HouseItem[]=[
    {image: 'house4.png', title:'India', height:'570'},
    {image: 'house5.png', title:'Laurel', height:'396'},
    {image: 'house6.png', title:'Ellicott city', height:'396'},
]