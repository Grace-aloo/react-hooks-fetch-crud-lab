import React from "react";

function QuestionItem({ question,setQuestion,id,prompt,answers,correctIndex,onAnswerChange }) {
  //const { id, prompt, answers, correctIndex } = question;

  
  function handleDeleteQuestion() {
     fetch(` http://localhost:4000/questions/${question.id}`, {
       method: "DELETE"
     })
       .then((r) => r.json)
       .then(() => {
        const availableTransactions = question.filter((transaction) => {
          return transaction.id !== id
        })
        setQuestion(availableTransactions)
       })
  }
  function handleDelete(){
    handleDeleteQuestion(id)
  }
  function handleAnswerChange(event) {
    onAnswerChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select  defaultValue={correctIndex}>{answers.map((answer,index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ))}
  </select>
      </label>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
