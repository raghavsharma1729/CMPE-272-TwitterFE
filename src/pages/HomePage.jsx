import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { config } from '../config';
import axios from 'axios';

/**
 * Author: Nohar Reddy Gurrala <noharreddy.gurrala@sjsu.edu>
*/

const Home = () => {
    const navigate = useNavigate();
    const createTweet = () => {
        axios.get(`${config.BASE_URL}/login`, {
        })
            .then(function (response) {
                window.location.replace(response.data);


            })
            .catch(function (error) {
            });

    }
    const seeTweets = () => {
        navigate('/tweets');
    }
    return (
        <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center' }}>
            <Row>
                <Col><Image src='../../twitter-icon.png' fluid style={{ height: '100%' }} /></Col>
                <Col>
                    <div style={{ textAlign: 'left' }}>
                        <h3>
                            Tweet and share what you feel
                        </h3>
                        <h3> Follow the poeple you like:<br />
                            * See what they think  <br />
                            * See where they are going <br />
                            * Tag companies and request for companies<br />
                        </h3>
                        <Button variant="primary" style={{ padding: '12px', margin: '12px' }} onClick={createTweet}><b>Go Tweet</b></Button>
                        <Button variant="primary" style={{ padding: '12px', margin: '12px' }} onClick={seeTweets}><b>See Tweets</b></Button>
                    </div>
                </Col>
            </Row>
        </div>);
};

export default Home;
