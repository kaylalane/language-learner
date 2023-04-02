import { useState, lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import Navbar from "./Navbar";

const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <SearchParams />
    </div>
  );
}

export default App;
