import React, { useState } from "react";
import Container from "./layouts/Container";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export type PageType = "home" | "overview" | "skills" | "projects" | "contacts";

function App() {
  const [page, setPage] = useState<PageType>("home");
  return (
    <Container>
      <Navbar setPage={setPage} />
      <div className="pt-[96px]">
        {page === "home" && <Home setPage={setPage} />}
        {page === "overview" && <div>Overview</div>}
        {page === "skills" && <div>Skills</div>}
        {page === "projects" && <div>Projects</div>}
        {page === "contacts" && <div>Contacts</div>}
      </div>
    </Container>
  );
}

export default App;
