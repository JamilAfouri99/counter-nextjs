import React from "react";
import { Box, Container } from "@mui/material";
import TopBar from "./component/TopBar";
import Counter from "./component/Counter";


const HomePage: React.FC = () => {

  return (
    <div>
      <TopBar />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box>
          <Counter />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
