import React, { Component } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import NavBar from '../Nav/Nav'
import ApiContext from '../ApiContext'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            schools: this.props.schools
        }
    }

    static contextType = ApiContext

    renderSchools() {
        const schools = this.context.schools
        return Object.values(schools).map(school => (
            <li>
                <Link to={`/schoolmain/${school.id}`}>
                    <button className='school-button'>
                        {school.name}
                    </button>
                </Link>

            </li>
        )

        )
    }

    render() {
        return (
            <div className='main-page'>
                <NavBar history={this.props.history} />
                <main role="main">
                    <header role="banner">
                        <h1 className='school-select'>Select a school</h1>
                    </header>
                    <section className="schools">
                        <ul className="school-list">
                            {this.renderSchools()}
                        </ul>
                    </section>
                    <Link to='/addschool'>
                        <button className='add-button'>Add</button>
                    </Link>
                </main>
            </div>
        )
    }
}

export default Main;