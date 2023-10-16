import React from "react";
import { Link } from 'react-router-dom';

import Axios from "axios";

// Bootstrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


// css
import './HomePage.css'

// components
import HomeQuestionCard from "../Components/HomeQuestionCard";

// Import UseState and Effect
import { useState, useEffect } from 'react';

function HomePage() {

    const [questions, setQuestions] = useState();

    // Read all questions
    Axios.get('http://localhost:5000/api/question_get_all/')
        .then(res => {
            let questionData = res.data;

            let renderQuestions = questionData.map((item) =>
                <HomeQuestionCard key={item._id} id={item._id} user={item.user} title={item.title} text={item.text} date={item.date} comments={item.comments} image={item.image}
                />)

            setQuestions(renderQuestions);
        })
        .catch(err => console.log(err))

    return (
        <>
            <div className="home-page-main-con">

                {/* Section 1 (Landing view) */}
                <Box sx={{ flexGrow: 1, width: '100%', height: '964px', marginTop: '40px' }}>
                    <Grid container spacing={0} sx={{ height: '800px' }}>
                        {/* text content */}
                        <Grid xs={6} sx={{ margin: 'auto', }}>
                            <h1 style={{ fontWeight: '400', fontSize: '64px' }}>Welcome to Open Dev Q&A site.</h1>
                            <p style={{}}>
                                <b>Description: </b>
                                Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                            <Button variant="contained">Take a Tour</Button>
                        </Grid>
                        {/* Image coloumn  */}
                        <Grid xs={6} sx={{ margin: 'auto', }}>
                            <div className="image-placeholder"></div>
                        </Grid>
                    </Grid>
                </Box>

                {/* Section 2  */}
                <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
                    {/* row 1 */}
                    <Grid container spacing={0}>
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                        <Link to="/ask" className="home-ask-question-input">
                            Ask A Question
                        </Link>
                        </Grid>
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                            <input type="text" placeholder="Search for a question" className="home-search-question-input"></input>
                        </Grid>
                        {/* question tile  */}
                        <Grid xs={12} sx={{ marginTop: '20px' }}>
                            {questions}
                        </Grid>
                    </Grid>
                </Box>

            </div>
        </>
    )
}
export default HomePage;