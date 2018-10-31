<template>
    <div class="row">
        <div class="col">
            <div class="post single" 
                v-if="post"
                v-bind:key="post.id">
                <img v-bind:src="post.image" alt="">
                <h3>{{ post.title }}</h3>
                <p> {{ post.body }} </p>
            </div>
						<router-link to="/blog">back</router-link>
        </div>
    </div>
</template>


<script>
let posts = require("./posts");

export default {
  data: function() {
    return {
      posts: posts,
      post: null
    };
  },
  created() {		
    let id = this.$route.params.id;
    this.post = this.posts[id];
  }
};
</script>