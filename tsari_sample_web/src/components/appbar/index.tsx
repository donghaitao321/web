import { useCallback } from "react";
import { AppBar, Container, Toolbar, Typography, Box } from "@mui/material";

import Logo from "./Logo";
import LinkList from "./LinkList";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  isDeveloperMode: boolean;
  setIsDeveloperMode: any;
  isDarkMode: boolean;
  setIsDarkMode: any;
  userLinks: string[];
  developerLinks: string[];
}

export default function MyAppBar({
  isDeveloperMode = false,
  setIsDeveloperMode,
  isDarkMode = false,
  setIsDarkMode,
  userLinks = [],
  developerLinks = [],
}: Props) {
  const toggleDeveloperMode = useCallback(() => setIsDeveloperMode((x: any) => !x), []);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Logo {...{ toggle: toggleDeveloperMode }}>
          <Typography variant="h4">{"TSARI"}</Typography>
        </Logo>
        <LinkList links={userLinks} />
        {isDeveloperMode && <LinkList links={developerLinks} />}
        <Box flexGrow={1} />
        <ThemeSwitch
          value={isDarkMode ? "dark" : "light"}
          onChange={(val) => {
            val === "dark" ? setIsDarkMode(true) : setIsDarkMode(false);
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
