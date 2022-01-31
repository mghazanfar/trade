import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    actions: {
      display: "flex",
      justifyContent:"flex-end"
    },
    buyButton: {
      marginRight: 12,
    },
  })
);

interface TradeListProps {
  expandableData: any[];
}

export default function TradeList({ expandableData }: TradeListProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={classes.root}>
      <Box component="h1" my={2}>
        Assets
      </Box>
      {expandableData.map((item) => (
        <Accordion
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>{item.name}</Typography>
            <Typography className={classes.secondaryHeading}>
              {item.symbol} --- Price in USD: {item.metrics.market_data.price_usd}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box>
              <Typography>
                <Box
                  dangerouslySetInnerHTML={{
                    __html: item.profile.technology.overview.technology_details,
                  }}
                />
              </Typography>
              <Box className={classes.actions}>
                <Button
                  color="primary"
                  variant="contained"
                  className={classes.buyButton}
                >
                  Buy
                </Button>
                <Button variant="contained" color="secondary">
                  Sell
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
