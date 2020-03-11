import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Question from './question'


class QuestionBoard extends Component {
   
    
    state = {
        showAnswered: false
    }
    filterQuestions = (showAnswered) => {
        this.setState((state) => {
            return { showAnswered: showAnswered }
        })
        
    }


   

    render() {
        
        const { showAnswered } = this.state;
        const { questions, authedUser } = this.props
        const questionsArray = Object.values(questions)
        const filteredQuestions = questionsArray.filter(function(question) {
            const contains = (
                question.optionOne.votes.indexOf(authedUser) > -1 ||
                question.optionTwo.votes.indexOf(authedUser) > -1
            );
            return showAnswered ? contains : !contains;
        });
        const sortedQuestions = filteredQuestions.sort((a, b) => b.timestamp - a.timestamp);


        
        return (
            <div>
                <div className="btn-group">
                    <Button className={ !showAnswered ? 'btn-selected' : 'btn-default'} onClick={(e) => 
                        this.filterQuestions(false)}>Unanswered Questions</Button>
                    <Button className={ showAnswered ? 'btn-selected' : 'btn-default'} onClick={(e) => 
                        this.filterQuestions(true)}>Answered Questions</Button>
                </div>

                <ul className="questions-list">
                    {sortedQuestions.map((question) => (
                        <li key={question.id}>
                            <Link to={`question/${question['id']}`}>
                                <Question id={question.id}/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps( { questions, authedUser }) {
    return {
        authedUser,
        questions,
    }
}

export default connect(mapStateToProps)(QuestionBoard);

