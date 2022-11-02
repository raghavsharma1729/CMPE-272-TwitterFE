import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/**
 * Author: Rama Sai Gurunadh Dara <ramasaigurunadh.dara@sjsu.edu>
*/
const FileTile = ({ id, authorId, description }) => {

    const navigate = useNavigate();

    const removeFile = () => {
        axios.delete(`http://localhost:8000/tweets/${id}`, {
        })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <tr style={{ border: "1px solid" }}>
            <td>{authorId}</td>
            <td>{description}</td>
            <td><Button variant="danger" onClick={removeFile}>Remove</Button></td>
        </tr>
    );
}

export default FileTile;