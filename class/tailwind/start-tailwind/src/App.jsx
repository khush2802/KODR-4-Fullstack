import Card from "./components/Card";

const cards = [
  {
    title: "React",
    description: "Build reusable UI components with React."
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework."
  },
  {
    title: "JavaScript",
    description: "Programming language of the web."
  },
  {
    title: "Node.js",
    description: "JavaScript runtime for backend."
  },
  {
    title: "MongoDB",
    description: "NoSQL database."
  },
  {
    title: "Express",
    description: "Backend framework for Node.js."
  },
  {
    title: "Git",
    description: "Version control system."
  },
  {
    title: "DSA",
    description: "Data Structures & Algorithms."
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;