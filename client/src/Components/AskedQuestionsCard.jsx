import React from "react";
import { Nav } from 'react-bootstrap'

// MUI 
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

// CSS 
import './AskedQuestionsCard.css'

const AskedQuestionsCard = () => {
    return (
        <div className="askedQuestionCard-Container">
            {/* row 1  */}
            <div className="askedQuestionCard-header-row">

                {/* card title info  */}
                <div className="askedQuestionCard-title-info">
                    {/* logo */}
                    <div className="askedQuestionCard-logo">
                        <img src="" alt=""></img>
                    </div>
                    {/* user name & surname  */}
                    <h1 className="askedQuestionsCard-Title">Question Title</h1>
                </div>

                {/* like and dislike buttons con  */}
                <div className="askedQuestionCard-like-dislike-btn-con">
                    <button>like</button>
                    <button>dislike</button>
                </div>
            </div>

            {/* divider  */}
            <div className="askedQuestionCard-divider"></div>

            <div className="askedQuestionCard-tags">
                <Chip label="JavaScript" variant="outlined" />
                <Chip label="CSS" variant="outlined" />
                <Chip label="HTML" variant="outlined" />
                <Chip label="React" variant="outlined" />
                <Chip label="Python" variant="outlined" />
            </div>

            <div className="askedQuestioncard-content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente distinctio ab ipsam ut? Quas odit numquam, debitis labore adipisci dolor facere.
                    Id accusantium error laborum distinctio a impedit nemo repudiandae!
                </p>
            </div>

            {/* <Nav.Link href='#'>See more</Nav.Link> */}
            <p style={{ color: '#37C5F1', fontWeight: 'bold', cursor: 'pointer' }}>See More</p>

            <div className="askedQuestionCard-medals">
                <Chip sx={{height:"20px"}} label="JavaScript" />
                <Chip sx={{height:"20px"}} label="CSS" />
                <Chip sx={{height:"20px"}} label="HTML" />
                <Chip sx={{height:"20px"}} label="React" />
                <Chip sx={{height:"20px"}} label="Python" />
            </div>

        </div>
    )
}
export default AskedQuestionsCard