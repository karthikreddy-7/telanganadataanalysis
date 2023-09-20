import "./App.css";
import LandingPage from "./landing";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <LandingPage />
    </>
  );
}

export default App;
