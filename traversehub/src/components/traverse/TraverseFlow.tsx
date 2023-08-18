import { Container, Tab, Tabs } from "@mui/material"
import { FlowNav } from "./flow/FlowNav"
import { FlowContent } from "./flow/FlowContent"
import React, { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const TraverseFlow = () => {
    const [value, setValue] = useState('cities');
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
