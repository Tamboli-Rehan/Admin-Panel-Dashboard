import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { useTheme } from "@mui/material";
import Header from "../../components/Header";
import React from "react";

const Invoices = () => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "phone",
      headerName: "Phone-Number",
      type: "number",
      flex: 1,
      align:"left",
      headerAlign:"left"
    },
    {
      field: "email",
      headerName: "Email-Address",
      type: "number",
      flex: 1,
      align:"left",
      headerAlign:"left"
    },
    {
      field: "cost",
      headerName: "Cost",
      type: "number",
      align:"left",
      headerAlign:"left",
      flex:1,
      renderCell:(params)=>{
        <Typography color={color.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      }
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="INVOICES"
        subtitle="List of Invoice Balances"
      />
      <Box
        m="40px"
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column-cell": {
            color: color.greenAccent[300],
          },
          "& .MuiDataGrid-colCell": {
            backgroundColor: color.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: color.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: color.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: color.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${color.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
