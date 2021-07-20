
import React from "react"
import axios from "axios";
import SearchBar from "./searchBar";


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', { 
      params: { query: term},
      headers: {
        Authorization: "Client-ID 2irqapHY0sIY2sqYZc9B3UzLPP1k14Eun8xYU791IUk"
      }
    })

  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;