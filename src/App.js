

import { useState } from "react";
import "./App.css"
import Expenseform from "./components/expenseform";
import ExpoenseList from "./components/expoenseList";


function App() {



  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 160000 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 }
  ]);


  return (

    <main className="main-container">

      <h1>내 소비목록 </h1>
      <div style={{ width: '100%', backgroundColor: 'white', padding: "1rem" }}>

        <Expenseform />

      </div>
      <div style={{ width: '100%', backgroundColor: 'white', padding: "1rem" }}>

        <ExpoenseList />

      </div>
      <div style={{ display: 'flex', justifyContent: "end", marginTop: "1rem" }}>
        <p style={{ fontSize: "1rem" }}>
          총지출 :
          <span style={{ fontSize: "1.5rem" }}>원</span>
        </p>
      </div>

    </main>

  )
}

export default App;


