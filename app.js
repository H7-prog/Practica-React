// Chapter 4 – Your First Component

function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}

const app = document.getElementById("app");
ReactDOM.render(<Header />, app);
