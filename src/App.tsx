import { useEffect, useState } from "react";
import type { Joke } from "./types.ts";

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  // TODO move to smaller component
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const generateJoke = async () => {
    setLoading(true);
    const url = selectedCategory
      ? `https://api.chucknorris.io/jokes/random?category=${selectedCategory}`
      : "https://api.chucknorris.io/jokes/random";

    const res = await fetch(url);
    const data = await res.json();
    setJoke(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Chuck Norris Jokes</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Category:{" "}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Random</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
      </div>

      <button onClick={generateJoke} disabled={loading}>
        {loading ? "Loading..." : "Generate"}
      </button>

      {joke && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <p>{joke.value}</p>
        </div>
      )}
    </div>
  );
}

export default App;
