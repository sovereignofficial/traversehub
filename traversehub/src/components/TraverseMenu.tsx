import { Box, Button, Container, List, ListItem, Toolbar } from "@mui/material"
import { Logo } from "./Logo"
import { Explore, Home, Hotel, Message, Notifications, Person, SettingsOutlined } from "@material-ui/icons"

export const TraverseMenu = () => {
    return (
        <Container maxWidth="xl">
            <Box sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
            }}>
                <Logo />
            </Box>
            <Toolbar sx={{
                marginTop: "100px",
            }}>
                <List >
                    <ListItem>
                        <Button fullWidth variant="outlined"><Home/> Home</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><Notifications /> Notifications</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><Explore /> Explore</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><Message /> Messages</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><Hotel />Reservations</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><Person /> Profile</Button>
                    </ListItem>
                    <ListItem>
                        <Button fullWidth variant="outlined"><SettingsOutlined />Account</Button>
                    </ListItem>
                </List>
            </Toolbar>
        </Container>
    )
}
