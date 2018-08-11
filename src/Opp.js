import React, { Component } from "react";
import axios from "./axios";
import ProfilePicOPP from "./ProfilePicOPP";
import translations from "./translations";

class Opp extends Component {
    constructor(props) {
        super(props);
        this.state = { id: this.props.match.params.id };
    }

    componentDidMount() {
        axios
            .get("/user/" + this.props.match.params.id + ".json")
            .then(({ data }) => {
                if (data.redirect) {
                    this.props.history.push("/");
                } else {
                    this.setState({
                        languageSpeak: data.data.language_speak || "",
                        id: data.data.id,
                        city: data.data.city || "",
                        country: data.data.country || "",
                        first_name: data.data.first_name,
                        last_name: data.data.last_name,
                        profile_pic: data.data.profile_pic || "/default.png"
                    });
                }
            });
    }
    render() {
        const {
            first_name,
            last_name,
            profile_pic,
            country,
            language_speak,
            city
        } = this.state;
        const { language } = this.props;
        return (
            <div id="other-persons">
                <div className="big-wrapper">
                    <div className="wrapper-relative">
                        <ProfilePicOPP
                            image={profile_pic}
                            first={first_name}
                            last={last_name}
                        />
                    </div>
                    <div className="wrapper-friendsof">
                        <div className="wrapper-bio">
                            <div className="profile-intro-opp">
                                {translations.PROFILE[language]}
                            </div>
                            <div className="linha" />
                            <div className="bio-opp">{city}</div>
                            <div className="bio-opp">{country}</div>
                            <div className="bio-opp">{language_speak}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Opp;