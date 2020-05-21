import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Label } from '../atoms/Input';
import { theme } from '../../themes/StylesVariables';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

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

const LogIn = ({ toggle, login }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const { email, password } = formData;
    const handleSubmit = e => {
        e.preventDefault();
        login(email, password);
    }

    return ( 
        <Wrapper>
            <Form onSubmit={e => handleSubmit(e)}>
                <Title>Log in to StudyShelf</Title>
                <Label>email</Label>
                <Input type="email" name="email" value={email} onChange={e => handleChange(e)} required/>
                <Label>password</Label>
                <Input type='password' name='password' value={password} onChange={e => handleChange(e)} required/>
                <Button>Log in</Button>
            </Form>
            <ChangeModeBtn onClick={toggle}>SignUp</ChangeModeBtn>
        </Wrapper>
    );
}
 
export default connect(null, { login })(LogIn);