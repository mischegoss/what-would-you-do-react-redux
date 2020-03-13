import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from  '../actions/questions'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink} from 'react-router-dom'

class AddQuestion extends Component {	

 
        state = {      
            optionOneText:'',
            optionTwoText:'',
        };
    
        handleInputChange = (event, type) => {
            const value = event.target.value;
    
            this.setState((state) => {
                return type === 'option1' ? {...state, optionOneText: value} : {...state, optionTwoText: value}
            })

            
        }
    
        handleSubmit = (event) => {   
            event.preventDefault();
    
            const { dispatch } = this.props
            const { optionOneText, optionTwoText} = this.state   
        
            dispatch(handleAddQuestion(
                  optionOneText,
                  optionTwoText
            ))
    
            this.setState({
                optionOneText:'',
                optionTwoText:''
              })
          }
     

 
	render() {

		return (
            

           <Card>

            <Form onSubmit={this.handleSubmit}>

            <div> Create New Question </div>
            <div> Would You Rather... </div>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Option One</Form.Label>
              <Form.Control
               type="text"
               placeholder="Enter Option One"
               name="optionOneText"
               value={this.state.optionOneText}
               onChange={(event) => this.handleInputChange(event, 'option1')} />

            </Form.Group>

            <div> OR </div>
            
            <Form.Group controlId="formBasicPassword">
            <Form.Label>Option Two</Form.Label>
            <Form.Control
             type="text"
             placeholder="Enter Option Two"
             name="optionTwoText"
             value={this.state.optionTwoText}
             onChange={(event) => this.handleInputChange(event, 'option2')} />

             </Form.Group>
             <NavLink to="/dashboard">
             <Button variant="primary" type="submit">
    Submit
  </Button>
  </NavLink >
          </Form>

        




</Card>


			
  		)
	}
}

export default connect()(AddQuestion);