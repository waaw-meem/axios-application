import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
    onSearchApp(term){
    //    console.log(term); For Testing purpose
    axios.get('https://api.unsplash.com/search/photos',{
    params : { query: term},
    headers : {
        Authorization: 'Client-ID LVUAKl58SZ-lWMvWPFSy5pbKIajsUS8Wz-6L4P0upl8'
    }}

    )
    
    }

    render(){
    return (
        <div className="ui container main_box" style={{marginTop:'10px'}}>
        <SearchBar onSubmit={this.onSearchApp}/>
        </div>
    )
    }
}

export default App;

