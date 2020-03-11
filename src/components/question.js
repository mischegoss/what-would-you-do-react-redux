import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Question extends Component {
    render() {
        const { question} = this.props;
      
        
        return (

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {`https://api.adorable.io/avatars/200/${question.author}.png`} />
  <Card.Body>
    <Card.Title>{question.author} asks...</Card.Title>
    <Card.Title>WOULD YOU RATHER...</Card.Title>
    <Card.Text>
    <div className="question-text">{question.optionOne.text}...</div>
    

                        <Button className="btn-default">Vote/View Poll</Button>
    </Card.Text>
   
  </Card.Body>
</Card>







        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    const author = question ? users[question.author] : null

   
  
    return {
        authedUser,
        question,
        author
    }
}

export default connect(mapStateToProps)(Question);