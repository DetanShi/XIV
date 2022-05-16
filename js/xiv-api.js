//Caller function for querying any Json formatted API
var getJson = function(url, callback) {
    var response = new XMLHttpRequest();
    response.open('GET', url, true);
    response.responseType = 'json';
    response.onload = function() {
      var status = response.status;
      if (status === 200) {
        callback(null, response.response);
      } else {
        callback(status, response.response);
      }
    };
    response.send();
};

function get_character(world, name) {

    getJSON(`https://xivapi.com/character/search?name=${name}&server=${world}`,function(err, data) {
    if (err !== null) {
        alert('Something went wrong: ' + err);
    } else {
        document.getElementById('debug').innerHTML = data
    }
    });

}