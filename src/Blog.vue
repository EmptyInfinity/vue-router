<template>
    <div class="row">
        <div class="col p-0">
        <h1>Blog {{BlogName}}</h1>
            <div class="post" 
                v-for="(post, index) in posts"
                v-bind:key="index"
                v-bind:style="{ background: 'url('+post.image+')'}">
                <h3>{{ post.title }}</h3>
                <router-link :to="{name: 'post', params: {id: index}}">more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { BlogName } from "./number";
let posts = require("./posts");

export default {
  data: function() {
    return {
      posts: posts,
      BlogName: BlogName
    };
  }
};
</script>