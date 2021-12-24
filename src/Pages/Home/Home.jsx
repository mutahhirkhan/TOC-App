import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Components/Button/Button";
import Category from '../Category/Category';
import "./Home.css"


const Home = () => {
    return (
        <div className="home">
                <div className="homeLeft center">
                    <div className="text">
                        <h1>Fashion Trends</h1>
                        <p><br></br>Get our latest 2021 Collection</p>
                        <Button type="submit" style={{ marginTop: "2em", width: "80%" }}>Shop Now</Button>
                    </div>
                    
                </div>
                <div className="homeRight center">
                    
                </div>
        </div>
    )
}

export default Home
