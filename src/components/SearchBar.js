import React from "react";

class SearchBar extends React.Component{

state = {term : ''};

// onInputChange(event) {
//     console.log(event.target.value);
// }

// onInputClick(){
//     console.log("Input is Clicked");
// }

onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
    console.log(this.state.term)
}

render () {
    return(
        <form onSubmit={this.onFormSubmit}>
        <label className="inputLabel">Enter your Name:</label>
        <div class="ui large icon input">
        <input type="text" placeholder="Type here..."
        value={this.state.term} 
        onClick={this.onInputClick} 
        onChange={e => this.setState({term: e.target.value})}/>
        </div>
        </form>
    )
}
}

export default SearchBar;
