import React from 'react'
import "../styles.css"
import { API } from '../backend'
import Base from '../core/Base'

const Home = () => {
    return (
        <Base title="Home Page" description="Welcome to MyStore">
            <div className="row">
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success">TEST</button>
                </div>
            </div>
        </Base>
    )
}

export default Home