<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

<template>
  <div class="container" >
    <br><br>
    <div>
      <div class="row">
        <div  v-for="(item, index) in items" :key="index">
          <h3>Remove from Cart: </h3>
          <h4> {{ item.item_name}} </h4>
            <b-form @submit="onSubmit" class="w-100">
            <b-form-group id="form-quantity-group"
                          label="Quantity:"
                          label-for="form-quantity-input">
                <b-form-input id="form-quantity-input"
                              type="text"
                              v-model="removeFromCart.quantity"
                              required
                              placeholder="Quantity">
                </b-form-input>
            </b-form-group>
            <button type="submit" v-on:click="onSubmit()">Remove from Cart</button>
            </b-form>
        </div>
      </div>
      <div class="row">
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
      removeFromCartForm: {
        item_id: '',
        buyer_email: 'Copnovelist@gmail.com',
      },
    };
  },
  methods: {
    getOneItem() {
      const path = `http://127.0.0.1:5000/getitem/${this.$route.params.id}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    removeFromCart(payload) {
      const path = 'http://localhost:5000/removefromcart';
      axios.post(path, payload)
        .catch((error) => {
          console.error(error);
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        item_id: this.items[0].item_id,
        buyer_email: 'Copnovelist@gmail.com',
      };
      this.removeFromCart(payload);
      this.$router.push({ name: 'Cart' });
    },
    onReset(evt) {
      evt.preventDefault();
    },
  },
  created() {
    this.getOneItem();
  },
};
</script>
