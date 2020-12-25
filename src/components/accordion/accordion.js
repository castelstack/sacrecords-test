import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { TextSub } from "../../constants/styles/constant.style";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    
  },
  hover: {
    '&:hover': {
      background: "#1CD1A1",
   },
  },
  heading: {
    fontSize: "18px",
    fontWeight: "600",

    lineHeight: "29px",
    fontFamily: "Antic Slab",
  },
  details: {
    backgroundColor: "rgb(235, 233, 233)"
  }
}));

export default function AccordionTab({ title, answer }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion  className={classes.hover}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <TextSub>{answer}</TextSub>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
