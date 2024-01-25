import { useTheme, Typography, Box, colors } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import React from "react";

const Team = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone-Number",
      type: "number",
      flex: 1,
      align:"left",
      headerAlign:"left",
    },
    {
      field: "email",
      headerName: "Email-Address",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access-Level",
      flex: 1,
      headerAlign:"center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"?
              color.greenAccent[600]:
              color.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
            {access === "manager" && <SecurityOutlinedIcon/>}
            {access === "user" && <LockOpenOutlinedIcon/>}
            <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box m="40px" height="70vh" sx={{
        "& .MuiDataGrid-root":{
          border:"none"
        },
        "& .MuiDataGrid-cell":{
          borderBottom:"none"
        },
        "& .name-column-cell":{
          color:color.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders":{
          backgroundColor:color.blueAccent[600],
          borderBottom:"none"
        },
        "& .MuiDataGrid-vertualScroller":{
          backgroundColor:color.primary[400],
        },
        "& .MuiDataGrid-footerContainer":{
          borderTop:"none",
          backgroundColor:color.blueAccent[600]
        }
      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
