<template>
  <div id="posts">
    <button class="post-listing" v-on:click="showPost(post.title)" v-for="post in posts">
       <h4>{{post.title}}</h4> 
       <div class="image-wrapper"><img src="" /></div>
       <br/>
       <p>{{post.content}}</p>
    </button>
    <button class="post-listing">
      <h4>titel</h4> 
       <div class="image-wrapper"><img src="" /></div>
       <p>tekst</p>
    </button>
  </div>
</template>

<script>
var getPosts = require('@/data/api.js').getPosts;
var posts;

export default {
  name: 'posts',
  created: function () {
    var self = this;
    getPosts(function (response) {
      self.posts = response;
    });
  },
  data: function() {
    return { 'posts': {}};
  },
  methods: {
    showPost: function (postName) {
      this.$router.push('/post/' + postName)
    }
  }
}
</script>

<style scoped>
#posts {
  height:450px;
  width: 490px;
  float: left;
  overflow: auto;
}

.post-listing {
  height: 160px;
  width: 100%;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background-color: white;
}

.post-listing:hover {
  background-color: lightblue;
}

.post-listing p {
  float: left;
  margin: 0;
  padding: 0;
}

.image-wrapper {
  height: 120px;
  width: 200px;
  border: 1px solid black;
  overflow: hidden;
  float: left;
  display: block;
  margin: 2px;
}

.post-listing h4 {
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid grey;
}

</style>
