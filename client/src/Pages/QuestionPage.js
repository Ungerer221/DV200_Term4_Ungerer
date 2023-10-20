import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
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

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let id = searchParams.get('id');

    // Initialize as null in case there are no comments
    const [answers, setAnswers] = useState(0);
    const [renderAnswers, setRenderAnswers] = useState(null);

    // likes & dislike counter function 
    // likes 
    const [like, setLike] = useState(1); // here we can fetch the number from the database

    function addLike() {
        setLike(like + 1);
    };

    // dislikes 
    const [dislike, setDislike] = useState(0);

    function addDislike() {
        setDislike(dislike + 1);
    };

    useEffect(() => {
        // Fetch the question
        // console.log(`http://localhost:5002/api/question_get_single/${questionID}`);
        console.log('id ' + id);
        Axios.get(`http://localhost:5002/api/question_get_single/${id}`)
            .then((result) => {
                setQuestion(result.data);

                if (result.data.tags === undefined) {
                    result.data.tags = ["No Tags"];
                }

                // Fetch the user
                Axios.get(`http://localhost:5002/api/getUser/${result.data.user}`)
                    .then((userResult) => {
                        setUsername(userResult.data.username);
                    })
                    .catch((err) => {
                        console.error("Error fetching user:", err);
                    });

                // If the comments array is not empty, do the following:
                if (result.data.comments.length > 1) {
                    setRenderAnswers(
                        result.data.comments.map((item) => (
                            <AnswerCards key={item._id} id={item._id} user={item.user} title={item.title} text={item.text} />
                        ))
                    );
                    setAnswers(true)
                }

                Axios.get('http://localhost:5002/api/like_get_all/')
                    .then((res) => {
                        let questions = res.data;

                        console.log(questions);

                        for (let k = 0; k < questions.length; k++) {
                            if (questions[k].questionID === id) {
                                switch (questions[k].type) {
                                    case "like":
                                        addLike();
                                        console.log('Found like')
                                        break;

                                    case "dislike":
                                        addDislike();
                                        break;

                                    case "none":
                                        break;
                                }
                            }
                        }

                    })
                    .catch((err) => {
                        console.error(`Error fetching user data: ${err.message}`);
                    });

                Axios.get('http://localhost:5002/api/getUsers')
                    .then((res) => {
                        let users = res.data;

                        for (let k = 0; k < users.length; k++) {
                            if (condition) {
                                const element = array[k];
                                
                            }
                        }
                    })
            })
            .catch((err) => {
                console.error("Error fetching question:", err);
            });
    }, []);

    // TODO image displaying
    const serverURL = 'http://localhost:5000';
    const imageURL = `${serverURL}/${question.image}`;

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
                    <br></br>
                    <p>Likes: {like}</p>

                    <Button>Like</Button>
                    <br></br>
                    <Button>Dislike</Button>
                </Grid>
            </Grid>

            {/* Image row */}
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <img src={imageURL} alt={question.title} className="question_img"></img>
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
                {answers ? renderAnswers : <p>No answers available yet.</p>}

            </div>
        </div>
    );
}

export default QuestionPage;