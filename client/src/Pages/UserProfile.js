import React from "react";

// components 
import ProfileCard from '../Components/ProfileCard.jsx';
import AskedQuestionsCard from "../Components/AskedQuestionsCard.jsx";

// CSS 
import './UserProfile.css'

function Profile() {
    return (

        <div className="Profile-main-container">
            <ProfileCard />

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