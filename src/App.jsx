import { useState, useEffect, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SearchParams = lazy(() => import("./SearchParams"));
const Reddit = lazy(() => import("./components/Reddit"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
 
  return (
    <div className="App">
    
      <Navbar />
      <SearchParams />
      <Reddit />
      <Footer />
    </div>
  );
}

export default App;
