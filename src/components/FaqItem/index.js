import {Component} from 'react'

import './index.css'

const PLUS = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onClickButton = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onRender = () => {
    const {isActive} = this.state
    const {faqsList} = this.props
    const {answerText} = faqsList

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {isActive} = this.state
    console.log(isActive)
    const {faqsList} = this.props
    const {questionText} = faqsList
    const image = isActive ? MINUS : PLUS
    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="faq-item-container">
        <div className="question-and-btn-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            <img src={image} alt={altText} className="image" />
          </button>
        </div>
        {this.onRender()}
      </li>
    )
  }
}

export default FaqItem
