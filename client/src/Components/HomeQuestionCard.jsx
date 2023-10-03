import React from "react"

// CSS 
import './HomeQuestionCard.css'

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

const HomeQuestionCard = () => {
    return (
        <div className="homeQuestionCard-con">
            <Box sx={{ flexGrow: 1 }}>
                <Grid xs={12}>
                    <h2>Question Title</h2>
                </Grid>
                <Grid xs={12}>
                    <p>Username</p>
                </Grid>
                <Grid xs={12} sx={{ width: '900px', margin: 'auto' }}>
                    <p>
                        Question Snippet Lorem Ipsum Dolor
                        Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
                        Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                    </p>
                </Grid>
                {/* tags  */}
                <Grid xs={12}>
                    <Chip label="Tags" variant="outlined" />
                </Grid>
                <Grid xs={12} sx={{marginTop:'20px'}}>
                    <Button variant="contained">Read More</Button>
                </Grid>
            </Box>
        </div>
    )
}
export default HomeQuestionCard