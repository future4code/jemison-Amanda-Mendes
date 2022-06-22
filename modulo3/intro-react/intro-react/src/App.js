import './App.css';
import foto from "./img/minha-foto.jpeg";

const start = () => {
  alert("Boa noite!");
};

function App() {
  return (
    <div className="container">
      <h1>Olá, eu sou a Amanda!</h1>
      <img className="foto" src={foto}></img>
      <p>Esse é o meu primeiro site em React!</p>
      <button onClick={start}>Clique aqui</button>
    </div>
  );
}

export default App;
