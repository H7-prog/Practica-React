const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

// Componente Header (usa una prop "title")
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

// Página principal
function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

// Monta la app
root.render(<HomePage />);
