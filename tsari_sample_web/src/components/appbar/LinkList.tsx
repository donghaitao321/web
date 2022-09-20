import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  buttonSelected: {
    textDecoration: "none",
    color: "white",
    "& div": {
      borderBottom: "1px solid",
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
});
interface Props {
  links: string[];
}

export default function LinkList({ links }: Props) {
  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <div>
      {links.map((tabName) => (
        <NavLink
          to={`/${tabName}`}
          className={({ isActive }) => (isActive ? classes.buttonSelected : classes.link)}
          key={tabName}
        >
          <Button key={tabName} color="inherit">
            <div>{t(tabName)}</div>
          </Button>
        </NavLink>
      ))}
    </div>
  );
}
