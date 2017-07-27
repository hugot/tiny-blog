/**
 * Dit is een module waarmee data opgevraagd kan worden van de API
 *
 * English please?
 */

/**
 * [ajaxCall description]
 * @param  {String} method    [A method used in the request]
 * @param  {String} address   [An address used in the request]
 * @return {Promise.<String>} [A promise resolving to the responseText of the request]
 */
function ajaxCall (method, address) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest()
    xhr.open(method, address, true)
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return
      if (this.status !== 200) {
        return console.log('response geeft errorcode' + this.status)
      }
      resolve(this.responseText)
    }
    xhr.send()
  })
}

/**
 * [parseObjectFrom description]
 * @param  {String} address     [An address used in the request]
 * @return {Promise.<Object>}   [A promise resolving to an object]
 */
function parseObjectFrom (address) {
  return new Promise((resolve, reject) => {
    const responseText = await ajaxCall('GET', '/api/' + address)
    resolve(JSON.parse(responseText))
  })
}

/**
 * [getPosts description]
 * @return {Promise.<Object>}  [A promise resolving to an object]
 */
function getPosts () {
  return new Promise((resolve, reject) => {
    const data = await parseObjectFrom('posts')
    resolve(data.posts)
  })
}

/**
 * [getPost description]
 * @return {Promise.<Object>}  [A promise resolving to an object]
 */
function getPost (postName) {
  return new Promise((resolve, reject) => {
    const data = await parseObjectFrom('post')
    resolve(data)
  })
}

module.exports = {
  getPosts: getPosts,
  getPost: getPost
}
