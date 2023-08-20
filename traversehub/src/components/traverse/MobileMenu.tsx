import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import { menuItems } from "../../utils/traversePages"
import { traverseMenuItem } from "../../utils/types.d"

export const MobileMenu = () => {
  return (
    <BottomNavigation sx={{
        position:'fixed',
        bottom:0,
        left:0
    }}>
        {menuItems.map((item:traverseMenuItem,index:number)=>(
            <BottomNavigationAction key={index} label={item.label} icon={(<item.icon/>)}/>
        ))}
    </BottomNavigation>
  )
}
