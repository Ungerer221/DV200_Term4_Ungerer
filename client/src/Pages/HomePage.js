import React from "react";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// css
import './HomePage.css'


function HomePage() {
    return (
        <>
            <div className="home-page-main-con">

                {/* Section 1 (Landing view) */}
                <Box sx={{ flexGrow: 1, }}>
                    <Grid container spacing={0}>
                        {/* text content */}
                        <Grid xs={6}>
                            <h1>Welcome to Open Dev Q&A site.</h1>
                            <p>
                                Description:
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </Grid>
                        {/* Image coloumn  */}
                        <Grid xs={6}>
                            <div className="image-placeholder"></div>
                        </Grid>
                    </Grid>
                </Box>

            </div>
        </>
    )
}
export default HomePage;