import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";
import Button from "@material-ui/core/Button";

import { useStyles } from "../ItemCard/Style";
import "./ItemList.css";

function ItemList({ itemList }) {
  const classes = useStyles();
  const [more, setMore] = useState(10);

  const showMore = () => setMore((prevState) => prevState + 10);

  return (
    <div className="item-list">
      <div className="item-item-list">
        {itemList.slice(0, more).map((x, index) => {
          return (
            <div className="single-item" key={index}>
              <ItemCard item={x} />
            </div>
          );
        })}
      </div>
      <div
        className={`item-list-show-more ${more >= itemList.length && "hidden"}`}
      >
        <Button
          variant="outlined"
          className={classes.button}
          onClick={showMore}
        >
          VIEW MORE RESULTS
        </Button>
      </div>
    </div>
  );
}

export default ItemList;
