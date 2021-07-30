<!-- eslint-disable  -->
<template>
  <div class="container">
        <div v-if="this.$root.user == 'NotLoggedIn'">
        <login/>
        </div>
        <div v-else>
        <br>
              <div class="card text-center">
                  <div class="card-header">
                  <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                      <a class="nav-link" v-on:click = "curview = 'account_view'" href="#">Account Information</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" v-on:click = "curview = 'purchase_history'" href="#">Purchase History</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " v-on:click = "curview = 'sell_history'" href="#">Selling History</a>
                    </li>
                    <li class="nav-item ml-auto">
                    
                    </li>
                  </ul>
                  </div>
                  <div v-if= "curview == 'account_view' || curview == ''">
                    <div class = "text-left ml-4">
                    <h4 class = "mt-4"> Welcome Valued Customer! </h4>
                    <h4  class = "mb-3">Current Balance: ${{ balance.toFixed(2) }}</h4>
                    <a href="balance" class="btn btn-primary mb-4">Add balance</a>
                    <br>
                    <a href="/account" v-on:click = "this.$root.user = 'NotLoggedIn'" class="btn btn-danger mb-4">Log Out</a>
                    </div>
                  </div>
                  <div v-if= "curview == 'purchase_history'">
                    <div class="card-body">
                    <h3 class="card-title">Your Purchase History</h3>
                    </div>
                  <table class="card-table table table-hover table-striped">
                    <thead>
                      <tr>
                        <th style="width: 15%" scope="col">date</th>
                        <th scope="col">item name</th>
                        <th scope="col">seller</th>
                        <th scope="col">item cost</th>
                        <th scope="col">quantity </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in items" :key="index">
                        <td>{{ item.date }}</td>
                        <td>
                        <router-link :to="'product'+item.item_id">
                        {{ item.item_name }}
                        </router-link></td>
                        <td>{{ item.seller_email }}</td>
                        <td>{{ item.item_cost }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>
                          <div class="btn-group" role="group">
                            <router-link :to="'writereview'+item.item_id">
                            <button type="button" class="btn btn-warning btn-sm">review</button>
                            </router-link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div v-if= "curview == 'sell_history'">
                    <div>
                      <br>
                      <h3 class = "mb-4"> Your Selling History</h3>
                      <h4  class = "mb-2">Currently Selling</h4>
                      <table class=" card-table table table-hover table-striped">
                        <thead>
                          <tr>
                            <th scope="col">item name</th>
                            <th scope="col">item cost</th>
                            <th scope="col">quantity </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in selling" :key="index">
                            <td>
                            <router-link :to="'product'+item.item_id">
                            {{ item.item_name }}
                            </router-link></td>
                            <td>${{ item.item_price.toFixed(2) }}</td>
                            <td>{{ item.quantity }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <br>
                      <h4  class = "mb-2">Items Sold</h4>
                      <table class="table table-hover table-striped">
                        <thead>
                          <tr>
                            <th style="width: 15%" scope="col">date</th>
                            <th scope="col">item name</th>
                            <th scope="col">buyer</th>
                            <th scope="col">item cost</th>
                            <th scope="col">quantity </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in sold" :key="index">
                            <td>{{ item.date }}</td>
                            <td>
                            <router-link :to="'product'+item.item_id">
                            {{ item.item_name }}
                            </router-link></td>
                            <td>{{ item.buyer_email }}</td>
                            <td>${{ item.item_cost.toFixed(2) }}</td>
                            <td>{{ item.quantity }}</td>
                          </tr>
                        </tbody>
                      </table>


                </div>
                  </div>
                  </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios';
import Login from './Login.vue';

export default {
  data() {
    return {
      items: [],
      sold: [],
      selling: [],
      balance: '',
      LoginForm: {
        uid: '',
        password: '',
      },
      curview: 'account_view',
      logstat: '',
    };
  },
  methods: {
    getItems() {
      const path = `http://localhost:5000/account?email=${this.$root.user}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.trans;
          this.sold = res.data.sold;
          this.balance = res.data.balance;
          this.selling = res.data.selling;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addItem(payload) {
      const path = `http://localhost:5000/account?email=${this.$root.user}`;
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
    this.curview = 'account_view';
    this.logstat = this.$root.user;
  },
  components: {
    Login,
  },
};
</script>
