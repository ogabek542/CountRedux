import React from 'react';
import { Container, Box,Typography,Button } from '@mui/material';

const CenteredBox = () => {
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
          borderRadius:"10px",
          padding:"10px",
        }}
      >
        <Typography sx={{height:"40%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"24px",fontWeight:"bold"}}>Count:0</Typography>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",height:"60%",gap:"15px"}}>
          <Button variant='contained'>-</Button>
          <Button variant='contained'>RESET</Button>
          <Button variant='contained'>+</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CenteredBox;
