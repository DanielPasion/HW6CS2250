import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import axios from "axios";
import { Link} from "react-router-dom";

export default function Api(){

    const [nameAge,setNameAge] = useState([]);
    let arrayData = []
    
    const onClick= (data => {
        let url = "https://api.agify.io/?name=" + data.firstName;
        axios.get(url).then((response) => {
            arrayData.push(response.data.name)
            arrayData.push(response.data.age)
            setNameAge(arrayData)
        });

    })
    return(<div>
        <h1>Age Guesser</h1>
        <h2>This App Will Have you enter your first name, and based off your name we will guess your age</h2>
        <Formik initialValues={{firstName: ""}} onSubmit={onClick}>
            <Form>
                <label>Put First Name ONLY</label>
                <Field name="firstName" placeholder="Ex: Prometheus" />
                <button type="submit">Check Age</button>
            </Form>
        </Formik>
        <div>Our Prediction is: {nameAge[1]} </div>
        <Link to="/">Go to Home</Link>
        <br></br>
        <Link to="../Tictactoe">Go To Tic Tac Toe</Link>

    </div>)
}