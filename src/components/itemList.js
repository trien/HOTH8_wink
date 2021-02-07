import React, { useState, useEffect  } from "react";
import api from "../winkApi";
import Item from './item'


import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

// import items from '../stub/event.json'

const gridStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }));


export default function ItemListCard() {

  const [items, setItems] = useState([]);
  const gClasses = gridStyles();
  useEffect(() => {
    api.getEvents((events) => {
      setItems(events)
    })
  }, []);
  
  return (
    <div className={gClasses.root}>
        <GridList cellHeight={500} className={gClasses.gridList}>
        {items.map((item, key) => 
          <Item item={item} key={key}/>
        )}
        </GridList>
    </div>
  );
}
