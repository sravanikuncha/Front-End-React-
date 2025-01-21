import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const animeData=this.props.data;

    return <div className="anime-card">
      <img src={animeData.image} alt={animeData.name} />
        <p>{animeData.name}</p>
    </div>;
  }
}

export default AnimeCard;
