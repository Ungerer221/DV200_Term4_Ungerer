import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

// CSS 
import './AnswerCard.css'

// MUI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { BiXCircle } from 'react-icons/bi';

// Axios import
import Axios from "axios";

const AnswerCards = (props) => {

    const [AnswerTitle, setAnswerTitle] = useState(props.title);
    const [AnswerText, setAnswerText] = useState(props.text);

    const [question, setQuestion] = useState({});


    const [username, setUsername] = useState();
    const [image, setImage] = useState();
    const navigate = useNavigate();

    // image useState 
    let isAdmin = false;

    const handleClick = () => {
        // sessionStorage.setItem('user', false);
        // sessionStorage.setItem('useID', props.user);
        const queryParams = new URLSearchParams();
        queryParams.append('userid', props.user);
        sessionStorage.setItem("UserIDQuestionPage", props.user);
        navigate(`/profile?${queryParams.toString()}`);
    }
    // Get specific user
    // put in a useEffect 
    useEffect(() => {
        Axios.get('http://localhost:5002/api/getUser/' + props.user)
            .then(res => {
                setUsername(res.data.username);
                setImage(res.data.image)
            })
            .catch(err => console.log(err))

        const serverURL = 'http://localhost:5002/images';
        const answerImg = `${serverURL}/${image}`;
    },[]);
    // ---
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    {/* Column 1 the user avatar */}
                    <Grid xs={2}>
                        <Grid xs={12}>
                            <Avatar sx={{ width: '110px', height: '110px', margin: 'auto' }}>
                                H
                                {/* <answerImg /> */}
                                {/* fix the undifined error try putting the img into a div or move cont out of useEffect */}
                                {/* <img src={answerImg} alt=''></img> */}
                            </Avatar>
                        </Grid>
                        <Grid xs={12}>
                            <Button onClick={handleClick}> {username} </Button>
                        </Grid>
                    </Grid>
                    {/* Column 2  */}

                    <Grid xs={8}>
                        <Grid>
                            <Grid>
                                <h1>{props.title}</h1>
                            </Grid>
                            <Grid>
                                <p>
                                    {props.text}
                                </p>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* colomn 3  */}
                    <Grid xs={2}>
                        {/* answer Delete Button  */}
                        {isAdmin && <Button variant="contained" sx={{ margin: "auto" }}> <BiXCircle /> Delete </Button>}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default AnswerCards