import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  return <div className="d-flex w-100">{props.children}</div>;
}
export default App;
