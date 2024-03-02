import React, { useState } from 'react';
import './App.css';

const flashcards = [
  {
    question: "Which organ in the human body is responsible for pumping blood throughout the circulatory system?",
    answer: "The heart"
  },
  {
    question: "What is the name of the molecule that carries genetic instructions in humans?",
    answer: "DNA (Deoxyribonucleic acid)"
  },
  {
    question: "In Maslow's hierarchy of needs, what is the highest level of psychological development?",
    answer: "Self-actualization"
  },
  {
    question: "What is the term for the study of human societies and cultures and their development?",
    answer: "Anthropology"
  },
  {
    question: "What philosophical concept questions the reality of the self or the 'I'?",
    answer: "Ego"
  },
  {
    question: "In which part of the human body would you find the hippocampus?",
    answer: "The brain"
  },
  {
    question: "What is the name of the effect where a person overestimates their own abilities?",
    answer: "The Dunning-Kruger effect"
  },
  {
    question: "Which famous thinker is known for the quote 'I think, therefore I am'?",
    answer: "René Descartes"
  },
  {
    question: "What is the term for the basic unit of all living organisms?",
    answer: "The cell"
  },
  {
    question: "What is considered the 'language of the universe' that humans use to describe and understand the laws of nature?",
    answer: "Mathematics"
  },
  {
    question: "Who is known for the theory of relativity, which has been crucial to our understanding of human existence?",
    answer: "Albert Einstein"
  },
  {
    question: "What do humans and all other living organisms rely on to obtain the energy required for survival?",
    answer: "Metabolism"
  },
  {
    question: "Which branch of philosophy deals with questions about existence, knowledge, values, reason, mind, and language?",
    answer: "Metaphysics"
  },
  {
    question: "In literature, what term describes the character against whom the protagonist struggles or contends?",
    answer: "Antagonist"
  },
  {
    question: "What innate reaction to a threat in a stressful situation is known as 'fight or flight' response?",
    answer: "The acute stress response"
  },
];
function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const handleCardClick = () => {
    setRevealAnswer(!revealAnswer);
  };
  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
    setRevealAnswer(false);
  };
  return (
    <div className="App">
      <h1>The Ultimate Human!</h1>
      <p>How good of a Human are you? Test all of your knowledge here with {flashcards.length} questions!</p>
      <div className="card" onClick={handleCardClick}>
        {revealAnswer ? flashcards[currentCardIndex].answer : flashcards[currentCardIndex].question}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
}
export default App;