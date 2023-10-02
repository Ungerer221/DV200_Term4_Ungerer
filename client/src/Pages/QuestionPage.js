import React from "react";

// MUI 
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

// css
import './QuestionPage.css'

// Images
import Image from '../Assets/Images/Item.png'

function QuestionPage() {
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
                            <p>Username</p>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}
                    <Grid xs={10}>
                        <Grid>
                            <Grid>
                                <h1>Question Title</h1>
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