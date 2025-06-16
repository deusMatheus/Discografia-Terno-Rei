//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Discografia Terno Rei
        </h1>
      </header>
      <body>
        <div>
          <h2>
            Sumário
          </h2>
          <h3>
            Álbuns
          </h3>
          <ul>
            <li> <a href="#Metrópole"> Metrópole (2012)</a></li>
            <li> <a href="#Vigília"> Vigília (2014)</a></li>
            <li> <a href="#Noite"> Essa noite bateu com um sonho (2016)</a></li>
            <li> <a href="#Violeta">Violeta (2019)</a></li>
            <li> <a href="#gemeos">Gêmeos (2022)</a></li> 
          </ul>
          
          <h2 id="Metrópole"> Metrópole (2012)</h2>
          <ol>
              <li>Entorpecer</li>
              <li>Leve Sentimento</li>
              <li>Estrago</li>
              <li>Metrópole</li>
              <li>Realizei</li>
              <li>Roda do Mundo</li>
          </ol>
        </div>
      </body>
    </div>
  );
}

export default App;
