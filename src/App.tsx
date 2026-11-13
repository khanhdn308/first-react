import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router';
import ContactCard from "./components/ContactCard";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import ChefClaudePage from "./pages/ChefClaude/ChefClaudePage.tsx";
import CounterPage from "./pages/Counter/CounterPage.tsx";
import TravelJournalPage from "./pages/TravelJournal/TravelJournalPage.tsx";
import PadPage from "./pages/Pad/PadPage.tsx";
import MemeGeneratorPage from "./pages/MemeGenerator/MemeGenerator.tsx";
import Tenzies from "./pages/Tenzies/Tenzies.tsx";
import AssemblyPage from "./pages/Assembly/AssemblyPage.tsx";

function App() {
  const [user, setUser] = useState("Khanh");

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/assembly" element={<AssemblyPage />} />
        <Route path="/contact" element={<ContactCard />} />
        <Route path="/claude" element={<ChefClaudePage />} />
        <Route path="/travel" element={<TravelJournalPage />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/pad" element={<PadPage />} />
        <Route path="/meme" element={<MemeGeneratorPage />} />
        <Route path="/tenzies" element={<Tenzies />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
