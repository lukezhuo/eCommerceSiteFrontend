<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

<template>
  <div class="container" >
    <br><br>
    <div>
      <div class="row">
          <h3>Manage your balance: </h3>
            <b-form @submit="onSubmit" class="w-100">
            <b-form-group id="form-email-group"
                          label="Email:"
                          label-for="form-email-input">
                <b-form-input id="form-email-input"
                              type="text"
                              v-model="addBalance.email"
                              required
                              placeholder="Enter your email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="form-password-group"
                          label="Password:"
                          label-for="form-password-input">
                <b-form-input id="form-password-input"
                              type="password"
                              v-model="addBalance.password"
                              required
                              placeholder="Enter your password">
                </b-form-input>
            </b-form-group>
            <b-form-group id="form-money-group"
                          label="Amount:"
                          label-for="form-money-input">
                <b-form-input id="form-money-input"
                              type="text"
                              v-model="addBalance.money"
                              required
                              placeholder="Enter the amount of money to be added">
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>

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
      addBalance: {
        email: '',
        password: '',
        money: '',
      },
    };
  },
  methods: {
    getItems() {
      const path = 'http://127.0.0.1:5000/recom?email=Copnovelist@gmail.com';
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    balanceAdd(payload) {
      const path = 'http://127.0.0.1:5000/balance';
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
      this.addBalance.email = '';
      this.addBalance.password = '';
      this.addBalance.money = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        email: 'Copnovelist@gmail.com',
        password: 'testpw',
        money: this.addBalance.money,
      };
      console.log(payload);
      this.balanceAdd(payload);
      this.initForm();
    },
  },
  created() {
    this.getItems();
  },
};
</script>
