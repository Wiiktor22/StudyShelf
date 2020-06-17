import React, { useState } from 'react';
import exitIcon from '../../assets/exit.png';
import { Wrapper, ExitButton, FlexWrapper, Header, Label, Input, Select } from '../../components/molecules/AddFormCopmonents';
import Button from '../atoms/Button';
import { connect } from 'react-redux';
import { addNewLink } from '../../redux/actions/userData';
 
const AddNewSite = ({ switchForm, isOpen, addNewLink }) => {
    const initialState = {
        link: '',
        title: '',
        category: 'article'
    }
    const [newLink, setNewLink] = useState(initialState);
    const handleChange = e => setNewLink({
        ...newLink,
        [e.target.id]: e.target.value
    })
    const handleSubmit = e => {
        e.preventDefault();
        addNewLink(newLink);
        setNewLink(initialState);
        switchForm();
    }
    
    return ( 
        <Wrapper isOpen={isOpen}>
            <ExitButton src={exitIcon} onClick={switchForm}/>
            <FlexWrapper>
                <Header>create new link</Header>
                <Label htmlfor="link">link</Label>
                <Input type="text" id="link" required onChange={e => handleChange(e)} value={newLink.link}/>
                <Label htmlfor="title">title</Label>
                <Input type="text" id="title" required onChange={e => handleChange(e)} value={newLink.title}/>
                <Label htmlfor="category">category</Label>
                <Select id="category" value={newLink.category} onChange={e => handleChange(e)} required>
                    <option value="article">article</option>
                    <option value="e-book">e-book</option>
                    <option value="website">website</option>
                    <option value="other">other</option>
                </Select>
                <Button notes onClick={e => handleSubmit(e)}>create new link</Button>
            </FlexWrapper>
        </Wrapper>    
    );
}
 
export default connect(null, { addNewLink })(AddNewSite);