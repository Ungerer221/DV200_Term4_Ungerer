import React, { useState, useEffect } from "react"
import "./ProfileCard.css"

// MUI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Axios from "axios";

const ProfileCard = (props) => {

    const [updateProfile, setUpdateProfile] = useState();

    const update = (e) => {
        document.getElementById("default").style.display = 'none'
        document.getElementById("update-user-profile").style.display = 'block'
    }
    const serverURL = 'http://localhost:5002/images';
    const imageURL = `${serverURL}/${props.image}`;

    // total likes and dislikes
    const [totalLike, setTotalLike] = useState(0);
    const [totalDislikes, setTotalDislikes] = useState(0);

    function addTotalLike(Amount) {
        setTotalLike(totalLike + Amount);
    };

    function addTotalDislike(Amount) {
        setTotalDislikes(totalDislikes + Amount);
    };

    useEffect(() => {

        Axios.get('http://localhost:5002/api/like_get_all/')
            .then((res) => {
                // --Gather all liked questions and set them to the variable here
                let questions = res.data;
                console.log(questions);

                // variable to count the amount of likes and dislikes
                let iLikes = 0;
                let iDislikes = 0;

                // Count how many likes there are
                for (let k = 0; k < questions.length; k++) {
                    if (questions[k].userID === props.id) {
                        switch (questions[k].type) {
                            case "like":
                                console.log('Found Like');
                                iLikes++;
                                break;

                            case "dislike":
                                iDislikes++;
                                console.log('Found Dislike');
                                break;

                            case "none":
                                break;
                        }
                    }
                }

                addTotalLike(iLikes);
                addTotalDislike(iDislikes);

            })
            .catch((err) => {
                console.error(`Error fetching user data: ${err.message}`);
            });
    }, []);

    return (
        <>
            <div className="profilecard-container" style={{ display: 'block' }} id='default'>
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2}>
                        <img src={imageURL} className="question_img"></img>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <div className="profilecard-userInfo-con">
                            <div>
                                <h1 style={{ marginTop: 0 }} > {props.username} </h1>
                                <h3>ID Number: {props.id} </h3>
                                <p className="interests-text">Interests:</p>
                                <div className="userInfo-tags">
                                    <button>javascript</button>
                                    <button>CSS</button>
                                    <button>HTML</button>
                                    <button className="userInfo-tags-add">+</button>
                                </div>
                            </div>
                            <div className="profilecard-stats">
                                {/* asked */}
                                <div className="profilecard-stats-asked">
                                    <p>Questions Asked: </p>
                                    <p>00</p>
                                </div>
                                {/* answered  */}
                                <div className="profilecard-stats-answered">
                                    <p>Questions Answered: </p>
                                    <p>00</p>
                                </div>
                                {/* likes  */}
                                <div className="profilecard-stats-likes">
                                    <p>Likes: {totalLike}</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Button onClick={update} className="profilecard-Logout-btn" variant="outlined" sx={{ color: 'orange', border: "solid 1px orange" }}>Update</Button>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default ProfileCard