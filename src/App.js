import PaginationRounded from "./components/pagination";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <PaginationRounded />
      </QueryClientProvider>
    </>
  );
}

export default App;
