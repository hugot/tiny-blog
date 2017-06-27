<template>
  <div id="post">
    <div id="top-bar">
      <button id="back-button" v-on:click="$router.push('/')">
        &larr; Go back
      </button>
      <h4>{{post.title}}</h4> 
    </div>
    <p>{{post.content}}</p>
  </div>
</template>

<script>
var getPost = require('@/data/api.js').getPost;

export default {
  name: 'post',
  data: function () {
    return { 'post': {} };
  },
  created: function () {
    var self = this;
    getPost(function (response) {
        self.post = response;
      }, this.$route.params.postname);
  }
}
</script>

<style scoped>
#post {
  height: 100%;
}

#top-bar {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
}

#top-bar h4 {
  height: 40px;
  margin: 0px;
  padding: 0px;
  line-height: 40px;
  float: left;
  margin-left: 20px;
}

#back-button {
  background-color:white;
  width: 200px;
  height: 100%;
  float: left;
}

#back-button:hover {
  background-color: lightgray;
}
</style>
