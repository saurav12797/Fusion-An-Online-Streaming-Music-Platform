import React, { useEffect } from "react";
import "./Body.css";
import { Switch, Route, Link } from "react-router-dom";
import Library from "../Library/Nav/Index";
import Mycard from "./Mycard";
import Search from "../../shared/searchBar/index";
import LatestReleaseService from "../../services/LatestReleaseService/latestRelease.service";

function Body() {
  const {
    latestData,
    LatestReleaseFetchData,
    LatestCategoryFetchData,
    latestCategory,
  } = LatestReleaseService();
  useEffect(() => {
    LatestReleaseFetchData();
    LatestCategoryFetchData();
  }, []);

  console.log("this is my latest Prodcast data", latestData);
  console.log("this is my latest CATEGORY data", latestCategory);
  return (
    <div className="body">
      <div className="body_info">
        <h2>Top Category</h2>
        {/* 
        <Mycard className="prodcastCard" p={`sk`} img={`mk`} /> */}

        {latestCategory.map((myprodcast: any) => (
          <Mycard
            key={myprodcast?.id}
            className="prodcastCard"
            p={myprodcast?.name}
            img={myprodcast?.icons?.length ? myprodcast?.icons[0]?.url : ""}
          />
        ))}
        {/* 
        <Mycard p={Prodcast[0].p} img={Prodcast[0].img} />
        <Mycard p={Prodcast[1].p} img={Prodcast[1].img} />
        <Mycard p={Prodcast[2].p} img={Prodcast[2].img} />
        <Mycard p={Prodcast[3].p} img={Prodcast[3].img} /> */}

        <Switch>
          <Route path="/"></Route>
          <Route path="/Search" component={Search}></Route>
          <Route path="/Library" component={Library}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Body;
