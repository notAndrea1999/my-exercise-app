// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import Header from "./Components/Header";
import ExerciseClassComponent from "./Components/ImageComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <ButtonComponent btnText="Primo Testo del Bottone" />
      <ButtonComponent btnText="Secondo Testo del Bottone" />
      <ExerciseClassComponent
        imgTitle="Islands of NEOM – NEOM Saudi Arabia"
        src="https://images.unsplash.com/photo-1683009427666-340595e57e43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8b2NlYW58ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="Islands of NEOM – NEOM Saudi Arabia"
      />
    </div>
  );
}

export default App;
