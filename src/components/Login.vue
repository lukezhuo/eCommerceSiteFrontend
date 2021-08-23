<!-- eslint-disable  -->
<template>
  <div class="container">
    <div class="col justify-content-center">
    <b-modal ref="incorrectpassword" hide-footer title="Login Error">
        <div class="d-block text-center">
          <h3>Sorry, the password you entered is incorrect.</h3>
        </div>
    </b-modal>
    <h2 class = "mt-5 mb-4 text-center"> User Log In </h2>
    <div class = "card mx-auto text-white bg-info" style="width:35rem">
      <div class = "card-body">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2"  label="Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button class = "btn btn-dark" type="submit" variant="primary">Log In</b-button>

      <p class = "mt-2 mb-1" className="create-account text-left">
        <router-link :to="'register'">
        <a class="badge badge-light" href="#">Create an account</a>
        </router-link>
      </p>
    </b-form>
    <!--comment
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    -->
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
      form: {
        email: '',
        password: '',
      },
      show: true,
      loginstatus: this.$root.user,
    };
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide();
    },
    checkLogin(payload) {
      const path = 'http://127.0.0.1:5000/login';
      axios.post(path, payload)
        .then((res) => {
          this.loginstatus = res.data.loginstat;
          this.afterLogin();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    afterLogin() {
      if (this.loginstatus === 'incorrect password') {
        this.$refs.incorrectpassword.show();
        this.form.email = '';
        this.form.password = '';
      } else {
        this.$root.user = 'Copnovelist@gmail.com';
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        email: this.form.email,
        password: this.form.password,
      };
      this.checkLogin(payload);
      this.$router.push({ name: 'Home' });
      this.onReset();
      this.$forceUpdate();
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.password = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
