import React from "react"


class searchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return( 
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })} 
            className="field" 
            type="text"></input>
        </div>
      </form>
    </div>
    )
  }
}

export default searchBar;