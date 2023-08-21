import * as React from "react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import AirbnbCard from "./Home/Home";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <App />
        <AirbnbCard />
        <Box
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={4}
          h={8}
        >
          Button
        </Box>
      </div>
    </ChakraProvider>
  );
}
