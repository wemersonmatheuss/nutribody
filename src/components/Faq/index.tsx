import React, { useState } from 'react';
import styles from './styles.module.css';
import arrowIcon from '../../assets/svg/arrow.svg';

const faqData = [
  {
    question: 'Como devo tomar?',
    answer: 'A dose recomendada é de 2 cápsulas ao dia, ingeridas juntas após o café da manhã, ou conforme orientação de um profissional de saúde.'
  },
  {
    question: "O D'Castillá-Vie NaturalBody é natural?",
    answer: 'Sim, nossa fórmula combina ativos naturais e nutrientes essenciais, sem adição de substâncias proibidas.'
  },
  {
    question: 'Tem contraindicação?',
    answer: 'Gestantes, lactantes e pessoas com condições de saúde específicas devem consultar um médico antes do uso. Não indicado para menores de 18 anos..'
  },
  {
    question: 'Em quanto tempo começo a ver resultados?',
    answer: 'O suplemento potencializa os resultados quando combinado com uma alimentação equilibrada e prática de exercícios físicos.'
  },
  {
    question: 'Pode tomar junto com outros suplementos?',
    answer: 'Sim, mas é sempre importante verificar com um nutricionista ou médico para evitar excesso de algum nutriente.'
  },
  {
    question: 'É aprovado pela ANVISA?',
    answer: 'Sim, é produzido em laboratórios regularizados e segue todas as normas exigidas pela ANVISA para suplementos alimentares.'
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container} id='faq'>
        <div className={styles.title}>
            <h2>Perguntas Frequentes (FAQs)</h2>

            <p>Antes de tomar sua decisão, é natural ter perguntas. Reunimos aqui as mais frequentes para te ajudar com total clareza e segurança.</p>
        </div>

        <div className={styles.faqContainer}>
            {faqData.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
                <button
                className={styles.faqQuestion}
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                >
                <span>{item.question}</span>
                <img
                src={arrowIcon}
                alt="Seta para expandir"
                className={openIndex === idx ? styles.arrowOpen : styles.arrow}
                />
                </button>
                {openIndex === idx && (
                    <div
                    id={`faq-answer-${idx}`}
                    className={styles.faqAnswer}
                    >
                    {item.answer}
                    </div>
                )}
            </div>
            ))}
        </div>
    </div>
    
  );
};

export default Faq;
