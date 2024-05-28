// function Signin() {
//     return "Hello, Signin"

// }

// export default Signin;
import React from 'react';
import Header from '../Header';
import firebase from '../utils/firebase';
// import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'firebase/auth'



// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar'; 
import { Menu, Form, Container } from 'semantic-ui-react'

const Signin = () => {
    // const history = useHistory();
    const navigate = useNavigate();
    const [ activeItem, setActiveItem ] = React.useState('register');
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    function onSubmit() {
        if (activeItem === 'register') {
            firebase.auth().createUserWithEmailAndPassword(email, password).them( () => {
                // history.push("/")
                navigate('/');
            });
        }
        else if (activeItem === 'signin') {
            firebase.auth().signInWithEmailAndPassword(email, password).them( () => {
                // history.push("/")
                navigate('/');
            });
        }
    }

    return (
        // <div>
        //     Signin
        // </div>
        
        <Container>
            <Header/>
            <Menu widths="2">
                <Menu.Item active = {activeItem == 'register'} onClick={() => setActiveItem("register")}>註冊</Menu.Item>
                <Menu.Item active = {activeItem == 'signin'} onClick={() => setActiveItem("signin")}>登入</Menu.Item>
            </Menu>
            <Form onSubmit={onSubmit} >
                <Form.Input label="信箱" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="請輸入信箱"/>
                <Form.Input label="密碼" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="請輸入密碼" type = "password" />
                <Form.Button>
                {activeItem === 'register' && '註冊'}
                {activeItem === 'signin' && '登入'}
                </Form.Button>
            </Form>
        </Container>

    );
}

export default Signin