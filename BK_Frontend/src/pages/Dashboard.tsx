import React from "react";
import { useGetOrderDashboardQuery } from "../redux/api/orderApi";
import FlashCard from "./FlashCard"; // Assuming you have a FlashCard component
import { CircularProgress, Box, Typography, Grid } from "@mui/material";
import Table from "../components/dynamicTable/DynamicTable";
import DefaultImage from "../assets/defaultBox.png";
import { GridColDef } from "@mui/x-data-grid";

const Dashboard = () => {
  const { data, error, isLoading } = useGetOrderDashboardQuery({});

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Typography color="error">Error loading data</Typography>;
  }

  const columns: GridColDef[] = [
    {
      field: "primaryImage",
      headerName: "Image",
      minWidth: 200,
      headerAlign: "center",
      flex: 1,
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          <Box
            component="img"
            src={value || DefaultImage}
            alt="order Image"
            sx={{
              width: 150,
              height: 150,
              objectFit: "contain",
              margin: "0 auto",
              borderRadius: "4px",
            }}
          />
        </Grid>
      ),
    },
    {
      field: "boxName",
      headerName: "Box Name",
      minWidth: 150,
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value}
        </Grid>
      ),
      flex: 1,
    },
    {
      field: "clientName",
      headerName: "Client Name",
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value}
        </Grid>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "jobWorkerName",
      headerName: "JobWorker Name",
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value}
        </Grid>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value}
        </Grid>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "jobWorkerRate",
      headerName: "JobWorker Price",
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {parseFloat(value).toFixed(2)}
        </Grid>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "profitPercent",
      headerName: "Profit Percentage",
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value + "%"}
        </Grid>
      ),
      minWidth: 150,
      flex: 1,
    },
    {
      field: "finalRate",
      headerName: "Final Price",
      minWidth: 150,
      renderCell: ({ value }) => (
        <Grid
          container
          height="100%"
          direction="row"
          //justifyContent="center"
          alignItems="center"
        >
          {value}
        </Grid>
      ),
      flex: 1,
    },
    // {
    //   field: "actions",
    //   type: "actions",
    //   align: "left",
    //   headerAlign: "left",
    //   headerName: "Actions",
    //   renderCell: (params) => (
    //     <Box display="flex" gap={1}>
    //       <GridActionsCellItem
    //         sx={{
    //           border: "1px solid",
    //           borderRadius: "5px",
    //           borderColor: "secondary.main",
    //         }}
    //         color="primary"
    //         icon={<EditOutlined />}
    //         label="Edit"
    //         className="textPrimary"
    //         onClick={() => navigate(`edit/${params.row.id}`)}
    //       />
    //       <GridActionsCellItem
    //         sx={{
    //           border: "1px solid",
    //           borderRadius: "5px",
    //           borderColor: "secondary.main",
    //         }}
    //         color="primary"
    //         icon={<InfoOutlined />}
    //         label="View"
    //         onClick={() => navigate(`details/${params.row.id}`)}
    //       />
    //     </Box>
    //   ),
    //   minWidth: 150,
    //   flex: 1,
    // },
  ];

  const flashCards = data?.data.flashCards || [];
  const pendingOrders = data?.data?.orders?.pending || [];
  const completedOrders = data?.data?.orders?.completed || [];

  const pendingInfo: DynamicTable.TableProps = {
    columns: columns,
    rows: pendingOrders,
    rowCount: pendingOrders.length,
    isLoading: isLoading,
    getRowHeight: () => "auto",
    isHeight: false,
  };

  console.log("p : ", pendingOrders, pendingOrders.count);
  console.log("c : ", completedOrders, completedOrders.count);

  const completedInfo: DynamicTable.TableProps = {
    columns: columns,
    rows: completedOrders,
    rowCount: completedOrders.length,
    isLoading: isLoading,
    getRowHeight: () => "auto",
    isHeight: false,
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          flexWrap: "wrap",
        }}
      >
        {flashCards.map((card, index) => (
          <FlashCard key={index} title={card.title} count={card.count} />
        ))}
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h6">Pending Orders</Typography>
        <Table {...pendingInfo} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Completed Orders</Typography>
        <Table {...completedInfo} />
      </Box>
    </Box>
  );
};

export default Dashboard;
