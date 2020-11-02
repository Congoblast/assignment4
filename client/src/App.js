import React from 'react';
//import QuestionList from "./QuestionList";

//import Logo from "./logo"; 
//import AddQuestion from "./AddQuestion";
//import AddAnswer from './AddAnswer';
//import questions from "./questions";
import Navigation from "./navigation";
//import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
//import QuestionList2 from './questions';
//import api from "./datas";

//const API_URL = process.env.REACT_APP_API;

function App() {
  
  //const [data, setData] = useState("No data :(");
  
  //useEffect(() => {
   // async function getData() {
    //  const url = `${api}/questions`;
    //  const response = await fetch(url);
     // const data = await response.json();
    //  setData(data.msg);
    //}
   // getData();
 // }, []); 


  return (
    <>
     <div>
       <Navigation/>
   
    </div>
     
    
     
    </>
  );
}

export default App;
