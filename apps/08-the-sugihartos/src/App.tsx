import React, { useState } from "react";
import Container from "./layouts/Container";
import Navbar from "./components/Navbar";

export type PageType = "home" | "overview" | "skills" | "projects" | "contacts";

function App() {
  const [page, setPage] = useState<PageType>("home");
  return (
    <Container>
      <Navbar setPage={setPage} />
      <div className="mt-[96px]"></div>
      {page === "home" && <div>Home</div>}
      {page === "overview" && <div>Overview</div>}
      {page === "skills" && <div>Skills</div>}
      {page === "projects" && <div>Projects</div>}
      {page === "contacts" && <div>Contacts</div>}
    </Container>
  );
}

export default App;
