import React from "react";

// MUI 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
        </>
    )
}
export default QuestionPage;