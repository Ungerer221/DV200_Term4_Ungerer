import React, { useEffect, useState } from "react";
import Axios from "axios";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { BiXCircle } from 'react-icons/bi';

import './QuestionPage.css';
import AnswerCards from "../Components/AnswerCards";

function QuestionPage() {
    const questionID = sessionStorage.getItem("QuestionClick");
    const [question, setQuestion] = useState({});
    const [username, setUsername] = useState("");

    // Initialize as null in case there are no comments
    const [answers, setAnswers] = useState(null);
    const [renderAnswers, setRenderAnswers] = useState(null);

    useEffect(() => {
        // Fetch the question
        console.log(`http://localhost:5000/api/question_get_single/${questionID}`);
        Axios.get(`http://localhost:5000/api/question_get_single/${questionID}`)
            .then((result) => {
                setQuestion(result.data);

                if (result.data.tags === undefined) {
                    result.data.tags = ["No Tags"];
                }

                // Fetch the user
                Axios.get(`http://localhost:5000/api/getUser/${result.data.user}`)
                    .then((userResult) => {
                        setUsername(userResult.data.username);
                    })
                    .catch((err) => {
                        console.error("Error fetching user:", err);
                    });

                // If the comments array is not empty, do the following:
                if (result.data.comments && Array.isArray(result.data.comments)) {
                    setRenderAnswers(
                        result.data.comments.map((item) => (
                            <AnswerCards key={item._id} id={item._id} user={item.user} title={item.title} text={item.text} />
                        ))
                    );
                }
            })
            .catch((err) => {
                console.error("Error fetching question:", err);
            });
    }, [questionID]); // Include questionID as a dependency to re-fetch when it changes

    return (
        <div className="question-page-con">
            <Grid container spacing={0}>
                {/* Render user information */}
                <Grid item xs={2}>
                    <Grid item xs={12}>
                        <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>H</Avatar>
                    </Grid>
                    <Grid item xs={12}>
                        <p>{username}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p>{question.date}</p>
                    </Grid>
                </Grid>
                {/* Render question information */}
                <Grid item xs={8}>
                    <h1>{question.title}</h1>
                    <p>{question.text}</p>
                    <div>
                        {Array.isArray(question.tags) ? (
                            question.tags.map((tag, index) => (
                                <Chip key={index} label={tag} variant="outlined" />
                            ))
                        ) : (
                            <Chip label={"No Tags"} variant="outlined" />
                        )}
                    </div>
                </Grid>
                {/* Render delete button */}
                <Grid item xs={2}>
                    <Button variant="contained" sx={{ margin: "auto" }}><BiXCircle />Delete</Button>
                </Grid>
            </Grid>

            {/* Image row */}
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <img src={""} className="question_img" alt="" />
                </Grid>
            </Grid>

            {/* Answers section */}
            <div className="answers_bg">
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2}>
                                <p id="answers_text">Answers:</p>
                            </Grid>
                            <Grid item xs={10}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* Render answers here */}
                {/* If there are no answers, do the following: */}
                {renderAnswers ? renderAnswers : <p>No answers available yet.</p>}

            </div>
        </div>
    );
}

export default QuestionPage;