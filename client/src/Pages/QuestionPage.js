import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Axios from "axios";
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { BiXCircle } from 'react-icons/bi';
import TextField from '@mui/material/TextField';

import './QuestionPage.css';
import AnswerCards from "../Components/AnswerCards";
// import answer from "../../../server/models/answer";

function QuestionPage() {
    // const questionID = sessionStorage.getItem("QuestionClick");
    const [question, setQuestion] = useState({});
    const [username, setUsername] = useState("");

    // Get the user id
    const [Id, setId] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const questionID = searchParams.get('id');

    // Initialize as null in case there are no comments
    const [answers, setAnswers] = useState();
    const [renderAnswers, setRenderAnswers] = useState(null);

    const [AnswerTitle, setAnswerTitle] = useState();
    const [AnswerText, setAnswerText] = useState();
    const [updateAnswers, setUpdateAnswers] = useState();

    const [error, setError] = useState("");

    // likes & dislike counter function 
    // likes 
    const [like, setLike] = useState(0); // here we can fetch the number from the database

    function addLike(Amount) {
        setLike(like + Amount);
    };

    // dislikes 
    const [dislike, setDislike] = useState(0);

    function addDislike(Amount) {
        setDislike(dislike + Amount);
    };

    // Handles the like clicking
    const handleLike = async () => {

        // Get all users to find who is currently logged in 
        let usermail = sessionStorage.getItem('useremail');

        try {
            Axios.get("http://localhost:5002/api/GetUserID/" + usermail)
                .then((res) => {
                    const response = res;
                    setId(response.data[0]._id);
                })

        } catch (error) {
            console.log(error);
            console.log('User ID not found');
        }

        // Get all likes
        Axios.get('http://localhost:5002/api/like_get_all/')
            .then((res) => {
                // --Set the likes to a variable to see which questions this user has liked. 
                // --This prevents the same person from liking the same post more than once.
                let questions = res.data;

                // --Call session storage once to ensure it is never lagging behind.
                // --Set a variable to the ID of the logged in user.
                let USER = Id;

                // --Used to test if the user has been found
                let bFound = false;
                let questionType = "";
                let likeID = "";

                // --Run through the array of liked posts to see which posts this user has liked.
                for (let k = 0; k < questions.length; k++) {
                    // ---If the user has been found
                    if (USER === questions[k].userID) {

                        // ----If the user liked this specific question
                        if (questionID === questions[k].questionID) {
                            bFound = true;
                            questionType = questions[k].type;
                            likeID = questions[k]._id;
                        }

                    }
                }

                // If the user HASN'T liked this post yet
                if (bFound === false) {
                    // Increase likes by 1
                    addLike(1);

                    // Axios post to add another like to the database
                    let url = "http://localhost:5002/api/like_add/";
                    let data = {
                        userID: USER,
                        questionID: questionID,
                        type: "like"
                    }

                    Axios.post(url, data);
                    document.getElementById("btnLike").style.color = 'gray';

                } else if (bFound === true && questionType === "like") {
                    // If the user has already liked the post, delete the entry

                    // Build the url and the data
                    let url = "http://localhost:5002/api/like_delete/" + likeID;

                    // Delete the entry to unlike the post
                    Axios.delete(url).catch("Error deleting");

                    // Decrease likes with one
                    addLike(-1);

                    // Set the button to gray to discourage like spamming
                    document.getElementById("btnLike").style.color = 'gray';

                } else if (bFound === true && questionType === 'dislike') {
                    // if the user changes from a dislike to a like
                    try {

                        // Build the url and the data
                        let url = "http://localhost:5002/api/like_update/" + likeID;
                        let updata = {
                            userID: USER,
                            questionID: questionID,
                            type: "like"
                        }

                        // Both are correct
                        // console.log(url);
                        // console.log(updata);

                        // Update the db with the new like
                        Axios.put(url, updata).catch(console.log("Axios error"));

                        addLike(1);
                        addDislike(-1);

                        document.getElementById("btnLike").style.color = 'gray';

                    } catch (error) {
                        console.log('error adding like')
                    }

                }

            })
            .catch((err) => {
                console.error(`Error fetching user data: ${err.message}`);
            });

    }

    // Handles the dislike clicking
    const handleDislike = async () => {

        // Get all users to find who is currently logged in 
        let usermail = sessionStorage.getItem('useremail');

        try {
            Axios.get("http://localhost:5002/api/GetUserID/" + usermail)
                .then((res) => {
                    const response = res;
                    setId(response.data[0]._id);
                })

        } catch (error) {
            console.log(error);
            console.log('User ID not found');
        }

        // Get all dislikes
        Axios.get('http://localhost:5002/api/like_get_all/')
            .then((res) => {
                let questions = res.data;

                let USER = Id;

                let bFound = false;
                let questionType = "";
                let likeID = "";

                // --Run through the array of liked posts to see which posts this user has liked.
                for (let k = 0; k < questions.length; k++) {
                    // ---If the user has been found
                    if (USER === questions[k].userID) {

                        // ----If the user liked this specific question
                        if (questionID === questions[k].questionID) {
                            bFound = true;
                            questionType = questions[k].type;
                            likeID = questions[k]._id;
                        }

                    }
                }

                // If the user HASN'T liked this post yet
                if (bFound === false) {
                    // Increase likes by 1
                    addDislike(1);

                    // Axios post to add another like to the database
                    let url = "http://localhost:5002/api/like_add/";
                    let data = {
                        userID: USER,
                        questionID: questionID,
                        type: "dislike"
                    }

                    Axios.post(url, data);
                    document.getElementById("btnDislike").style.color = 'gray';

                } else if (bFound === true && questionType === "dislike") {
                    // If the user has already disliked the post, delete the entry

                    // Build the url and the data
                    let url = "http://localhost:5002/api/like_delete/" + likeID;

                    // Delete the entry to unlike the post
                    Axios.delete(url).catch("Error deleting");

                    // Decrease likes with one
                    addDislike(-1);

                    // Set the button to gray to discourage like spamming
                    document.getElementById("btnDislike").style.color = 'gray';

                } else if (bFound === true && questionType === "like") {
                    // if the user changes from a like to a dislike
                    try {

                        // Build the url and the data
                        let url = "http://localhost:5002/api/like_update/" + likeID;
                        let updata = {
                            userID: USER,
                            questionID: questionID,
                            type: "dislike"
                        }

                        // Update the db with the new like
                        Axios.put(url, updata).catch(console.log("Axios error"));

                        addDislike(1);
                        addLike(-1);

                        document.getElementById("btnDislike").style.color = 'gray';

                    } catch (error) {
                        console.log('error adding dislike')
                    }

                }

            })
            .catch((err) => {
                console.error(`Error fetching user data: ${err.message}`);
            });

    }

    const handleDelete = async () => {
        // Get all users to find who is currently logged in 
        Axios.get('http://localhost:5002/api/getUsers')
            .then((res) => {

                // The response is an array of all the users
                let users = res.data;

                // get who is currently signed in
                let email = sessionStorage.getItem('email');

                // Gather the user ID of who is currently logged in based on which email matches the one in the DB
                for (let k = 0; k < users.length; k++) {
                    if (users[k].email === email) {
                        // Correct user ID is logged
                        // console.log(users[k]._id);
                        sessionStorage.setItem('userID', users[k]._id);
                    }
                }

                let url = 'http://localhost:5002/api/question_get_single/' + questionID;

                Axios.get(url).then(res => {
                    let FoundUser = res.data.user;
                    console.log(FoundUser);
                    console.log(sessionStorage.getItem('userID'));

                    if (sessionStorage.getItem("admin") === true || FoundUser === sessionStorage.getItem('userID')) {

                        if (window.confirm('Are you sure you want to delete this question? This cannot be undone.') === true) {
                            // Build the url and the data
                            let url = "http://localhost:5002/api/question_delete/" + questionID;

                            // Delete the entry to unlike the post
                            Axios.delete(url).catch("Error deleting");

                            window.location = '/Home';
                        }

                    } else {
                        window.alert("You do not have permissions to delete this question.")
                    }
                })
            })
    }

    useEffect(() => {

        // Set the id the the user that is currently logged in
        let usermail = sessionStorage.getItem('useremail');
        Axios.get("http://localhost:5002/api/GetUserID/" + usermail)
            .then((response) => {
                if (response.data && response.data[0] && response.data[0]._id) {
                    const foundUserId = response.data[0]._id;
                    setId(foundUserId);
                    console.log(foundUserId);
                } else {
                    console.log("User ID not found in the response.");
                }
            })
            .catch((error) => {
                console.error("Error fetching user ID:", error);
            });

        // Fetch the question
        Axios.get(`http://localhost:5002/api/question_get_single/${questionID}`)
            .then((result) => {
                setQuestion(result.data);
                console.log(question);
                console.log(result.data)

                // If there are no tags
                if (result.data.tags === undefined) {
                    result.data.tags = ["No Tags"];
                }

                // Fetch the user
                Axios.get(`http://localhost:5002/api/getUser/${result.data.user}`)
                    .then((userResult) => {
                        setUsername(userResult.data.username);
                        console.log(userResult.data)
                    })
                    .catch((err) => {
                        console.error("Error fetching user:", err);
                    });

                // If the comments array is not empty, do the following:
                if (result.data.comments.length > 1) {
                    setRenderAnswers(
                        result.data.comments.slice(1).map((item) => (
                            <AnswerCards key={item._id} id={item._id} user={item.user} title={item.title} text={item.text} />
                        ))
                    );
                    setAnswers(true)
                }

                Axios.get('http://localhost:5002/api/like_get_all/')
                    .then((res) => {
                        // --Gather all liked questions and set them to the variable here
                        let questions = res.data;
                        // ---console.log(questions);

                        // variable to count the amount of likes and dislikes
                        let iLikes = 0;
                        let iDislikes = 0;

                        // Count how many likes there are
                        for (let k = 0; k < questions.length; k++) {
                            if (questions[k].questionID === questionID) {
                                switch (questions[k].type) {
                                    case "like":
                                        // increase like amount by one
                                        iLikes++;
                                        // console.log('Found Like');
                                        break;

                                    case "dislike":
                                        iDislikes++;
                                        // console.log('Found Dislike');
                                        break;

                                    case "none":
                                        break;
                                }
                            }
                        }

                        // set the amount of likes equal to the amount counted
                        addLike(iLikes);
                        addDislike(iDislikes);

                    })
                    .catch((err) => {
                        console.error(`Error fetching user data: ${err.message}`);
                    });
            })
            .catch((err) => {
                console.error("Error fetching question:", err);
            });
    }, []);

    const serverURL = 'http://localhost:5002/images';
    const imageURL = `${serverURL}/${question.image}`;
    // console.log(question);
    // console.log("image " + question.image)
    // console.log(imageURL);

    // answer question functionality !!!!
    const AnswerQ = (e) => {
        document.getElementById("answer-title-field").style.display = "block"
        document.getElementById("answer-main-field").style.display = "block"
        document.getElementById("answer-question-submit").style.display = "block"
    }

    const CancelQ = (e) => {
        document.getElementById("answer-title-field").style.display = "none"
        document.getElementById("answer-main-field").style.display = "none"
        document.getElementById("answer-question-submit").style.display = "none"
    }

    const getAnswerTitle = (e) => {
        let value = e.target.value;
        setAnswerTitle(value);
    }

    const getAnswerText = (e) => {
        let value = e.target.value;
        setAnswerText(value);
    }

    // add question 
    const addAnswer = (e) => {

        let urlGet = 'http://localhost:5002/api/question_get_single/' + questionID;

        Axios.get(urlGet).then(res => {
            const Comments = res.data.comments;
            console.log(Comments);

            let push = {
                user: Id,
                title: AnswerTitle,
                text: AnswerText
            }

            Comments.push(push);
            console.log(Comments);

            const userData = res.data.user;
            const title = res.data.title;
            const text = res.data.text;
            const date = res.data.date;

            let payload = {
                user: userData,
                title: title,
                text: text,
                date: date,
                comments: Comments
            }

            console.log(payload);

            let url = 'http://localhost:5002/api/question/' + questionID;
            Axios.put(url, payload)
                .then(res => {
                    console.log(res.data)
                    window.location.reload(false);
                })
                .catch(err => {
                    console.log(err)
                    setError(err)
                })
        });
    }

    return (
        <div className="question-page-con">
            <Grid container spacing={0}>
                {/* Render user information */}
                <Grid item xs={2}>
                    <Grid item xs={12}>
                        <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>Z</Avatar>
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
                    <Button variant="contained" sx={{ margin: "auto" }} id="btnDelete" onClick={handleDelete}><BiXCircle />Delete</Button>
                    <br></br>
                    <p>Likes: {like}</p>
                    <p>Dislikes: {dislike}</p>

                    <Button onClick={handleLike} id="btnLike">Like</Button>
                    <br></br>
                    <Button onClick={handleDislike} id="btnDislike">Dislike</Button>
                </Grid>
            </Grid>

            {/* Image row */}
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <img src={imageURL} alt={question.title} className="question_img"></img>
                </Grid>
            </Grid>

            {/* answer question form section  */}
            <Grid container spacing={0}>
                <Grid xs={12} sx={{ marginBottom: '20px' }}>
                    {/* //? when you first click the button it pops up with a weird error but if you close the error it functions fine */}
                    <Button onClick={AnswerQ} variant="contained">Answer</Button>
                </Grid>
                <Grid id="answer-title-field" xs={12} sx={{ marginTop: '10px' }} style={{ display: 'none' }}>
                    <TextField
                        sx={{ width: '50%', maxWidth: '700px', }}
                        label="Answer Title"
                        variant="outlined"
                        onChange={getAnswerTitle}
                    ></TextField>
                </Grid>
                <Grid id="answer-main-field" xs={12} sx={{ marginTop: '20px', marginBottom: '20px' }} style={{ display: 'none' }}>
                    <TextField
                        sx={{ width: '50%', maxWidth: '700px', }}
                        label="Answer field"
                        multiline
                        // rows={5}
                        onChange={getAnswerText}
                    ></TextField>
                </Grid>
                <Grid id="answer-question-submit" xs={12} sx={{ marginBottom: '20px' }} style={{ display: "none" }}>
                    <Button onClick={addAnswer} variant="outlined">Submit</Button>
                    <Button onClick={CancelQ} sx={{ fontSize: '24px' }}><BiXCircle /></Button>
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
                <Grid>
                    {answers}
                </Grid>
                {/* If there are no answers, do the following: */}
                {answers ? renderAnswers : <p>No answers available yet.</p>}

            </div>
        </div>
    );
}

export default QuestionPage;