import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import "./style.css";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 7,
    overflowX: "auto",
    height: "70%",
    padding: 10
  },
  table: {
    minWidth: "100%",
    padding: 10
  }
});

function createRow(id, Artist, Date, Location, Time, Ticket) {
  return { id, Artist, Date, Location, Time, Ticket };
}

const rows = [
  ["Arctic Monkeys", "08/19", "Hollywood Bowl", "9:00PM", "link2tickets"],
  [
    "Death Cab for Cutie",
    "08/11",
    "Hollywood Bowl",
    "7:00PM",
    "https://my.hollywoodbowl.com/syos/performance/3889?_ga=2.18352121.1982955710.1557725650-364484445.1557725650"
  ],
  [
    "Adam Melchor",
    "06/21",
    "The Morrocan",
    "9:30PM",
    "https://www.themoroccan.com/event/1833186-adam-melchor-los-angeles/"
  ],
  [
    "The Strokes",
    "05/13",
    "The Western",
    "7:00 PM",
    "https://concerts1.livenation.com/event/0900567C1"
  ]
].map((row, id) => createRow(id, ...row));

function SpanningTable(props) {
  const { classes } = props;
  console.log(props.artists);
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Artist</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Venue</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Ticket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.artists.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.venue_name}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">
                <Button variant="contained">
                  <a href={row.url} target="_blank">
                    Ticket Info
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SpanningTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpanningTable);
