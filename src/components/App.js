import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question,setQuestion]= useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
       .then(res => res.json())
       .then(transaction => setQuestion(transaction))
  },[])
  function handleAdd(newform){
    setQuestion([...question,newform])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleAdd={handleAdd} /> : <QuestionList setQuestion={setQuestion} question={question}/>}
    </main>
  );
}

export default App;
