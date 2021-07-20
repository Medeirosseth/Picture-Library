import React from "react"


class searchBar extends React.Component {
  render() {
    return( 
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input className="field" type="text"></input>
        </div>
      </form>
    </div>
    )
  }
}


export default searchBar;