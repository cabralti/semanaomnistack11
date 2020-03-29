import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incidents-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>

                </section>

                <form>
                    <input type="text" placeholder="Título do caso" />
                    <textarea placeholder="Descrição"></textarea>
                    <input type="text" placeholder="Valore em reais" />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}