import React from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Components/Button/Button";
import Category from '../Category/Category';
import "./Home.css"
import history from './../../History/history';

const Home = () => {
    const click = () => history.push("/categories")
    
    return (
        <div class="page2">
            <div></div>
            <div class="About">
                <div class="About-text">
                    <div class="About-gap"></div>
                    <div class="About-head">
                        <h3>Read Our Story </h3>
                        <h1>We have been selling <br /> the important Brand since 1999</h1>
                    </div>
                    <div class="About-para">
                        <p>Ecommerce content marketing sounds good in theory – but few sites do it well.
                            Loads of ecommerce sites will put up a blog, write a company update once in a while and call it a day.
                        </p>
                        <div>
                        {/* <Button
                        onClick={() =>
                            openModal({ modalType: "addressFormModal", modalProps: { orderId } })
                        }
                        style={{
                            justifySelf: "end", background: 'rgb(0,0,0,0.5)',borderRadius:'15px',
                            cursor: 'pointer'
                        }}>
                        Proceed & Pay</Button> */}
                        <Button type="submit"  color='#fff' style={{marginLeft:'24px',marginTop:'25px', padding: '8px 30px'}} onClick={click}>Shop Now</Button>
                        </div>
                    </div>
                </div>
                <div class="About-img"></div>
            </div>
            <div></div>
        </div>
    )
}

export default Home
