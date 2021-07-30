<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1 class = "my-5"> Your Cart </h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Quantity </th>
              <th scope="col">Price </th>
              <th style="width: 15%"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>
              <router-link :to="'product'+item.item_id">
              {{ item.item_name }}
              </router-link></td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.item_price }}</td>
              <td>
                <div class="btn-group" role="group">
                  <router-link :to="'removefromcart'+item.item_id">
                  <button type="button" class="btn btn-warning btn-sm">Remove</button>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <b-form @submit="onSubmit" class="w-100">
          <button type="submit" v-on:click="onSubmit()">Checkout</button>
        </b-form>
        <br></br>
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
      addToCartForm: {
        buyer_email: '',
      },
    };
  },
  methods: {
    getItems() {
      const path = `http://localhost:5000/cart${this.$root.user}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.trans;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    checkoutCart(payload) {
      const path = 'http://localhost:5000/checkout';
      axios.post(path, payload)
        .then(() => {
          this.getItems();
        })
        .catch((error) => {
          console.log(error);
          this.getItems();
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        buyer_email: `${this.$root.user}`,
      };
      this.checkoutCart(payload);
      this.$router.push({ name: 'Home' });
    },
    onReset(evt) {
      evt.preventDefault();
    },
  },
  created() {
    this.getItems();
  },
};
</script>
