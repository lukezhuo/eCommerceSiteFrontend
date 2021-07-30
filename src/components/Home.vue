<!-- eslint-disable  -->
<template>
  <div class="container">
  <div class="col d-flex justify-content-center">
      <div class="col-sm-10">
        <br><br>
        <h1 class="text-center">Welcome to the Nile</h1>
        <br>
        <div v-if="this.$root.user !== 'NotLoggedIn'">
        <b-container>
            <b-row class="vh-0 text-center" align-v="center">
                <b-col>
                  <button type="button" class="btn btn-success btn-med" v-b-modal.item-modal>Add Item For Sale</button>
                </b-col>
            </b-row>
        </b-container>
        </div>
        <br><br>
        <div v-if="this.$root.user !== 'NotLoggedIn'">
        <h2 class="text-center">Recommended Items</h2>
        <h5 class="text-center font-italic mb-5"> (based on your previous purchases) </h5>
        </div>
        <div class="card-deck">
          <div class="card" v-for="(item, index) in items" :key="index">
          <div class="card-body d-flex flex-column">
            <img class="card-img" v-bind:src= "require('../assets/images/' + item.category.split(' ').join('') + '/'+item.category.split(' ').join('') + '.jpeg')">
            <router-link :to="'product'+item.item_id">
            <h5 class="card-title">{{ item.item_name }}</h5>
            </router-link>

            <router-link :to="'addtocart'+item.item_id">
                <button class="mb-auto btn btn-info text-center">Add to Cart</button>
            </router-link>

          </div>
        </div>
        </div>
      </div>
      </div>
      <b-modal ref="addItemModal"
             id="item-modal"
             title="Add a new item"
             hide-footer>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
          <b-form-group id="form-name-group"
                        label="name:"
                        label-for="form-name-input">
              <b-form-input id="form-name-input"
                            type="text"
                            v-model="addItemForm.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-price-group"
                        label="price:"
                        label-for="form-price-input">
              <b-form-input id="form-price-input"
                            type="text"
                            v-model="addItemForm.price"
                            required
                            placeholder="Enter price">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-quantity-group"
                        label="quantity:"
                        label-for="form-quantity-input">
              <b-form-input id="form-quantity-input"
                            type="text"
                            v-model="addItemForm.quantity"
                            required
                            placeholder="Enter quantity">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-description-group"
                        label="description:"
                        label-for="form-description-input">
              <b-form-input id="form-description-input"
                            type="text"
                            v-model="addItemForm.description"
                            required
                            placeholder="Enter description">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-category-group"
                        label="category:"
                        label-for="form-category-input">
              <b-form-input id="form-category-input"
                            type="text"
                            v-model="addItemForm.category_text"
                            required
                            placeholder="Enter category">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-seller-group"
                        label="seller:"
                        label-for="form-seller-input">
              <b-form-input id="form-seller-input"
                            type="text"
                            v-model="addItemForm.seller_text"
                            required
                            placeholder="Enter seller email">
              </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-modal>
      </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      addItemForm: {
        name: '',
        price: '',
        quantity: '',
        description: '',
        category: '',
        seller: '',
      },
    };
  },
  methods: {
    getItems() {
      let path = 'updated';
      if (this.$root.user === 'NotLoggedIn') {
        path = 'http://127.0.0.1:5000/items';
      } else {
        path = 'http://127.0.0.1:5000/recom?email=Copnovelist@gmail.com';
      } axios.get(path)
        .then((res) => {
          this.items = res.data.items;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addItem(payload) {
      const path = 'http://127.0.0.1:5000/items';
      axios.post(path, payload)
        .then(() => {
          this.getItems();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getItems();
        });
    },
    initForm() {
      this.addItemForm.name = '';
      this.addItemForm.price = '';
      this.addItemForm.quantity = '';
      this.addItemForm.description = '';
      this.addItemForm.category_text = '';
      this.addItemForm.seller_text = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addItemModal.hide();
      const payload = {
        name: this.addItemForm.name,
        price: this.addItemForm.price,
        quantity: this.addItemForm.quantity,
        description: this.addItemForm.description,
        category_text: this.addItemForm.category_text,
        seller_text: this.addItemForm.seller_text,
      };
      this.addItem(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addItemModal.hide();
      this.initForm();
    },
  },
  created() {
    this.getItems();
  },
};
</script>
