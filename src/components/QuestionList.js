import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({question,setQuestion}) {

  function handleChange (correctIndex,id) {
    // Send request to the server to update the question
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({correctIndex })
    })
      .then(response => response.json())
      .then(data => {
        // Update the question in state
        setQuestion(prevQuestions => prevQuestions.map(q => q.id === question.id ? data : q));
      });
  }
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question.map((item)=>{
        return <QuestionItem key={item.id}
        id={item.id}
        prompt={item.prompt}
        answers={item.answers}
        correctIndex={item.correctIndex}
        question={question}
        setQuestion={setQuestion}
        onAnswerChange={handleChange}
        />
      })}</ul>
    </section>
  );
}

export default QuestionList;
