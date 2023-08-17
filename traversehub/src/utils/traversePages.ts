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

export {
    menuItems
}