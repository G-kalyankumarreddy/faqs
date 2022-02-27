import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <div className="faq-container">
          <h1 className="title">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem faqsList={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
