<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

<template>
  <div class="container" >
    <br><br>
      <div class="row">
        <div  v-for="(item, index) in items" :key="index">
          <h3>Add to cart: </h3>
          <h4> {{ item.item_name}} </h4>
            <b-form @submit="onSubmit" class="w-100">
            <b-form-group id="form-quantity-group"
                          label="Quantity:"
                          label-for="form-quantity-input">
                <b-form-input id="form-quantity-input"
                              type="text"
                              v-model="addToCartForm.quantity"
                              required
                              placeholder="Quantity">
                </b-form-input>
            </b-form-group>
              <button type="submit" v-on:click="onSubmit()">Add to Cart</button>
            </b-form>
        </div>
      </div>
      <div class="row">
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
        item_id: '',
        buyer_email: 'Copnovelist@gmail.com',
        quantity: '',
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
    addToCart(payload) {
      const path = 'http://localhost:5000/addtocart';
      axios.post(path, payload)
        .then(() => {
          this.$router.push({ name: 'Cart' });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    displayToCart(itemID, event) {
      if (event) {
        this.$emit('add-to-cart');
        alert(itemID);
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        item_id: this.items[0].item_id,
        buyer_email: this.$root.user,
        quantity: this.addToCartForm.quantity,
      };
      this.addToCart(payload);
      this.$router.push({ name: 'Home' });
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
