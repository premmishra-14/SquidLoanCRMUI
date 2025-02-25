import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Toolbar,
  Typography,
  Checkbox,
  Button,
  Menu,
  MenuItem,
  TextField,
  TableSortLabel,
} from "@mui/material";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const DataTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [selected, setSelected] = React.useState([]);
  const rows = props.rows;
  const column = props.columns;
  const open = Boolean(anchorEl);

  // const column = ["name", "calories", "fat", "carbs", "protein"];

  // const rows = [
  //   { id: 1, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  //   { id: 2, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  //   { id: 3, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  //   { id: 4, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  //   { id: 5, name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  //   { id: 6, name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  //   { id: 7, name: "Donut", calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  //   { id: 8, name: "Eclair", calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  //   { id: 9, name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  //   { id: 10, name: "Gingerbread", calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  // ];

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      setSelected(rows.map((row) => row.id));
    } else {
      setSelected([]);
    }
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = selectedIndex === -1 
      ? [...selected, id] 
      : selected.filter((item) => item !== id);

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Filtering the rows based on search query
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting the filtered rows
  const sortedRows = [...filteredRows].sort((a, b) => {
    if (order === "asc") {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });

  // Paginating the sorted rows
  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.csv");
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [column.map((col) => col.charAt(0).toUpperCase() + col.slice(1))],
      body: rows.map((row) => [row.name, row.calories, row.fat, row.carbs, row.protein]),
    });
    doc.save("data.pdf");
  };

  const exportToJSON = () => {
    const jsonData = JSON.stringify(rows, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "data.json");
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2, p: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flex: "1 1 100%" }}>Nutrition Table</Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mr: 2 }}
          />
          <Button onClick={handleMenuClick} variant="contained" color="primary" sx={{px:5}}>Download</Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose} sx={{px:10,'& .MuiMenuItem-root': { width: 140 }}}>
            <MenuItem onClick={exportToCSV}>CSV File</MenuItem>
            <MenuItem onClick={exportToExcel}>Excel File</MenuItem>
            <MenuItem onClick={exportToPDF}>PDF File</MenuItem>
            <MenuItem onClick={exportToJSON}>JSON</MenuItem>
          </Menu>
        </Toolbar>
        <TableContainer>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < rows.length}
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                {column.map((column) => (
                  <TableCell key={column} align="left">
                    <TableSortLabel
                      active={orderBy === column}
                      direction={orderBy === column ? order : "asc"}
                      onClick={() => handleRequestSort(column)}
                      sx={{ fontWeight: "bold" }}
                    >
                      {column.charAt(0).toUpperCase() + column.slice(1)}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => {
                const isItemSelected = isSelected(row.id);
                return (
                  <TableRow key={row.id} selected={isItemSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleClick(row.id)}
                      />
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.loan_id}</TableCell>
                    <TableCell align="left">{row.customer_id}</TableCell>
                    <TableCell align="left">{row.laon_amount}</TableCell>
                    <TableCell align="left">{row.loan_status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => setRowsPerPage(parseInt(event.target.value, 10))}
        />
      </Paper>
    </Box>
  );
};

export default DataTable;
