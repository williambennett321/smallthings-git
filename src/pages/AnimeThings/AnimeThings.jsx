import React from "react";
import ThingCard from "../../components/ThingCard/ThingCard";
import { Link } from "react-router-dom"

const AnimeThings = (props) => {
  return (
    <div>
    <Link to="/">Home</Link>

    {props.things.map((thing, idx) =>
    <ThingCard key={idx} thing={thing}
    />
    )}

    </div>
  )
}

export default AnimeThings