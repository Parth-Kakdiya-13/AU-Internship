import React from "react";
import classes from './goals.module.css';
import codingImage from '../assets/coding.png';

const Goals = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                Meet your goals with tailored
                <span style={{ color: "orangered" }}> Tracks</span>
            </div>
            <div className={classes.secondary}>
                Forget the one-size-fits-all approach
            </div>

            <div className={classes.info}>
                <div className={classes.emoji}>
                    <img className={classes.im1} src={codingImage} alt="Coding" />
                </div>
                <div className={classes.details}>
                    <span className={classes.title}>
                        For <span style={{ color: "orangered" }}>Job Seekers</span>
                    </span>
                    <br />
                    <span className={classes.subTitle}>
                        Get a job in gen-AI
                    </span>
                    <br />
                    <br />
                    <span className={classes.description}>
                        Build a killer portfolio of Gen-AI products. Get personalised
                        mentoring on interview <br />
                        prep and resume building. Land your dream GenAI job.
                    </span>
                    <br />
                    <br />
                    <hr className={classes.dashed} />
                    <br />
                    <svg
                        className={classes.icon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span style={{ color: "orangered" }}>Learn the skills</span>

                    <svg
                        className={classes.icon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span style={{ color: "orangered" }}>Prep for interviews</span>

                    <svg
                        className={classes.icon}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span style={{ color: "orangered" }}>Get hired</span>
                </div>
            </div>
        </div>
    );
};

export default Goals;
