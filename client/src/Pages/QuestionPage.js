import React from "react";

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

// css
import './QuestionPage.css'

// images
import Image from "../Assets/Images/Item.png";

function QuestionPage() {
    return (
        <>
            <div id="question_page_div">
                {/* Box containing everything */}
                <Box sx={{ flexGrow: 1 }}>

                    {/* Grid containing Everything */}
                    <Grid spacing={0} >

                        {/* Div that holds the question and displays the box */}
                        <div id="question_box">

                            {/* Grid (Row) that holds the Title */}
                            <Grid xs={12}>
                                {/* Question title */}
                                <h1>Question Title</h1>
                            </Grid>

                            {/* Grid (Row) that holds Username and Icon, as well as question content and tags */}
                            <Grid xs={12}>
                                {/* Grid for Username and Icon */}
                                <Grid xs={3}>
                                    <img src={Image} className="user_img"></img>
                                    <p>Username</p>
                                </Grid>

                                {/* Grid for text content and tags */}
                                <Grid xs={9}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </p>

                                    <ul className="questions_ul">
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                    </ul>
                                </Grid>
                            </Grid>

                        </div>

                    </Grid>

                    <Grid spacing={0}>
                        <div>
                            <image src={Image} className="question_img"></image>
                        </div>
                    </Grid>

                </Box>
            </div>

            {/* trying something  */}
            <div className="question-page-con">
                {/* top row  */}
                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{width:'110px', height:'110px', margin:'auto'}}>H</Avatar>
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
        </>
    )
}
export default QuestionPage;