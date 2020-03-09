import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _formatQuestion
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  //console.log('saving', info)
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function formatNewQuestion (info) {
  return _formatQuestion(info)
}
