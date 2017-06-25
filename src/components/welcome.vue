<template>
  <div id="welcome">
  <section id="welcome-message">
    <header><h2>{{ message.title }}</h2></header>
    <p>{{ message.text }}</p>
  </section>
  <posts/>
  </div>
</template>

<script>

import Posts from '@/components/Posts';
export default {
  name: 'Welcome',
  components: {
    'posts': Posts
  },
  data () {
    return {
      message: {
        title: 'welcome',
        text: 'Welcome to my blog'
      }
    }
  }
}
</script>

<style>
#welcome {
  height:450px;
  width: 980px;
  padding: 10px;
}

#welcome-message {
  border-right: 2px solid black;
  float: left;
  height: 450px;
  width: 488px;
}

</style>
