import React from 'react';
import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const Home = () => {

    return (
        <AppBar>
            <Container maxWidth="md">
                <Toolbar>
                    <SettingsIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            flex: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        USTO
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default Home;