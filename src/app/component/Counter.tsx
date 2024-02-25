"use client";

import React, { useState } from "react";
import { Button, Grid } from "@mui/material";

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Button variant="contained" onClick={handleDecrement}>
          -
        </Button>
      </Grid>
      <Grid item>{count}</Grid>
      <Grid item>
        <Button variant="contained" onClick={handleIncrement}>
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default Counter;
