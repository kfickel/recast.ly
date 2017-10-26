// TODO: Render the `App` component to the DOM
//variable app 
//console.log('Hi');

// new VideoList(exampleVideoData);
var myYoutubeData = window.exampleVideoData;

// var options = {
//   query: 'dogs',
//   max: '5',
//   key: window.YOUTUBE_API_KEY
// };
// window.searchYouTube(options, (results) => {
  
// });
ReactDOM.render(<App searchYouTube={searchYouTube} />, document.getElementById('app'));
// ReactDOM.render(<App videos={window.exampleVideoData} />, document.getElementById('app'));

//search bar 
//change video list entries


