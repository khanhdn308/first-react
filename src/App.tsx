import { useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import Toast from "./components/Toast.tsx";
import ChefClaudePage from "./pages/ChefClaude/ChefClaudePage.tsx";
import CounterPage from "./pages/Counter/CounterPage.tsx";
import TravelJournalPage from "./pages/TravelJournal/TravelJournalPage.tsx";
import PadPage from "./pages/Pad/PadPage.tsx";
import MemeGeneratorPage from "./pages/MemeGenerator/MemeGenerator.tsx";

function App() {
  const [user, setUser] = useState("Khanh");

  return (
    <>
      <Header user={user} />
      <ContactCard />
      <ChefClaudePage />
      {/* <CounterPage /> */}
      {/* <TravelJournalPage /> */}
      {/* <SignUpForm /> */}
      {/* <PadPage /> */}
      {/* <Toast /> */}
      {/* <MemeGeneratorPage /> */}
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
