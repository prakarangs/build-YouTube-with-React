import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyCkZAXolalLytCSJalKmett24kO9OkJ3Hg";


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.querySelector(".container"));

// Note
// ----
// const is like var
// But it indicates that this variable will never changed
// 1.This of this function as a factory that produces instances that get rendered to the DOM.
// 2.We need to instantiating the component before passing to the DOM
// 3. Tell React where to put it on the page
// => is fat arrow : is identical to use a function keyword
// Downward Data Flow
