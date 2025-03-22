import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#cc93b3",
        backgroundImage:
          "linear-gradient(135deg, #cc93b3 0%,rgb(185, 189, 192) 69%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          color: "white",
          gap: 3,
        }}
      >
        <Group sx={{ height: 80, width: 80 }} />
        <Typography variant="h3">Reacttivities</Typography>
      </Box>
      <Typography variant="h4">Welcome to Reacttivities</Typography>
      <Button
        component={Link}
        to="/activities"
        size="medium"
        sx={{
          height: 80,
          borderRadius: 4,
          fontSize: "1.5rem",
          backgroundColor: "",
          color: "#4c3743",
        }}
      >
        Go to the activities
      </Button>
    </Paper>
  );
}
