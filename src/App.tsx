import "./App.css";
import Page from "./Page";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import data from "../data.ts";
import Entry from "./components/Entry.tsx";

function App() {
  return (
    <>
      <Header />
      {data.map((entry, index) => (
        <Entry
          key={index}
          country={entry.country}
          title={entry.title}
          googleMapsLink={entry.googleMapsLink} 
          dates={entry.dates}
          text={entry.text}
          img={entry.img}
        />
      ))}
      <Page />
      <ContactCard />
      <SignUpForm />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
