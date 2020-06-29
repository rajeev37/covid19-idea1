import React, { Component } from 'react';
import quizQuestions from './quizQuestions';
import Quiz from './Quiz';
// import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      country: "default"
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // country select action.
  handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    const shuffledAnswerOptions = quizQuestions[selectedCountry].map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizQuestions[selectedCountry][0].question,
      answerOptions: shuffledAnswerOptions[0],
      country: selectedCountry
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions[this.state.country].length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      console.log("#####", this.state.answerOptions);
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[this.state.country][counter].question,
      answerOptions: quizQuestions[this.state.country][counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions[this.state.country].length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return ""; // <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <div>
        <h2>Assessment:</h2>
        <h4>Please Select Country:</h4>
        <select className="form-control" name="country" onChange={this.handleCountryChange}>
          <option selected>Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
