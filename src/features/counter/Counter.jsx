import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import {useSelector,useDispatch} from "react-redux";
import { increment,decrement,reset } from "./counterSlice";

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count)

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh", // Ensures the container takes the full viewport height
      }}
    >
      <Box
        sx={{
          border: "2px solid white",
          width: "500px",
          height: "500px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Count:{count}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "60%",
            gap: "15px",
          }}
        >
          <Button variant="contained" onClick={() => dispatch(decrement())}>-</Button>
          <Button variant="contained" onClick={() => dispatch(reset())}>RESET</Button>
          <Button variant="contained" onClick={() => dispatch(increment())}>+</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Counter;
