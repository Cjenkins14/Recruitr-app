import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';



class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <main role="main">
                    <header role="banner">
                        <h1>Recruitr</h1>
                    </header>

                    <section>
                        <h2>Streamline your recruiters workflow</h2>
                        <p>Recruitr is designed to streamline the workflow for college sports recruiters.
                            Tracking the stats, information, and evaluations of prospective players can now
                            be done with one cohesive tool that also allows sharing that information between
                            all the important members of your staff.</p>
                    </section>

                    <section>
                        <h2>Create profiles</h2>
                        <p>Recruitr allows you to create and store profiles for players of various sports along
                            with the evaluation of that player and  information pertinent to the recruiting process.</p>
                    </section>

                    <section>
                        <h2>Share profiles</h2>
                        <p>Sharing prospective players information has never been easier with an interface that
                            allows all of the members of your staff to view the profiles of players that each recruiter
                            has seen potential in.</p>
                    </section>

                    <section>
                        <h2>Discuss your evaluations</h2>
                        <p>Recruitr allows other members of the staff to comment on the profile of the prospective
                            player and discuss what one recruiter may have noticed that another did not, as well as
                            how to proceed with the prospect.</p>
                    </section>

                    <section>
                        <h2>Get Recruiting!</h2>
                        <form className="signup-form">
                            <ul className="input-list">
                                <li>
                                    <label htmlFor='first-name'>First name</label>
                                    <input type='text' id='first-name' required />
                                </li>

                                <li>
                                    <label htmlFor='last-name'>Last name</label>
                                    <input type='text' id='last-name' required />
                                </li>

                                <li>
                                    <label htmlFor='school-name'>School Name</label>
                                    <input type='text' id='school-name' required />
                                </li>

                                <li>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' id='email' required />
                                </li>

                                <li>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' id='password' required />
                                </li>
                            </ul>


                        </form>
                        <button type="submit">Sign up</button>

                        <p>
                            or <br />
                            <button>
                                <Link to='/main'>
                                    Demo
                                    </Link>
                            </button>
                        </p>
                    </section>
                </main>
            </div>
        )
    }
}

export default Landing;