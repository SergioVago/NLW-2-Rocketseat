import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/26986888?s=460&u=ad764f0e3931a01a51adc3ce999d8d7eb9fa8fe0&v=4" alt="Sergio Vago" />
        <div>
          <strong>Sergio Vago</strong>
          <span>POG</span>
        </div>
      </header>

      <p>
        Entusiasta na POG (Programação Orientada a Gambiarra)
            <br />
        <br />
            Apaixonado por gambiarrar tudo e fazer funcionar
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 150,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;