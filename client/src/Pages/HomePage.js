import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';

import Axios from "axios";

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// css
import './HomePage.css'
import LandingImage from '../Assets/Images/10.svg'

// components
import HomeQuestionCard from "../Components/HomeQuestionCard";
import ErrorCard from "../Components/ErrorCard";

function HomePage() {

    const [questions, setQuestions] = useState();
    const [errorMes, setErrorMes] = useState();
    const [error, setError] = useState(false);



    const [searchParams, setSearchParams] = useSearchParams({ search: '' })
    const searcher = searchParams.get('search')
    const [axiosCall, setAxiosCall] = useState('http://localhost:5002/api/question_get_all/');


    useEffect(() => {
        // Read all questions
        if (searcher === '') {
            setAxiosCall('http://localhost:5002/api/question_get_all/');
        } else {
            setAxiosCall('http://localhost:5002/api/searchquestion/' + searcher);
        }
        Axios.get(axiosCall)
            .then(res => {
                let questionData = res.data;
                console.log(questionData)
                let renderQuestions = questionData.map((item) =>
                    <HomeQuestionCard key={item._id} id={item._id} user={item.user} title={item.title} text={item.text} date={item.date} comments={item.comments} image={item.image} />);
                setQuestions(renderQuestions);
            })
            .catch(err => {
                console.log(err)
                // console.log(err.message + ' error')
                setErrorMes(<ErrorCard message={err.message} />)
                setError(true);
            })
    }, [axiosCall]);

    const handleSearch = () => {
        if (searcher === '') {
            setAxiosCall('http://localhost:5002/api/question_get_all/');
        } else {
            setAxiosCall('http://localhost:5002/api/searchquestion/' + searcher);
        }
    }

    return (
        <>
            {error ? errorMes :
                <div className="home-page-main-con">

                    {/* Section 1 (Landing view) */}
                    <Box sx={{ flexGrow: 1, width: '100%', height: '964px', marginTop: '40px' }}>
                        <Grid container spacing={0} sx={{ height: '800px' }}>
                            {/* text content */}
                            <Grid xs={6} sx={{ margin: 'auto', }}>
                                <h1 style={{ fontWeight: '400', fontSize: '64px' }}>Welcome to Open Dev Q&A site.</h1>
                                <p style={{}}>
                                    <b>Description: </b>
                                    OpenDev is an open source, developer community forum website where developers can ask questions and answer them.
                                </p>
                            </Grid>
                            {/* Image coloumn  */}
                            <Grid xs={6} sx={{ margin: 'auto', }}>
                                <div className="image-placeholder">
                                    <img src={LandingImage} alt=''></img>
                                </div>
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
                                {/* <Link ocClick={checkUser} className="home-ask-question-input">
                                Ask A Question
                            </Link> */}
                            </Grid>
                            <Grid xs={12} sx={{ marginTop: '20px' }}>
                                {searcher === '' ? <input type="text" placeholder="Search for a question" className="home-search-question-input" onChange={(e) => setSearchParams(prev => {
                                    prev.set('search', e.target.value)
                                    return prev
                                })} /> : <input type="text" className="home-search-question-input" onChange={(e) => setSearchParams(prev => {
                                    prev.set('search', e.target.value)
                                    return prev
                                })} value={searcher} />}

                                <Button onClick={handleSearch}> Test Button Here </Button>
                            </Grid>
                            {/* question tile  */}
                            <Grid xs={12} sx={{ marginTop: '20px' }}>
                                {/* if you comment this out then the server stops crashing   */}
                                {questions}
                            </Grid>
                        </Grid>
                    </Box>

                </div>
            }
        </>
    )
}
export default HomePage;