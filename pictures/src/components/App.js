
import React from "react"
import unsplashapi from '../API/unsplashapi'
import SearchBar from "./searchBar";
import ImageList from "./ImageList";


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
   const response = await unsplashapi.get('/search/photos', { 
      params: { query: term},
    });
  
    this.setState({ images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar 
          onSubmit={this.onSearchSubmit}
        />
        <ImageList 
          images={this.state.images}
        />
      </div>
    );
  }
}

export default App;