/**
 * Dit is een module waarmee data opgevraagd kan worden van de API
 */

function ajaxCall (method, address, readyStateAction) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, address, true);
  xhr.onreadystatechange = function () {
    if (this.readyState !== 4) return;
    if (this.status !== 200) {
      console.log('response geeft errorcode' + this.status);
      return;
    }
    readyStateAction(this.responseText);
  }
  xhr.send();
}

function parseObjectFrom (address, callback) {
  ajaxCall('GET', '/api/' + address, function (responseText) {
    callback(JSON.parse(responseText));
  });
}

function isCallBack (func) {
  if (typeof func === 'function') return true;
  else return false;
}

function getPosts (callback) {
  if (isCallBack(callback)) {
    parseObjectFrom('posts', function (data) {
      callback(data.posts);
    });
  } else {
    console.error('getPosts needs a callback');
  }
}

function getPost (callback, postName) {
  if (isCallBack(callback)) {
    parseObjectFrom('post', function (data) {
      callback(data);
    });
  } else {
    console.error('getPost needs a callback');
  }
}

module.exports = {
  getPosts: getPosts,
  getPost: getPost
}
