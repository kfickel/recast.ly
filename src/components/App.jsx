class App extends React.Component {
  constructor (props) {
    super(props);
   
    this.state = {
      playerVideo: this.props.videos[0],
      videos: this.props.videos
      // query: input.value
    };
   
    this.onListEntryClick = this.onListEntryClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
  }
  

  onListEntryClick(video) {
    this.setState ({
      playerVideo: video
    });
  }

  onSearchClick(search) {
    console.log('on search click');
    var options = {
      query: 'dogs',
      max: '5',
      key: window.YOUTUBE_API_KEY
    };
    window.searchYouTube(options, (results) => {
      this.setState ({
        playerVideo: results[0],
        videos: results 
      });
      // videos: 
    });

  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchClick={this.onSearchClick}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos} onListEntryClick={this.onListEntryClick} />
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
