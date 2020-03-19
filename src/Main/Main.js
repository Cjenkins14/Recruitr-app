import React, { Component } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import NavBar from '../Nav/Nav'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: this.props.schools
        }
    }
    renderSchools() {
        const schools = this.state.schools
        return Object.values(schools).map(school => (
            <li>
                <Link to={`/schoolmain/${school.id}`}>
                    {school.name}
                </Link>
            </li>
        )

        )
    }

    render() {
        return (
            <div className='main-page'>
                <NavBar />
                <main role="main">
                    <header role="banner">
                        <h1>Select a school</h1>
                    </header>
                    <section className="prospects">
                        <ul className="prospect-list">
                            {this.renderSchools()}
                        </ul>
                    </section>
                    <Link to='/addschool'>
                        <button>Add</button>
                    </Link>
                </main>
            </div>
        )
    }
}

export default Main;