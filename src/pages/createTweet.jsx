
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from "../config";
// import { Client, auth } from "twitter-api-sdk";

function MyForm() {
    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        axios.post(`${config.BASE_URL}/tweets`, {
            text: inputs.description
        })
            .then(function (response) {
                console.log(response);
                setInputs({});
                navigate('/tweets')
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div style={{ display: 'flex', height: '75vh', flexFlow: 'column', justifyContent: 'center', fontWeight: 'bold' }}>
            <div className="box">
                <FloatingLabel controlId="floatingTextarea2" label="Tweet....">
                    <Form.Control
                        as="textarea"
                        placeholder="Share what are you thinking about"
                        style={{ height: '100px' }}
                        name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <Button variant="primary" type="submit" onClick={handleSubmit} style={{ margin: '12px' }} >
                    <b> Tweet</b>
                </Button>
            </div>
        </div>
    )
}
export default MyForm;