import React from 'react';

import "./About.css";

import profileImage from './profile-placeholder.png'

import Image from 'react-bootstrap/Image';


class About extends React.Component {
    render() {
        return (
            <div className="About">
                <h1>about</h1>
                <p>Currently, there is a lack of tools that can be used by writers to visualize the sentiment and emotions of their writing. The Sentimental Image was created to provide writers with a tool that allows them to easily visualize their writings with the help of machine learning. Our website is open to anyone who writes and is looking for ways to visualize the sentiment of their writing and as well as to machine learning enthusiasts.</p>
                <h1>algorithm</h1>
                <p>explain how our algorithm works</p>
                <h1>team</h1>
                <div className="row">
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="profileCard">
                            <Image width="100%" src={profileImage} ref="abstractImage" />
                            <h3>Name</h3>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <h1>contact</h1>
                <p>email:</p>
                <p>phone number:</p>
                <h1>additional resources</h1>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
        );
    }
}

export default About;
