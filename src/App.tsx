import "./App.css";
import Page from "./Page";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "../data";

function App() {
  return (
    <>
      <Header />
      {data.map((entry) => (
        <Entry key={entry.id} {...entry} />
      ))}
      <Page />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
