import React, { useState } from "react"

// CSS 
import './HomeQuestionCard.css'

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

// Axios import
import Axios from "axios";

const HomeQuestionCard = (props) => {

    // TODO 
    // Get username from the ID entered
    // Automatic tag population
    // Read more button that sends data to the individual question page

    const [username, setUsername] = useState();

    // Get specific user
    Axios.get('http://localhost:5000/api/getUser/' + props.user)
        .then(res => {
            setUsername(res.data);
        })
        .catch(err => console.log(err))

    return (
        <div className="homeQuestionCard-con">
            <Box sx={{ flexGrow: 1 }}>
                <Grid xs={12}>
                    <h2>{props.title}</h2>
                </Grid>
                <Grid xs={12}>
                    <p>{username}</p>
                </Grid>
                <Grid xs={12}>
                    <p>{props.date}</p>
                </Grid>
                <Grid xs={12} sx={{ width: '900px', margin: 'auto' }}>
                    <p>
                        {props.text}
                    </p>
                </Grid>
                {/* tags  */}
                <Grid xs={12}>
                    <Chip label="Tags" variant="outlined" />
                </Grid>
                <Grid xs={12} sx={{ marginTop: '20px' }}>
                    <Button variant="contained" id={"btnReadMore_" + props.id}>Read More</Button>
                </Grid>
            </Box>
        </div>
    )
}
export default HomeQuestionCard