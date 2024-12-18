import React from "react";
import musics from "../source";

// components
import Hero from "./Hero";
import Grid from "./Grid";
import Card from "./Card";
import Spinner from "./Spinner";

const Home = () => {
  return (
    <>
      <Hero musics={musics} />
      <Grid header="My PlayList">
        {musics.map((music) => (
          <Card key={music.id} {...music} />
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
