import "./styles.css";

const deck = [
  { card: "sword" },
  { card: "wand" },
  { card: "shield" },
  { card: "helm" },
  { card: "hammer" },
  { card: "ring" },
];

export default function App() {
  const shuffleDeck = () => {
    const shuffledDeck = [...deck, ...deck]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: Math.random() }));
    return shuffledDeck;
  };
  console.log(JSON.stringify(shuffleDeck));
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
    </div>
  );
}
