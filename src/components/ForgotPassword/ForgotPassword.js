import React, { useReducer, useState, useEffect } from 'react';
//import './components/ForgotPassword/ForgotPassword.scss';

//import './../SignIn/SignIn.scss';
//import './../ResetPasswordDialog/ResetPasswordDialog.scss';

//import ResetPasswordDialog from "../ResetPasswordDialog/ResetPasswordDialog";

//import './components/ForgotPassword/ForgotPassword.scss';

// get our fontawesome imports
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



    const formReducer = (state, event) => {
        if(event.reset) {
            return {
                username: '',
            }
        }
        return {
        ...state,
        [event.name]: event.value
    }
}

function ForgotPwForm() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
            //console.log(formData)   // you should be able to see your form data
        setSubmitting(true);

        

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000);
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }

/*
    function PutRequestSetHeaders() {
        const [postId, setPostId] = useState(null);
    
        useEffect(() => {
            // PUT request using fetch with set headers
            const requestOptions = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer my-token',
                    'My-Custom-Header': 'foobar'
                },
                body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
            };
            fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
                .then(response => response.json())
                .then(data => setPostId(data.id));
        }, []);
    */

    return (
        <div className="SignIn.ModalDialog">
        <div className="resetPwForm">
            <h1>Please enter you details. An email will be sent to your registered email address with the information.</h1>
            {submitting &&
            <div>
                You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([username, value]) => (
                        <li key={username}><strong>{username}</strong>:{value.toString()}</li>
                    ))}
                </ul>
            </div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <label>
                        {/*<i className="fas fa-user"> </i>*/}
                        <FontAwesomeIcon icon={faUser} />
                        <input name="username" className="Input" placeholder="Username / Email" onChange={handleChange} value={formData.username || ''} />
                    </label>
                </fieldset>
                <button type="submit" className="ResetMyPasswordBtn" disabled={submitting}>send my info</button>
            </form>

          
                <h4>SEND TO INFO:</h4>
                <p>
                https://nakedswordcash.com/signup/password.php?siteid=22              setting name="NATS.ServerUrl"
                value="[https://nakedswordcash.com](https://nakedswordcash.nakedsword.com/)"
                setting name="NATS.ResetPasswordUrl" value="/signup/password.php?siteid=[NATS.SiteID]" setting name="NATS.SignUpUrl" value="/signup/signup.php"
            </p>
        </div>
        </div>
    )
}

export default ForgotPwForm;