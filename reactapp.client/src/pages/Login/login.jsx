import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = async () => {
        setEmailError('')
        setPasswordError('')

        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        //if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        //    setEmailError('Please enter a valid email')
        //    return
        //}

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        //if (password.length < 7) {
        //    setPasswordError('The password must be 8 characters or longer')
        //    return
        //}

        // Call the server API for authentication
        try {
            const response = await fetch('https://localhost:7053/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: email, password: password })
            })

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                navigate('/home'); // redirect to home page
            } else {
                const errorData = await response.json();
                if (errorData.errors) {
                    if (errorData.errors.Email) {
                        setEmailError(errorData.errors.Email[0]);
                    }
                    if (errorData.errors.Password) {
                        setPasswordError(errorData.errors.Password[0]);
                    }
                }
            }
        } catch (error) {
            console.error('Login error:', error)
        }

    }

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <br />

            <div className={'inputContainer'}>
                <input
                    value={email}
                    placeholder="Enter your email here"
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
            </div>
        </div>
    )
}

export default Login