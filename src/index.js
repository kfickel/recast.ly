// TODO: Render the `App` component to the DOM
//variable app 
//console.log('Hi');

// new VideoList(exampleVideoData);
var myYoutubeData = window.exampleVideoData;
console.log(myYoutubeData);


ReactDOM.render(<App videos={window.exampleVideoData} />, document.getElementById('app'));

