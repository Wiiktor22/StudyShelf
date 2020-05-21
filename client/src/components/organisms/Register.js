import React, { useState } from 'react';
import styled from 'styled-components';
import { Label, Input } from '../atoms/Input';
import Button from '../atoms/Button';
import { theme } from '../../themes/StylesVariables';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';
import { createUserData } from '../../redux/actions/userData';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    animation: .5s show linear;

    @keyframes show {
        from {
            transform: scale(.7);
        } to {
            transform: scale(1);
        }
    }
`;

const Title = styled.h3`
    color: ${theme.main};
    font-size: 3rem;
    margin-bottom: 5vh;
    font-family: 'Fredoka One', cursive;
`;

const ChangeModeBtn = styled.button`
    position: absolute;
    top: 3vh;
    right: 3vw;
    color: ${theme.main};
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    font-weight: 600;
`;

const SignUp = ({ toggle, register, createUserData }) => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, lastName, email, password, password2 } = formData;
    const handleChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const handleSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Error, passwords do not match');
        } else {
            register({ name, lastName, email, password });
        }
    }
    
    return ( 
        <Wrapper>
            <Form onSubmit={e => handleSubmit(e)}>
                <Title>Sign up to StudyShelf</Title>
                <Label>name</Label>
                <Input type='name' name='name' value={name} onChange={e => handleChange(e)} required/>
                <Label>last name</Label>
                <Input type='name' name='lastName' value={lastName} onChange={e => handleChange(e)} required/>
                <Label>email</Label>
                <Input type='email' name='email' value={email} onChange={e => handleChange(e)} required/>
                <Label>password</Label>
                <Input type='password' name='password' value={password} onChange={e => handleChange(e)} required />
                <Label>confirm password</Label>
                <Input type='password' name='password2' value={password2} onChange={e => handleChange(e)} required/>
                <Button>Sign up</Button>
            </Form>
            <ChangeModeBtn onClick={toggle}>Log in</ChangeModeBtn>
        </Wrapper>
    );
}
 
export default connect(null, { register, createUserData })(SignUp);