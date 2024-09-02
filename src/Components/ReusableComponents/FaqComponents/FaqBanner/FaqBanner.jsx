import React, { useState } from 'react';
import './FaqBanner.css'
import Footer from '../../Footer/Footer'

function FaqBanner() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <>
          <div className="FQ-container">
        <div>
          <h2>Your Travel Questions, Answered with Clarity</h2>
          <p>Simplify Your Journey with Our Travel FAQ</p>
        </div>
      </div>

      <div className="faq-section">
        {faqData.map((faq, index) => (
          <div
            className={`faq-rw ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <button className="faq-question">
              <div className="toggle-button">
                <i
                  className={`fa-solid fa-caret-right ${
                    activeIndex === index ? 'rotated' : ''
                  }`}
                ></i>
              </div>
              <div className='question'>{faq.question}</div>
            </button>
            <div
              className="faq-pannel"
              style={{
                display: activeIndex === index ? 'block' : 'none',
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer/>
    </>
  )
}
const faqData = [
    {
      question: 'How can I book a flight ticket?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eum. Reiciendis iusto officia odio facere, minus excepturi neque soluta accusamus.',
    },
    {
      question: 'What information is required to book a flight?',
      answer:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, eum. Reiciendis iusto officia odio facere, minus excepturi neque soluta accusamus.',
    },
    {
      question: 'Can I modify or cancel my flight booking?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    },
    {
      question: 'How do I check the status of my flight booking?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    },
    {
      question: 'What should I do if I encounter an issue with my flight?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    },
    {
      question: 'How can I request special assistance or services? ',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    },
    {
      question: 'What is the baggage policy for my flight?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    },
    {
      question: 'Can I make changes to my flight booking after purchase?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'How can I book accommodation?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'What information is needed to make a hotel reservation?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'Can I modify or cancel my hotel reservation?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'How do I check the status of my hotel booking?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'What should I do if I have issues with my accommodation?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'How can I request special amenities or services at the hotel?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'What is the hotel’s cancellation policy?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'Can I book accommodation for a large group or event?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'How do I ensure my accommodation booking is confirmed?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }, {
      question: 'What should I do if I need to extend my stay at the hotel?',
      answer:
        'Building a website is hard. It’s not something that you can just do in your spare time. You need to have an understanding of coding, design, and marketing in order to create a website that is effective and looks great. Even if you know how to code and design, you still need to know how to market your website in order to make sure that people will see it. Creating a website is a lot of work, but it can be very rewarding if you’re able to make it successful.',
    }
    // Add more FAQs here as needed
  ];
export default FaqBanner