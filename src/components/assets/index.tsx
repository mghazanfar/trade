import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';
import { useQuery } from 'react-query';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export default function CryptoAssets(props:any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [options, setOptions] = useState([]);

  const fetchProjects = (page = 0) =>
    axios
      .get("https://data.messari.io/api/v2/assets?page=" + page)
      .then((res) => {
        return res.data.data;
      });

  const { data, isLoading } =
    useQuery(["projects"], () => fetchProjects(1), {
      keepPreviousData: true,
    });

  useEffect(()=>{
      if(data && data.length){
          setOptions(data);
          let value = data[selectedIndex].metrics.market_data.price_usd
          props.onItemChange(value)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data]);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number, value:any) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    props.onItemChange(value)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
          disabled={isLoading}
        >
          <ListItemText primary={isLoading ? "Loading..." : `Currency: ${(options.length>0) ? (options[selectedIndex] as any).name : ""}`} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option:any, index) => (
          <MenuItem
            key={option.id}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option.metrics.market_data.price_usd)}
          >
            {option.name} - {option.symbol}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
