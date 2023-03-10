import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./routes/AllRoutes";
import { Navbar } from "./components/navbar/Navbar";


function App() {
  
  return (
    <Box>
      <Navbar/>
      <AllRoutes/>
      
    </Box>
  );
}

export default App;
