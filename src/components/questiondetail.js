import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddAnswer,  } from '../actions/questions'
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

class QuestionDetail extends Component {
    state = {
        selectedAnswer: ''
    }
    handleSaveAnswer(e) {
        e.preventDefault()

        const { dispatch, authedUser, id  } = this.props
        const { selectedAnswer } = this.state
    
        dispatch(handleAddAnswer({
          qid:id,
          authedUser,
          answer: selectedAnswer,
        }))
    }
    chooseAnswer(answer) {
        this.setState((prevState) => {
            return {selectedAnswer: answer}
        })
    }
    render() {
        const { question, author, answered, answer, votesOptionOne, votesOptionTwo, totalVotes, percentageOptionOne, percentageOptionTwo } = this.props;
        const { selectedAnswer } = this.state;

        if (!question) {
            return <Redirect to="/notfound"/>
        }

        return (
            <div className={answered ? 'tile-item question-detail' : 'tile-item'}>
            {answered ? (
                    <div className="tile-header">Asked by {author.name}</div>
                ) : (
                    <div className="tile-header">{author.name} wants to know...</div>
                )}
                <div className="tile-body">
                    <div className="tile-left">
                        <img alt="avatar" className="avatar" src= {author.avatarURL} />
                    </div>
                    
                    {!answered ? (
                        <Card>
                            <div className="would-you">Would you rather</div>
                            <Button className={selectedAnswer === 'optionOne' ? 'option option-selected' : 'option'} 
                            onClick={(e) => { this.chooseAnswer('optionOne')}}>{question.optionOne.text}</Button>

                            <Button className={selectedAnswer === 'optionTwo' ? 'option option-selected' : 'option'}
                             onClick={(e) => { this.chooseAnswer('optionTwo')}}>{question.optionTwo.text}</Button>

{selectedAnswer ?
                            (<Button className={ selectedAnswer ? 'btn-default' : 'disabled'} 
                            onClick={(e) => {this.handleSaveAnswer(e)}}>Is that your final answer? Click here</Button>):
                            (<div>Make your pick!</div>)}
                        </Card>
                    ): (
                        <Card>
                            <div className="would-you">Results: </div>
                            <div className={answer === 'optionOne' ? 'option-container selected': 'option-container'}>
                                <div className="option-one">{question.optionOne.text}</div>

                                <Alert>
                                    <div>{votesOptionOne} out of {totalVotes} votes</div>
                                    <div>Percentage votes: {percentageOptionOne}%</div>
                               
                               
                                </Alert>
                             </div>
                            <div className={answer === 'optionTwo' ? 'option-container selected': 'option-container'}>
                                <div className="option-two">{question.optionTwo.text}</div>

                                <Alert>
                                    <div>{votesOptionTwo} out of {totalVotes} votes</div>
                                    <div>Percentage votes: {percentageOptionTwo}%</div>
                                   
                                </Alert>
                                {selectedAnswer ? (<Alert>
                                <div className="your-vote">Your pick is {this.state.selectedAnswer} </div> 
                                </Alert>
                                ): ( <div> You picked {answer} </div>)}
                                
                                <Link to="/dashboard"> 
                                <Button>Return to Dashboard</Button>
                                </Link>
                                
                          </div>
                        </Card>
                    )}
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { match }) {
    const { id } = match.params
    const question = questions[id]
    const author = question ? users[question.author] : null
    const answered = question ? (question.optionOne.votes.indexOf(authedUser) > -1 || question.optionTwo.votes.indexOf(authedUser) > -1) : false
    const votesOptionOne = (question && question.optionOne.votes) ? question.optionOne.votes.length : 0
    const votesOptionTwo = (question && question.optionTwo.votes) ? question.optionTwo.votes.length : 0
    const totalVotes = votesOptionOne + votesOptionTwo
    const percentageOptionOne = ((votesOptionOne / totalVotes) * 100).toFixed(1)
    const percentageOptionTwo = ((votesOptionTwo / totalVotes) * 100).toFixed(1)

   
    const answer = users[authedUser].answers[question.id]
  
    return {
        id,
        authedUser,
        question,
        author,
        answered,
        answer,
        votesOptionOne,
        votesOptionTwo,
        totalVotes,
        percentageOptionOne,
        percentageOptionTwo
    }
}

export default connect(mapStateToProps)(QuestionDetail);


