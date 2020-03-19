import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className='login-page'>
                <main role="main">
                    <h1>Recruitr</h1>
                    <h2>Login</h2>

                    <section className="login-form">
                        <form>
                            <ul className="input-list">
                                <li>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" required autoFocus />
                                </li>
                                <li>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" required />
                                </li>
                                <button type="submit">Login</button>
                                <button>
                                    <Link to='/main'>
                                        Demo
                                    </Link>
                                </button>
                            </ul>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}

export default Login;