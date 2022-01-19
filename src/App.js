import './App.css';

let name = "Abhijeet";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        <h2>Checking Addition - The sum of 2 & 3 is {2+3}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius quam accusantium ut odit, ratione ipsa et nemo commodi exercitationem iure excepturi architecto qui, voluptates non asperiores, dolore cum consequuntur.
        </p>
      </div>
    </>
  );
}

export default App;
