import { useState } from 'react'
import './FAQ.css'

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Who owns the data and accounts?',
      answer: 'You own everything. All leads, email accounts, domains, and data remain 100% your property. We build the system for you, but you maintain full ownership and control.'
    },
    {
      question: 'How soon can I start?',
      answer: 'After the initial setup (typically 5-7 days), your system will be live and automatically contacting leads. The setup includes domain configuration, email warmup, sequence creation, and full system integration.'
    },
    {
      question: 'Can I use this system for multiple niches?',
      answer: 'Yes! The system is flexible and can be configured to target different industries, roles, and niches. We can set up separate campaigns for each target audience you want to reach.'
    },
    {
      question: 'How are leads verified and personalized?',
      answer: 'Our AI engine scrapes leads based on your ideal customer profile, then verifies emails using multiple validation services. Each lead is enriched with company data, and our system creates personalized email copy using AI that sounds natural and human.'
    },
    {
      question: 'How is this different from typical cold email software?',
      answer: 'Most cold email tools require manual lead research, list building, and constant inbox management. Email Outreach Engine™ handles everything automatically: finding leads, verifying them, sending personalized sequences, and using AI to categorize replies so you only focus on hot prospects.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about the system
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <div className="faq-icon">
                  {openIndex === index ? '−' : '+'}
                </div>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
