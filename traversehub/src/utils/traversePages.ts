import { Explore, Home, Hotel, Message, Notifications, Person, SettingsOutlined } from "@material-ui/icons"
import { traverseMenuItem } from "./types"

const menuItems:traverseMenuItem[] = [
    {
        label:'Home',
        icon:Home,
        url:'/traverse'
    },
    {
        label:'Notifications',
        icon:Notifications,
        url:'/notifications'
    },
    {
        label:'Explore',
        icon:Explore,
        url:'/explore'
    },
    {
        label:'Messages',
        icon:Message,
        url:'/messages'
    },
    {
        label:'Reservations',
        icon:Hotel,
        url:'/reservations'
    },
    {
        label:'Profile',
        icon:Person,
        url:'/profile'
    },
    {
        label:'Settings',
        icon:SettingsOutlined,
        url:'/settings'
    },
]


const myTrips = [
    {id:1,country:'Deutschland',city:'Berlin',ctCode:'DE',notes:'nice city!',position:{
        lat:52.520008,
        lng:13.404954,
    },date:new Date('2027-10-31T15:59:59.138Z')},
    {id:2,country:'Turkiye',city:'Antalya',ctCode:'TR',notes:'nice city!',position:{
        lat:36.884804,
        lng:30.704044,
    },date:new Date('2027-10-31T15:59:59.138Z')},
    {id:3,country:'Turkiye',city:'Bodrum',ctCode:'TR',notes:'nice city!',position:{
        lat:37.036472,
        lng:27.425467,
    },date:new Date('2027-10-31T15:59:59.138Z')},
    {id:4,country:'Turkiye',city:'Izmir',ctCode:'TR',notes:'nice city!',position:{
        lat:37.857913,
        lng:27.261015,
    },date:new Date('2027-10-31T15:59:59.138Z')},
  ]

export {
    menuItems,
    myTrips
}