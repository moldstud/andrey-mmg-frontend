import React, { useState, useEffect } from "react";

import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Avatar,
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
  TablePagination
} from "@material-ui/core/index";
import { ExpandMore } from "@material-ui/icons";
import Friends from "./Friends";

const CHANGE_FONT_COLOR = "Black";

const City = ({ city: { isFetching: isCityFetching, error, people = [] } }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPeople, setCurrentPeople] = useState([]);

  const handleSetPage = (event, newPage) => setPage(newPage);
  const handleSetRowsPerPage = event => setRowsPerPage(+event.target.value);

  const handleUpdatePage = () => {
    setCurrentPeople(
      people.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    );
  };

  useEffect(handleUpdatePage, [page, rowsPerPage, people]);

  return (
    <div>
      <Paper>
        {isCityFetching && <CircularProgress />}
        {error && <div>{error}</div>}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Thumbnail</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Hair color</TableCell>
              <TableCell align="right">Friends</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPeople.map(person => (
              <TableRow key={person.name}>
                <TableCell component="th" scope="row">
                  {person.id}
                </TableCell>
                <TableCell align="right">
                  <Avatar alt="Remy Sharp" src={person.thumbnail} />
                </TableCell>
                <TableCell align="right">{person.name}</TableCell>
                <TableCell align="right">{person.age}</TableCell>
                <TableCell align="right">
                  <Box
                    bgcolor={person.hair_color}
                    color={detectColor(person.hair_color)}
                    p={1}
                  >
                    {person.hair_color}
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Friends friends={person.friends} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={people.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleSetPage}
          onChangeRowsPerPage={handleSetRowsPerPage}
        />
      </Paper>
    </div>
  );
};

const detectColor = color => (color === CHANGE_FONT_COLOR ? "white" : "black");

export default City;
