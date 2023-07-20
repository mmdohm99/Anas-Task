import Pagination from "./components/pagination/pagination";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Pagination />
      </QueryClientProvider>
    </>
  );
}

export default App;
