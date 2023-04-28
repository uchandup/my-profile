import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
function App() {
  const [realData, setRealData] = useState([0]);
  const FetchData = async () => {
    const response = await fetch(
      "https://uchandup-resume-default-rtdb.firebaseio.com/Profile.json"
    );
    let responseData = await response.json();
    console.log(responseData);
    setRealData(responseData);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="App">
      <Header Title={realData.Role} NickName={realData.MiddleName} />
    </div>
  );
}

export default App;
