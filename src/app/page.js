"use client";

import React, { useState } from 'react';
import { ArmasDeCorte, ArmasDeImpacto, ArmasDeDisparo, ArmasMagicas, ItensMagicos } from './armas';
import './App.css';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <main>
      <h1>Armas e Itens Mágicos</h1>

      {/* Armas de Corte */}
      <section className="category" id="armas-corte">
        <h2>Armas de Corte</h2>
        <div className="grid">
          {ArmasDeCorte.map((arma) => (
            <div
              key={arma.id}
              className="card"
              onClick={() => setSelectedItem(arma)}
            >
              <img src={`/images/${arma.id}.jpg`} alt={arma.nome} />
              <h3>{arma.nome}</h3>
              <p>{arma.dec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Armas de Impacto */}
      <section className="category" id="armas-impacto">
        <h2>Armas de Impacto</h2>
        <div className="grid">
          {ArmasDeImpacto.map((arma) => (
            <div
              key={arma.id}
              className="card"
              onClick={() => setSelectedItem(arma)}
            >
              <img src={`/images/${arma.id}.jpg`} alt={arma.nome} />
              <h3>{arma.nome}</h3>
              <p>{arma.dec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Armas de Disparo */}
      <section className="category" id="armas-disparo">
        <h2>Armas de Disparo</h2>
        <div className="grid">
          {ArmasDeDisparo.map((arma) => (
            <div
              key={arma.id}
              className="card"
              onClick={() => setSelectedItem(arma)}
            >
              <img src={`/images/${arma.id}.jpg`} alt={arma.nome} />
              <h3>{arma.nome}</h3>
              <p>{arma.dec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Armas Mágicas */}
      <section className="category" id="armas-magicas">
        <h2>Armas Mágicas</h2>
        <div className="grid">
          {ArmasMagicas.map((arma) => (
            <div
              key={arma.id}
              className="card"
              onClick={() => setSelectedItem(arma)}
            >
              <img src={`/images/${arma.id}.jpg`} alt={arma.nome} />
              <h3>{arma.nome}</h3>
              <p>{arma.dec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itens Mágicos */}
      <section className="category" id="itens-magicos">
        <h2>Itens Mágicos</h2>
        <div className="grid">
          {ItensMagicos.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setSelectedItem(item)}
            >
              <img src={`/images/${item.id}.jpg`} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.dec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal para exibir detalhes do item */}
      {selectedItem && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={`/images/${selectedItem.id}.jpg`} alt={selectedItem.nome} />
            <h3>{selectedItem.nome}</h3>
            <p>{selectedItem.dec}</p>
          </div>
        </div>
      )}
    </main>
  );
}
