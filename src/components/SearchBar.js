import React from 'react';

class SearchBar extends React.Component {
    state = {term : ''};
    onInputChange = (event) =>{
        this.setState({
            term : event.target.value
        })
    }
    onFormSubmit = event =>{
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
        };
    render(){
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                  <div className="filed">
                      <label> Video Search </label>
                      <input type="text" 
                      onChange={this.onInputChange}
                       value={this.state.term}/>

                  </div>
                </form>


            </div>
        )
    }

}

export default SearchBar ;