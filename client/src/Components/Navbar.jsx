import React from "react";
import './Navbar.css';

import { Nav } from 'react-bootstrap'

// MUI 
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Avatar } from "@mui/material";

// React Icons 
import { BiCog, BiHome, BiUser, BiLogOut } from "react-icons/bi";

const Navbar = () => {

    // Snackbark
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const hellobutton = (
        <Grid item xs={12} textAlign="center" sx={{ margin: 'auto' }}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })} className="hello-btn">
                Hello
            </Button>
        </Grid>
    )

    return (
        <>
            <div className="navbar-con">
                <div className="navbar-logo">Logo</div>
                <div className="navbar-page-links">
                    {/* <Nav.Link className="navbar-page-links-options" href='/Home'>Home</Nav.Link> */}
                    {/* <Nav.Link className="navbar-page-links-options" href='/Profile'>Profile</Nav.Link> */}
                    {/* <Nav.Link className="navbar-page-links-options" href='/#'>Adim</Nav.Link> */}
                    {/* <Nav.Link className="navbar-page-links-options" href='/SignIn'>Signout</Nav.Link> */}
                    {/* <Nav.Link className="navbar-page-links-options" href='/Signup'>Sign Up</Nav.Link> */}

                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={4}
                    >
                        <Nav.Link className="navbar-page-links-options" href='/'>Home</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/Profile'>Profile</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/#'>Admin</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/Signup'>Sign Up</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/SignIn'>Sign Out</Nav.Link>

                    </Stack>
                </div>

                <div className="other-buttons">

                    {/* Profil button  */}
                    <button className="nav-profile-dropdown-btn">
                        <Avatar></Avatar>
                        <div className="nav-profile-dropdown-content">
                            <Grid xs={12}>
                                <h3>User Name & Surname</h3>
                            </Grid>
                            <Grid xs={12}>
                                <Grid xs={12}>
                                    <Nav.Link href="/">
                                        <button>
                                            <BiHome />
                                            Home
                                        </button>
                                    </Nav.Link>
                                </Grid>
                                <button>
                                    <BiCog />
                                    Settings
                                </button>
                                <Grid xs={12} sx={{ marginBottom: '10px' }}>
                                    <Nav.Link className="navbar-page-links-options" href='/#'>
                                        <button>
                                            <BiUser />
                                            Admin
                                        </button>
                                    </Nav.Link>
                                </Grid>
                                <Grid xs={12}>
                                    <Nav.Link className="navbar-page-links-options" href='/SignIn'>
                                        <button>
                                            <BiLogOut />
                                            Log Out
                                        </button>
                                    </Nav.Link>
                                </Grid>
                            </Grid>
                        </div>

                    </button>

                    <Tooltip title="hello... again">
                        <Box sx={{}}>
                            {hellobutton}
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                open={open}
                                onClose={handleClose}
                                message="Howzit boet"
                                key={vertical + horizontal}
                            />
                        </Box>
                    </Tooltip>

                </div>

            </div>
        </>
    )
}
export default Navbar