import React, { useEffect, useState } from "react";
import "./artist.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import Mycard from "../Body/Mycard";
import SearchArtistService from "../../services/SearchArtistService/searchArtist.service";
import TrackList from "../TrackList/Index";

function ArtistCard() {
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => {
    setSearch(e.target.value);
    SearchArtistkFetchData(search);
  };
  const {
    SearchArtistkFetchData,

    artistData,
  } = SearchArtistService();

  useEffect(() => {
    SearchArtistkFetchData(search);
  }, []);
  console.log("this is my aritst dataaa", artistData);
  return (
    <>
      <div className="header">
        <div className="header_left">
          <input
            className="search"
            value={search}
            onChange={handleChange}
            placeholder="Search for Artists.."
            type="text"
          />
        </div>
      </div>

      <div className="artistList">
        {artistData.map((myartist: any) => (
          <Link key={myartist.id} to={`/ArtistDetail/${myartist.id}`}>
            <Mycard
              p={myartist?.name}
              img={myartist?.images?.length ? myartist?.images[1]?.url : ""}
            ></Mycard>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ArtistCard;
