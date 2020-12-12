import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList'
import VideoDetail from './videoDetail'
class App extends React.Component {
    state = {
    video : [],
    selectedVideo : null
    }
    componentDidMount(){
        this.onTermSubmit('building')
    }
    onTermSubmit = async(term) =>{
//    console.log("term =", term); 
 const response = await youtube.get('/search',{
    params : {
        q : term
    }
}).catch(err => console.log("err to fetch videos", err))
// this.state.video = response.data.items;
this.setState({
    video : response.data.items,
    selectedVideo : response.data.items[0]
})

};
onVideoSelect = (video) =>{
   this.setState({selectedVideo : video})
}
    render() {
        console.log("this.state.selectedVideo", this.state.selectedVideo);
        return (
            <div className = "ui container">
                <SearchBar onTermSubmit={this.onTermSubmit }/>
                <div className="ui grid">
                    <div className="ui row"> 
                    <div className ="eleven wide column"> 
                    <VideoDetail video = {this.state.selectedVideo}/>
                         </div>
                    <div className="five wide column"> 
                    <VideoList videos = {this.state.video} onVideoSelect={this.onVideoSelect}/>
                    </div>
                 
                    </div>
                
             </div>
               
            </div>
        )
    }
}

export default App;