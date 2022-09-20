import { useLocalStorageState, useSessionStorageState } from "ahooks";
import _ from "lodash";
import React, { useState } from "react";

import AppBar from "./components/appbar";
import Home from "./components/home";
import Config from "./components/config";
import Preview from "./components/preview";
import FileUploader from "./components/upgrade";
import DevConfig from "./components/dev";
import Log from "./components/dev/Log";
import CalibrationNavigator from "./components/calibration/Navidator";
import ThemeProvider from "./components/ThemeProvider";
import { Route, Routes } from "react-router-dom";

const USER_TABS = {
  config: Config,
  preview: Preview,
  calibration: CalibrationNavigator,
};
const UPGRADE_TABS = {
  upgrade: FileUploader,
};
const DEVELOPER_TABS = {
  configDev: DevConfig,
  log: Log,
};

export default function App() {
  const [error, setError] = useState<Error>();
  const [isDeveloperMode, setIsDeveloperMode] = useSessionStorageState("devMode", { defaultValue: false });
  const [isDarkMode, setIsDarkMode] = useLocalStorageState("theme", { defaultValue: false });

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <AppBar
        {...{
          isDeveloperMode,
          setIsDeveloperMode,
          isDarkMode,
          setIsDarkMode,
          userLinks: error ? ["home", "upgrade"] : _.concat("home", Object.keys(USER_TABS), Object.keys(UPGRADE_TABS)),
          developerLinks: Object.keys(DEVELOPER_TABS),
        }}
      />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {Object.entries({
            ...USER_TABS,
            ...UPGRADE_TABS,
            ...DEVELOPER_TABS,
          }).map((kv) => {
            const [name, EL] = kv;
            return (
              <Route key={name} path={name} element={<EL />} />
            );
          })}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
