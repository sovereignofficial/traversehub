import { Container, Tab, Tabs } from "@mui/material"
import { FlowNav } from "./flow/FlowNav"
import { FlowContent } from "./flow/FlowContent"
import React, { useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export const TraverseFlow = () => {
    const location = useLocation();
    const currTab = location.pathname.split('/')[2] ?? 'cities'
    const [value, setValue] = useState(currTab);
    const navigate = useNavigate();
    const handleChangeTab = (event: React.SyntheticEvent, tabVal: string) => {
        console.log(event);
        setValue(tabVal);
        navigate(`/traverse/${tabVal}`);
    }


    return (
        <Container maxWidth="sm">
            <FlowNav>
                <Tabs value={value} onChange={handleChangeTab} centered >
                    <Tab label="Cities" value='cities' />
                    <Tab label="Countries" value='countries' />
                </Tabs>
            </FlowNav>
            <FlowContent>
                <Outlet />
            </FlowContent>
        </Container>
    )
}
