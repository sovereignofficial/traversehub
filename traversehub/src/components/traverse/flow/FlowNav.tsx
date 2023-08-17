import {  Toolbar } from "@mui/material"
import { ReactNode } from "react"


export const FlowNav = ({children}:{children:ReactNode}) => {
    return (
        <Toolbar sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}>
            {children}
        </Toolbar>
    )
}
