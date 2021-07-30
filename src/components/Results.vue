<!-- eslint-disable  -->
<template>
  <div class="container">
  <div class="col d-flex justify-content-center">
      <div class="col-sm-10">
        <br><br>
        <h1 class="text-center">Search Results</h1>
        <h5 class="text-center"> Showing {{ items.length }} items</h5>
        <br>
      </div>
      </div>
        <div class="card-deck">
          <div class="card" v-for="(item, index) in items" :key="index">
          <div class="card-body d-flex flex-column">
          <img class="card-img" v-bind:src= "require('../assets/images/' + item.category.split(' ').join('') + '/'+item.category.split(' ').join('') + '.jpeg')">
            <router-link :to="'product'+item.item_id">
            <h5 class="card-title">{{ item.item_name }}</h5>
            </router-link>
                        <a href="#" class="mt-auto btn btn-info">add to cart</a>
          </div>
        </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getSearchResults() {
      const path = `http://127.0.0.1:5000/search?name=${this.$route.query.name}&category=${this.$route.query.category}&description=${this.$route.query.description}&minprice=${this.$route.query.minprice}&maxprice=${this.$route.query.maxprice}&seller=${this.$route.query.seller}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getSearchResults();
  },
};
</script>
