import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class Question extends Component {
    render() {
        const { question, author } = this.props;
        return (

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {`/${question.author.avatarURL}`} />
  <Card.Body>
    <Card.Title>{question.author} asks...</Card.Title>
    <Card.Text>
    <div className="question-text">{question.optionOne.text}...</div>
    <div>OR</div>
    <div className="question-text">{question.optionTwo.text}...</div>

                        <Button className="btn-default">View Poll</Button>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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