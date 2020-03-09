import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Question extends Component {
    render() {
        const { question, author } = this.props;
        
        return (

            <Card style={{ width: '40vw' }}>
            <Card.Img variant="top" src={`/${author.avatarURL}`} />
            <Card.Body>
              <Card.Title>Would You Rather?</Card.Title>
              <Card.Text>
              <div className="question-text">{question.optionOne.text}...</div>
              OR
              <div className="question-text">{question.optionTwo.text}...</div>
              </Card.Text>
              <Button variant="primary">View Poll</Button>
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
