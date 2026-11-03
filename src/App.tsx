import "./App.css";
import Page from "./Page";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      
      <Page />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
