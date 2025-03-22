import { Group } from "@mui/icons-material";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Container,
  MenuItem,
} from "@mui/material";
import MenuItemLink from "../shared/components/MenuItemLink";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#343a40",
          backgroundImage: "linear-gradient(135deg, #343a40 0%, #6c757d 69%)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <MenuItem
                component={NavLink}
                to="/"
                sx={{ display: "flex", gap: 1, textTransform: "none" }}
              >
                <Group fontSize="medium" />
                <Typography variant="h6" fontWeight={"bold"}>
                  Reactivities
                </Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <MenuItemLink to="/activities">Activities</MenuItemLink>
              <MenuItemLink to="/createActivity">Create Activity</MenuItemLink>
            </Box>

            <MenuItem>User menu</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
