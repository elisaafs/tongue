import React from "react";

function ProfilePicService({ image, name }) {
    return (
        <div className="img-wrapper">
            <img className="profile-pic-service" src={image} alt={name} />
        </div>
    );
}

export default ProfilePicService;
