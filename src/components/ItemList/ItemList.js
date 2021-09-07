import React, { useState } from "react";

import ItemCard from "../ItemCard/ItemCard";
import Button from "@material-ui/core/Button";

import { useStyles } from "../ItemCard/Style";
import "./ItemList.css";

function ItemList({ itemList }) {
  const classes = useStyles();
  const [more, setMore] = useState(10);

  const showMore = () => setMore((prevState) => prevState + 10);

  // pairing logic for cards with show more
  const rows = itemList.slice(0, more).reduce(function (rows, key, index) {
    return (
      (index % 2 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <div className="item-list">
      <div className="item-pair-list">
        {rows.map((x, index) => {
          return (
            <div className="pair-item" key={`pair-item-${index}`}>
              <div>
                <ItemCard item={x[0]} />
              </div>
              {x[1] != null && (
                <div>
                  <ItemCard item={x[1]} />
                </div>
              )}
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
