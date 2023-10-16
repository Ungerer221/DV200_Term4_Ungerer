import React, { useEffect, useState } from "react";

// Axios
import Axios from "axios";

// MUI 
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

// css
import './QuestionPage.css'

// Images
import Image from '../Assets/Images/Item.png'

function QuestionPage() {

    const questionID = sessionStorage.getItem("QuestionClick");
    console.log(questionID);

    const [question, setQuestion] = useState([]);
    const [username, setUsername] = useState();

    // Use effect for read question
    useEffect(() => {
        Axios.get('http://localhost:5000/api/question_get_single/' + questionID)
            .then(result => {
                console.log('before');
                setQuestion(result.data);
                console.log('after');
            })
            .catch(err => {
                console.log(err);
                if (err.response) {
                    console.log(err.response.status);
                    console.log(err.response.data);
                }
            });

        // Get specific user
        Axios.get('http://localhost:5000/api/getUser/' + question.user)
            .then(result => { setUsername(result.data.username); })
            .catch(err => console.log(err))

    }, [])

    console.log(question);

    return (
        <>
            <div className="question-page-con">
                {/* top row  */}
                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>H</Avatar>
                        </Grid>
                        <Grid xs={12}>
                            <p>{username}</p>
                        </Grid>
                        <Grid xs={12}>
                            <p>{question.date}</p>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}
                    <Grid xs={10}>
                        <Grid>
                            <Grid>
                                <h1>{question.title}</h1>
                            </Grid>
                            <Grid>
                                <p>
                                    {question.text}
                                </p>
                            </Grid>
                            <Grid>
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            {/* Image row  */}
            <Grid container spacing={0}>
                {/* Column 1 */}
                <Grid xs={12}>
                    <Grid xs={12}>
                        <img src={Image} className="question_img" style={{ display: 'none' }}></img>
                    </Grid>
                </Grid>
            </Grid>

            {/* Answers row  */}
            <div className="answers_bg">
                <Grid container spacing={0}>
                    {/* Title */}
                    <Grid xs={12}>
                        <Grid xs={2}>
                            <p id="answers_text">Answers:</p>
                        </Grid>
                        <Grid xs={10}></Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>H</Avatar>
                        </Grid>
                        <Grid xs={12}>
                            <p>Username</p>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}
                    <Grid xs={10}>
                        <Grid>
                            <Grid>
                                <h1>Answer Title</h1>
                            </Grid>
                            <Grid>
                                <p>
                                    Question Snippet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                                    Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit
                                    Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                                </p>
                            </Grid>
                            <Grid>
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>H</Avatar>
                        </Grid>
                        <Grid xs={12}>
                            <p>Username</p>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}
                    <Grid xs={10}>
                        <Grid>
                            <Grid>
                                <h1>Answer Title</h1>
                            </Grid>
                            <Grid>
                                <p>
                                    Question Snippet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                                    Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit
                                    Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum
                                </p>
                            </Grid>
                            <Grid>
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                                <Chip label="Tags" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default QuestionPage;