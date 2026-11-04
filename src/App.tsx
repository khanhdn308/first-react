import { useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import Toast from "./components/Toast.tsx";
import ChefClaudePage from "./pages/ChefClaude/ChefClaudePage.tsx";
import CounterPage from "./pages/Counter/CounterPage.tsx";
import TravelJournalPage from "./pages/TravelJournal/TravelJournalPage.tsx";

function App() {
  const [user, setUser] = useState("Khanh");

  return (
    <>
      <Header user={user} />
      <ChefClaudePage />
      <CounterPage />
      <TravelJournalPage />
      <ContactCard />
      <SignUpForm />
      <Toast />
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
