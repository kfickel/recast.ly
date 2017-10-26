var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      maxResults: options.max || '5',
      type: 'video',
      q: options.query,
      videoEmbeddable: 'true'
    },
    success: function(results) {
      window.nextPageToken = results.nextPageToken;
      window.prevPageToken = results.prevPageToken;
      callback(results.items);
    }
  });
};

var moreResults = (options, callback) => {
  
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      key: options.key,
      pageToken: options.pageToken,
      maxResults: options.max || '5',
      type: 'video',
      q: options.query,
      videoEmbeddable: 'true'
    },
    success: function(results) {
      window.nextPageToken = results.nextPageToken;
      window.prevPageToken = results.prevPageToken;
      callback(results.items);
    }
  });
};


window.searchYouTube = searchYouTube;
window.moreResults = moreResults;
