import { Container, Tab, Tabs } from "@mui/material"
import { FlowNav } from "./flow/FlowNav"
import { FlowContent } from "./flow/FlowContent"
import React, { useState } from "react"
import { City } from "./flow/City"
import { Country } from "./flow/Country"

export const TraverseFlow = () => {
    const [value, setValue] = useState('city');

    const handleChangeTab = (event: React.SyntheticEvent, tabVal: string) => {
        console.log(event);
        setValue(tabVal)
    }
    return (
        <Container maxWidth="sm">
            <FlowNav>
                <Tabs value={value} onChange={handleChangeTab} centered >
                    <Tab label="Cities" value='city' />
                    <Tab label="Countries" value='country' />
                </Tabs>
            </FlowNav>
            <FlowContent>
                {
                    value === 'city' 
                    ? (<City/>)
                    : (<Country/>)
                }
            </FlowContent>
        </Container>
    )
}
