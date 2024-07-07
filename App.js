import "./styles.css";
import { useState } from "react";

const deck = [
  { card: "sword" },
  { card: "wand" },
  { card: "shield" },
  { card: "helm" },
  { card: "hammer" },
  { card: "ring" },
];

export default function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleDeck = () => {
    console.log("a");
    const shuffledDeck = [...deck, ...deck]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(shuffledDeck);
    console.log(JSON.stringify(shuffledDeck));
    setTurns(0);
  };
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={() => shuffleDeck()}>New Game</button>
    </div>
  );
}
