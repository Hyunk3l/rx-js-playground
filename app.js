

var requestStream = Rx.Observable.just('https://api.github.com/users');

var table = document.createElement('table');
var

requestStream.subscribe(function(requestUrl) {
    jQuery.getJSON(requestUrl, function(responseData) {
        console.log(responseData);
    });
});