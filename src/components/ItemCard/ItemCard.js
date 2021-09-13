import React, { useState } from "react";
import { toast } from "react-toastify";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import Paragraph from "antd/lib/typography/Paragraph";
import { Popover } from "antd";

import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import popcorn from "../../popcornimg";

import { addRating } from "../../api/ratingsApi";

import { useStyles, StyledRating } from "./Style";
import "./ItemCard.css";

function ItemCard({ item }) {
  const [hoveredRating, setHoveredRating] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  const goToMovie = () => history.push(`/item/${item.id}`);

  const addRatingForUser = (e, newVal) => {
    if (localStorage.getItem("session") == null) {
      toast.error("You need to login to rate items!");
      return;
    }

    addRating(newVal, item.id)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <div className="single-card">
      <Card className={classes.root}>
        <CardActionArea onClick={goToMovie}>
          <CardMedia
            className={classes.media}
            image={item.image_Url === "" ? popcorn : item.image_Url}
            title="Image"
          ></CardMedia>
          <div className={classes.title}>
            <Paragraph ellipsis={{ rows: 2, expandable: false }}>
              {item.title}
            </Paragraph>
          </div>
        </CardActionArea>
        <CardContent>
          <div>
            <Popover
              content={
                <p>
                  Leave a rating of{" "}
                  {hoveredRating >= 0 && hoveredRating <= 5
                    ? hoveredRating
                    : ""}
                </p>
              }
              placement="bottom"
            >
              <StyledRating
                name={`rating-${item.id}`}
                style={{ marginBottom: 10 }}
                value={item.averageRating}
                precision={0.1}
                onChangeActive={(e, val) => setHoveredRating(val)}
                onChange={addRatingForUser}
              />
            </Popover>
          </div>
          <div
            className={classes.ellipsis}
            style={{ color: "var(--grey-color)" }}
          >
            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
              {item.description}
            </Paragraph>
          </div>
        </CardContent>
        <CardActions className={classes.align}>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={goToMovie}
          >
            GO TO MOVIE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default ItemCard;
