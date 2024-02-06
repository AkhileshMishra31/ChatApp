import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import AntSwitch from "../../components/AntSwitch";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";
import { Nav_Buttons, Nav_Setting } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from '@faker-js/faker';
const DashboardLayout = () => {
  const [selectedTab, setSelectedTab] = useState(1)
  const handleChangeTab = (index) => {

    setSelectedTab(index)
  };
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  return (
    <div style={{ display: "flex" }}>
      <Box
        p={2}
        sx={{
          height: "100vh",
          width: 100,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          sx={{ width: "100%" }}
          direction="column"
          alignItems={"center"}
          justifyContent="space-between"
          spacing={3}
          height={"100%"}
        >
          <Stack alignItems={"center"} spacing={4}>

            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5
            }}>
              <img src={Logo} alt="Tawk" />
            </Box>
            <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
              {Nav_Buttons.map((el) => {
                return el.index == selectedTab ? (
                  <Box
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                    p={1}
                  >
                    <IconButton
                      onClick={() => {
                        handleChangeTab(el.index);
                      }}
                      sx={{ width: "max-content", color: "#ffffff" }}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      handleChangeTab(el.index);
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#080707"
                          : theme.palette.text.primary,
                    }}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}
              <Divider />
              {
                selectedTab === 3 ? (
                  <Box>
                    <IconButton>
                      <Gear />
                    </IconButton>
                  </Box>
                ) : (
                  <Box>
                    <IconButton>
                      <Gear />
                    </IconButton>
                  </Box>
                )
              }
            </Stack>
          </Stack>
          <Stack spacing={3}>
          <AntSwitch
            defaultChecked={theme.palette.mode === "dark"}
            onChange={onToggleMode}
          />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
