import React, { useState } from "react";


import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import axios from "axios";

// components 
import ProfileCard from '../Components/ProfileCard.jsx';
import AskedQuestionsCard from "../Components/AskedQuestionsCard.jsx";

// CSS 
import './UserProfile.css'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



function Profile() {

    // const [Image, setImage] = useState();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [image, setImage] = useState();


    const getImage = (e) => {
        let imageFile = e.target.files[0];
        console.log(imageFile);
        setImage(imageFile);

        // let reader = new FileReader();
        // reader.onload = () => {
        //     let output = document.getElementById('preview');
        //     output.src = reader.result;
        // };
        // reader.readAsDataURL(e.target.files[0]);
    };

    const save = (e) => {

        // Get all users to find who is currently logged in 
        axios.get('http://localhost:5002/api/getUsers')
            .then((res) => {

                // The response is an array of all the users
                let users = res.data;

                // get who is currently signed in
                let email = sessionStorage.getItem('email');

                // Gather the user ID of who is currently logged in based on which email matches the one in the DB
                for (let k = 0; k < users.length; k++) {
                    if (users[k].email === email) {
                        sessionStorage.setItem('userID', users[k]._id);
                    }
                }
            })

        const updateUser = new FormData()

        let details = {
            username: userName,
            email: email
        }
        updateUser.append('details', JSON.stringify(details));
        updateUser.append('imageUp', image);

        axios.put('http://localhst:5002/api/updateuser/' + sessionStorage.getItem('userID'), updateUser)
            .then(() => {
                document.getElementById("default").style.display = 'block';
                document.getElementById("update-user-profile").style.display = 'none';
            })
            .catch((err) => {
                console.log("error", err)
            })
    }

    return (

        <div className="Profile-main-container">
            <ProfileCard />
            {/* input card for updating user info  */}
            <div className="profile-update-card" style={{ display: 'none' }} id='update-user-profile'>
                <Grid container spacing={0}>
                    {/* col 1 */}
                    <Grid xs={2}>
                        {/* image upload goes here */}
                        <image />
                        <Button component="label" variant="outlined" sx={{ color: '#FF3F00', borderColor: '#FF3F00' }} >
                            Upload Image
                            <VisuallyHiddenInput type="file" onChange={getImage} />
                        </Button>
                    </Grid>
                    {/* col 2  */}
                    <Grid xs={6}>
                        <div className="profilecard-userInfo-con">
                            <div>
                                {/* <h1 style={{ marginTop: 0 }}>User Name & Surname</h1> */}
                                {/* <input name="username" type="text" placeholder="enter new username" className="update-profile-username-input"></input> */}
                                <Grid container>
                                    {/* //default text should be curent information */}
                                    <TextField id="Username" label={userName} variant="outlined" onChange={(e) => setUserName(e.target.value)} ></TextField>
                                    <TextField id="Email" label={email} variant="outlined" sx={{ marginLeft: '10px' }} onChange={(e) => setEmail(e.target.value)} ></TextField>
                                </Grid>

                                <h3>ID Number: 000 000 0000</h3>
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
                                    <p>Likes: 00</p>
                                    {/* <p> 00</p> */}
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* col 3 */}
                    <Grid xs={4}>
                        <Button onClick={save} variant="outlined" sx={{ color: 'orange', border: "solid 1px orange" }}>Save</Button>
                    </Grid>
                </Grid>
            </div>

            <h1 className="prev-asked-questions-title">Previously Asked Questions</h1>

            <div className="prev-asked-questions-card-con">
                <AskedQuestionsCard />
                <AskedQuestionsCard />
                <AskedQuestionsCard />
                <AskedQuestionsCard />
                <AskedQuestionsCard />
            </div>

        </div>

    )
}
export default Profile;