class App extends React.Component {
  constructor (props) {
    super(props);
  
    this.state = {
      playerVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData,
      query: '',
      hasQueriedRecently: false
    };
   
    this.onListEntryClick = this.onListEntryClick.bind(this);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    this.onSearchClick();
  }
  

  onListEntryClick(video) {
    this.setState ({
      playerVideo: video
    });
  }

  onSearchClick() {
    if (!this.state.hasQueriedRecently) {
      var options = {
        query: this.state.query,
        max: '5',
        key: window.YOUTUBE_API_KEY
      };
      this.props.searchYouTube(options, (results) => {
        this.setState ({
          playerVideo: results[0],
          videos: results, 
          hasQueriedRecently: true
        });
        // videos: 
      });
      setTimeout(() => {
        this.setState({hasQueriedRecently: false});
      }, 500);
    }
  }
  onSearchChange(event) {
    if (!this.state.hasQueriedRecently) {
      this.setState ({
        query: event.target.value,
        hasQueriedRecently: true
      });
      var options = {
        query: event.target.value,
        max: '5',
        key: window.YOUTUBE_API_KEY
      };
      this.props.searchYouTube(options, (results) => {
        this.setState ({
          playerVideo: results[0],
          videos: results 
        });
        // videos: 
      });

      setTimeout(() => {
        this.setState({hasQueriedRecently: false});
      }, 500);
    }
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
            <VideoList videos={this.state.videos} onListEntryClick={this.onListEntryClick} />
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
