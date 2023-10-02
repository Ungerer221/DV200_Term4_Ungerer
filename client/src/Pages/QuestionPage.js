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
                    <Grid container spacing={0} justifyContent={'Center'}>

                        {/* Div that holds the question and displays the box */}
                        <div id="question_box">

                            {/* Question title */}
                            <h1>Question Title</h1>

                            {/* Box that holds Username and Icon, as well as question content and tags */}
                            <Box sx={{ flexGrow: 1 }}>

                                {/* Grid for Username and Icon */}
                                <Grid xs={3}>
                                    <img src={Image} className="question_img"></img>
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

                                    <br></br>

                                    <ul className="questions_ul">
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                        <li className="questions_li">Tag</li>
                                    </ul>
                                </Grid>

                            </Box>
                        </div>

                    </Grid>

                </Box>
            </div>
        </>
    )
}
export default QuestionPage;