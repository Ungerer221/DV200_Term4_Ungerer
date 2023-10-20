import React from "react";
import { Nav } from 'react-bootstrap'
import { useState } from 'react';

import { BiXCircle, BiLike, BiDislike } from 'react-icons/bi'

// MUI 
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import Axios from "axios";


// CSS 
import './AskedQuestionsCard.css'

const AskedQuestionsCard = () => {

    // likes & dislike counter function 
    // likes 
    const [like, setLike] = useState(0); // here we can fetch the number from the database

    // get all with a for loop that finds this question's id within the likes model
    // each time it finds the id it increases likes or dislikes by 1

    Axios.get('http://localhost:5002/api/like_get_all/')
        .then((res) => {
            let questions = res.data;

            for (let k = 0; k < questions.length; k++) {
                // if (questions.questionID === ) {
                    
                // }
            }
        })
        .catch((err) => {
            console.error(`Error fetching user data: ${err.message}`);
        });

    function addLike() {
        setLike(like + 1);
    };

    // dislikes 
    const [dislike, setDislike] = useState(0);

    function addDislike() {
        setDislike(dislike + 1);
    };
    // function end

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
                    <button onClick={addLike}><BiLike /> Like {like}</button>
                    <button className="askedQuestionCard-dislike-btn" onClick={addDislike}><BiDislike /> Dislike {dislike}</button>
                    {/* <button><BiXCircle/> Delete</button> */}
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
                </p>
            </div>

            {/* <Nav.Link href='#'>See more</Nav.Link> */}
            <p style={{ color: '#37C5F1', fontWeight: 'bold', cursor: 'pointer' }}>See More</p>

            <div className="askedQuestionCard-medals">
                <Chip sx={{ height: "20px" }} label="JavaScript" />
                <Chip sx={{ height: "20px" }} label="CSS" />
                <Chip sx={{ height: "20px" }} label="HTML" />
                <Chip sx={{ height: "20px" }} label="React" />
                <Chip sx={{ height: "20px" }} label="Python" />
            </div>

        </div>
    )
}
export default AskedQuestionsCard