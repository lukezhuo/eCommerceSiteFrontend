<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <img src="../assets/nile.png" alt="logo" width="100" height="100">
        <h1>Nile</h1>
        <hr><br><br>
        <button type="button" class="btn btn-success btn-sm">Cart</button>
        <span style="width:10px;display:inline-block"></span>
        <button type="button" class="btn btn-success btn-sm">Profile</button>
        <span style="width:10px;display:inline-block"></span>
        <button type="button" class="btn btn-success btn-sm" v-b-modal.item-modal>Add Item</button>
        <br><br>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
              <th scope="col">Phototext</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.item_id }}</td>
              <td>{{ item.item_name }}</td>
              <td>{{ item.item_price }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.photo_text }}</td>
              <td>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-warning btn-sm">Add to Cart</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="addItemModal"
             id="item-modal"
             title="Add a new item"
             hide-footer>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
      <b-form-group id="form-uid-group"
                    label="uid:"
                    label-for="form-uid-input">
          <b-form-input id="form-uid-input"
                        type="text"
                        v-model="addItemForm.uid"
                        required
                        placeholder="Enter uid">
          </b-form-input>
      </b-form-group>
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
      <b-form-group id="form-phototext-group"
                    label="photo:"
                    label-for="form-photo-input">
          <b-form-input id="form-photo-input"
                        type="text"
                        v-model="addItemForm.photo_text"
                        required
                        placeholder="Insert photo">
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
        uid: '',
        name: '',
        price: '',
        quantity: '',
        description: '',
        photo_text: '',
      },
    };
  },
  methods: {
    getItems() {
      const path = 'http://localhost:5000/items';
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addItem(payload) {
      const path = 'http://localhost:5000/items';
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
      this.addItemForm.uid = '';
      this.addItemForm.name = '';
      this.addItemForm.price = '';
      this.addItemForm.quantity = '';
      this.addItemForm.description = '';
      this.addItemForm.photo_text = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addItemModal.hide();
      const payload = {
        uid: this.addItemForm.uid,
        name: this.addItemForm.name,
        price: this.addItemForm.price,
        quantity: this.addItemForm.quantity,
        description: this.addItemForm.description,
        photo_text: this.addItemForm.photo_text,
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
