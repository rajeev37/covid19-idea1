import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        fieldType= {props.fieldType}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div key={props.questionId}>
      <br></br>
      { props.questionTotal ? <QuestionCount counter={props.questionId} total={props.questionTotal} /> : "" }
      <Question content={props.question} />
      <ul className="answerOptions">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
