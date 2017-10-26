class App extends React.Component {
  constructor (props) {
    super(props);
   
    this.state = {
      playerVideo: this.props.videos[0],
      videos: this.props.videos,
      query: 'dogs'
    };
   
    this.onListEntryClick = this.onListEntryClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }
  

  onListEntryClick(video) {
    this.setState ({
      playerVideo: video
    });
  }

  onSearchClick() {
    var options = {
      query: this.state.query,
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
  onSearchChange(event) {
    console.dir(event);
    this.setState ({
      query: event.target.value
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchClick={this.onSearchClick} onSearchChange={this.onSearchChange}/>
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
