import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  List,
  ListItem,
  ListItemText,
  Box
} from "@material-ui/core/index";
import { ExpandMore } from "@material-ui/icons";

const Friends = ({ friends = [] }) => {
  if (friends.length === 0) return <Box>There are no friends</Box>;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>List of friends({friends.length})</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List component="nav" aria-label="Secondary mailbox folders">
          {friends.map(friend => (
            <ListItem key={friend} button>
              <ListItemText primary={friend} />
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Friends;
