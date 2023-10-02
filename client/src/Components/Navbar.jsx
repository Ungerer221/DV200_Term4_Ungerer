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

    const button = (
        <Grid item xs={12} textAlign="center" sx={{ margin: 'auto' }}>
            <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                Hello
            </Button>
        </Grid>
    )

    return (
        <>
            <div className="navbar-con">
                <div className="navbar-logo">Logo</div>
                <div className="navbar-page-links">
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={4}
                    >
                        <Nav.Link className="navbar-page-links-options" href='/'>Home</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/Profile'>Profile</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/#'>Admin</Nav.Link>
                        <Nav.Link className="navbar-page-links-options" href='/#'>Sign Out</Nav.Link>
                    </Stack>
                </div>

                <Tooltip title="hello... again">
                    <Box sx={{}}>
                        {button}
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
        </>
    )
}
export default Navbar