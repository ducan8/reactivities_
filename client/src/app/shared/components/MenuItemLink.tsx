import { MenuItem } from "@mui/material";
import { ReactNode } from "react";
import { NavLink } from "react-router";

export default function MenuItemLink({
  children,
  to,
  sx,
}: {
  children: ReactNode;
  to: string;
  sx?: { [key: string]: string | number };
}) {
  return (
    <MenuItem
      component={NavLink}
      to={to}
      sx={{
        fontSize: "0.9rem",
        textTransform: "uppercase",
        fontWeight: "bold",
        ...sx,
        "&.active": {
          color: "#ffb8e0",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}
