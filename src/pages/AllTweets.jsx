import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import FileRow from '../component/FileRow';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from '../config';
import { TableHead } from '../component/TableHead';

/**
 * Author: Sakshi Kekre <sakshisanjay.kekre@sjsu.edu>
*/

const AllTweets = () => {
    const [tweets, setFile] = useState();
    const navigate = useNavigate();

    const fetchTweets = () => {
        axios.get(`${config.BASE_URL}/tweets`,)
            .then(function (response) {
                setFile(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {

                console.log(error);
            });
    };

    useEffect(() => {
        fetchTweets();
    }, []);

    return (
        <div style={{ padding: "24px 0px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "24px 0px" }}>
                <div>
                    <h4>Hi There here is a list of tweets</h4>
                </div>
                <div>
                    <Button><b>SignOut</b></Button>
                </div>
            </div>
            <Table striped bordered hover style={{ background: "antiquewhite" }}>
                <TableHead />
                <tbody>
                    {
                        tweets?.map((tweet, i) => (
                            <FileRow
                                key={tweet.id + i}
                                id={tweet.id}
                                authorId={tweet.author_id}
                                description={tweet.text}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default AllTweets;
