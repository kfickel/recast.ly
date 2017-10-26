class App extends React.Component {
  constructor (props) {
    super(props);
   
    this.state = {
      playerVideo: this.props.videos[0].id.videoId,
      videos: this.props.videos
    };
   
    this.onListEntryClick = this.onListEntryClick.bind(this);
  }
  

  onListEntryClick(id) {
    console.log(id);
    this.setState ({
      playerVideo: id
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.videos[0]} videoId={this.state.playerVideo}/>
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
