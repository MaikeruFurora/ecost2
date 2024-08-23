import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Paginations = ({ page, limit, onHandleChange, showPage = false, limitPerPage = 10 }) => {
  const itemsPerPage = parseInt(limitPerPage, 10);

  const handlePageChange = (event, newPage) => {
      if (onHandleChange) {
          onHandleChange(newPage); // Pass only the page number
      }
  };

  return (
      <Stack spacing={2}>
          {showPage && <Typography>Page: {page}</Typography>}
          <Pagination
              color="primary"
              onChange={handlePageChange}
              count={Math.ceil(parseInt(limit, 10) / itemsPerPage)}
              page={parseInt(page, 10)}
              shape="rounded"
              variant="outlined" 
              size="medium"
          />
      </Stack>
  );
};


export default Paginations;
