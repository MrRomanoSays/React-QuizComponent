import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  render(props) {
    return (
      <ul>
        <button>{this.props.button_text}</button>
      </ul>
    )
  }
}

export default QuizQuestionButton
