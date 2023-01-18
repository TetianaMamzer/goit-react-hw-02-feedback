import React, { Component } from 'react';
import Section from './Feedback/Section';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';



// import './Feedback/Feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  onLeaveFeedback = (option) => {
      this.setState((prevState) => {
        return {
          [option]: prevState[option] + 1,
        }
        })
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percent = Math.floor((100 / this.countTotalFeedback()) * good);
    return percent;
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() > 0 ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification message="There is no feedback"/> }
      </Section>
    );
  }
}

export default App;
