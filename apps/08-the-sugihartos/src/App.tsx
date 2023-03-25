import React, { useState } from "react";
import Container from "./layouts/Container";
import Navbar from "./components/Navbar";
import { Home, Overview, Skills, Contact, Project } from "./pages";

export type PageType = "home" | "overview" | "skills" | "projects" | "contacts";

function App() {
  const [page, setPage] = useState<PageType>("home");
  return (
    <Container>
      <Navbar page={page} setPage={setPage} />
      <div className="pt-[96px]">
        {page === "home" && <Home setPage={setPage} />}
        {page === "overview" && <Overview />}
        {page === "skills" && <Skills />}
        {page === "projects" && <Project />}
        {page === "contacts" && <Contact />}
      </div>
    </Container>
  );
}

export default App;
