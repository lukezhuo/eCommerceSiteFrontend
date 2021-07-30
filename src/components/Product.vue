<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */



<template>
  <div class="container" >
    <br><br>
    <div class>
      <div class="row justify-content-center">
        <div  v-for="(item, index) in items" :key="index">
          <h2 class = "text-center"> {{ item.item_name}} </h2>
            <img class="card-img img-fluid max-width: 50%" v-bind:src= "require('../assets/images/' + item.category.split(' ').join('') + '/'+item.category.split(' ').join('') + '.jpeg')"">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${{ item.item_price }}</h5>
              <div v-if='reviews'>
                  <svg v-for="n in item.avgrating.toFixed(2)" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
              </div>
              <br>
              <p class="card-text">{{ item.description }}</p>
              <p class="card-text"> Number in Stock: {{ item.quantity }}</p>
                <td>
                  <div class="btn-group" role="group">
                    <router-link :to="'addtocart'+item.item_id">
                    <button type="button" class="btn btn-warning btn-sm">Add To Cart</button>
                    </router-link>
                    </div>
                    </td>
             </div>
          </div>
        </div>
      </div>
      <br>
        <div class="row justify-content-center">

          <h3> Reviews</h3>

        </div>
          <hr/>
          <div v-if='reviews[0].item_id != 0'>
        <div class = "row" v-for="(review, index) in reviews" :key="index">
          <div>
          <p class="text-success"> <strong>{{ review.buyername }}</strong></p>
          <div >
              <svg v-for="n in review.stars" width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="green" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
          </div>
          <br>
          <p> {{ review.date }}</p>
          <p> <strong>{{ review.notes }}</strong></p>
          <hr/>
          </div>
        </div>
      </div>
      <div v-else>
        <p> <strong> No reviews yet!</strong></p>
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
    getOneItem() {
      const path = `http://127.0.0.1:5000/getitem/${this.$route.params.id}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
          this.reviews = res.data.reviews;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    this.getOneItem();
  },
};
</script>
