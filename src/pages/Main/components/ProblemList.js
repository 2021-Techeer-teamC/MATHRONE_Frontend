import * as React from "react";
import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import List from "@mui/material/List";
import Gold from "../../../assets/image/gold-medal.png";
import Silver from "../../../assets/image/silver-medal.png";
import Bronze from "../../../assets/image/bronze-medal.png";
import Pencil from "../../../assets/image/pencil.png";

import Link from "@mui/material/Link";

const ProbList = ({ data, title }) => {
  let icon = {
    1: Bronze,
    2: Silver,
    3: Gold,
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={10}>
          <div className="problemlist-div">
            <label className="problemlist-title">
              {title}
            </label>
            <Link
              className="problemlist-link"
              href="#"
              underline="hover"
            >
              {"더보기"}
            </Link>
          </div>
          {data.length !== 0 ? (
            <List>
              {data.slice(0, 10).map((item) => (
                <ListItem>
                  <ListItemText
                    primary={
                      item.workbook_title + " " + item.problem_num + "번"
                    }
                    secondary={item.subject + " - " + item.chapter}
                  />
                  <ListItemIcon>
                    <img src={icon[item.level]} width="30px" alt="list-item-img"/>
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          ) : (
            <div
              className="problemlist-div-none"
            >
              <img src={Pencil} width="100px" alt="pencil"/>
              <label className="problemlist-label-none">
                충분한 데이터가 수집되지 않았습니다.
              </label>
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ProbList;
