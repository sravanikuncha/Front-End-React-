import { Component } from "react";
import AnimeCard from "./AnimeCard";


// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const anime=this.props.anime;
    const animeArr=anime.map((eachAnime,index)=>(
      <AnimeCard key={index} data={eachAnime}/>
    ))
    return <div className="anime-list">
      {animeArr}
    </div>;
  }
}

export default AnimeList;
