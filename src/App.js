import "./App.css";
import LandingPage from "./landing";
import { Analytics } from "@vercel/analytics/react";
import { inject } from "@vercel/analytics";

function App() {
  return (
    <>
      <Analytics />
      {inject()}
      <LandingPage />
    </>
  );
}

export default App;
