import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataClaims } from "../../data/mockData";
import Header from "../../components/Header";

const Claims = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },    
    {
      field: "school",
      headerName: "School",
      flex: 1,
    },
    {
      field: "lunchId",
      headerName: "Lunch ID",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "partReplaced",
      headerName: "Part Replaced",
      flex: 1,
    },
    {
      field: "guardianEmail",
      headerName: "Lunch ID",
      flex: 1,
    },
    {
      field: "hasInsurance",
      headerName: "Insurance?",
      flex: 1,
    },
    {
      field: "notes",
      headerName: "Notes",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "StudentId",
      headerName: "Student ID",
      flex: 1,
    },
    {
      field: "FirstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "LastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "School",
      headerName: "School",
      flex: 1,
    },
    {
      field: "SubmittedBy",
      headerName: "Submitted By",
      flex: 1,
    },
    {
      field: "grade_level",
      headerName: "Grade Level",
      flex: 1,
    },
    {
      field: "claim_nature",
      headerName: "Claim Nature",
      flex: 1,
    },
    {
      field: "rent_or_byob",
      headerName: "Rent/BYOD",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "number_of_claims",
      headerName: "Claim #",
      flex: 1,
    },
    {
      field: "asset_id",
      headerName: "Asset ID",
      flex: 1,
    },
    {
      field: "serial_number",
      headerName: "Serial #",
      flex: 1,
    },
    {
      field: "part_replaced",
      headerName: "Part Replaced",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
    },
    {
      field: "guardian_email",
      headerName: "Guardian Email",
      flex: 1,
    },
    {
      field: "insurance",
      headerName: "Insurance",
      flex: 1,
    },
    {
      field: "notes",
      headerName: "Notes",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="CLAIMS" subtitle="List of Broken Device Claims 2023-2024" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataClaims} columns={columns} />
      </Box>
    </Box>
  );
};

export default Claims;
