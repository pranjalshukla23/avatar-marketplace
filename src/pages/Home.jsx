import React from "react";
import Sidebar from "../components/Sidebar";
import PaginatedItems from "../components/PaginatedItems";
import UserContext from "../contexts/userContext";
import { useContext } from "react";
function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <PaginatedItems itemsPerPage={12} />,
    </main>
  );
}

export default Home;
