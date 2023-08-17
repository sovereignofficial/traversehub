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

const myCities = [
    {country:'DE',city:'Berlin',date:'August 17,2023'},
    {country:'TR',city:'Antalya',date:'August 17,2023'},
    {country:'TR',city:'Bodrum',date:'August 17,2023'},
    {country:'TR',city:'Izmir',date:'August 17,2023'},
  ]

export {
    menuItems,
    myCities
}