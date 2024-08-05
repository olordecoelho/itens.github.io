import { ArmasDeCorte, ArmasDeDisparo, ArmasDeImpacto, ArmasMagicas, ItensMagicos } from "../armas";

export default function Home() {
    return (
        <main>
        <h1>Armas e Itens Mágicos</h1>
  
        <div id="armas-corte" className="category">
          <h2>Armas de Corte</h2>
          <div className="grid">
            {ArmasDeCorte.map((arma) => (
              <div key={arma.id}>
                <h3>{arma.nome}</h3>
                <p>Dano: {arma.dano}</p>
                <p>{arma.dec}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div id="armas-impacto" className="category">
          <h2>Armas de Impacto</h2>
          <div className="grid">
            {ArmasDeImpacto.map((arma) => (
              <div key={arma.id}>
                <h3>{arma.nome}</h3>
                <p>Dano: {arma.dano}</p>
                <p>{arma.dec}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div id="armas-disparo" className="category">
          <h2>Armas de Disparo</h2>
          <div className="grid">
            {ArmasDeDisparo.map((arma) => (
              <div key={arma.id}>
                <h3>{arma.nome}</h3>
                <p>Dano: {arma.dano}</p>
                <p>{arma.dec}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div id="armas-magicas" className="category">
          <h2>Armas Mágicas</h2>
          <div className="grid">
            {ArmasMagicas.map((arma) => (
              <div key={arma.id}>
                <h3>{arma.nome}</h3>
                <p>Dano: {arma.dano}</p>
                <p>{arma.dec}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div id="itens-magicos" className="category">
          <h2>Itens Mágicos</h2>
          <div className="grid">
            {ItensMagicos.map((item) => (
              <div key={item.id}>
                <h3>{item.nome}</h3>
                <p>Quantidade: {item.amt}</p>
                <p>{item.dec}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  