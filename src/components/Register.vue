<!-- eslint-disable  -->
<template>
  <div class="container">
    <div class="col justify-content-center">
    <h2 class = "mt-5 mb-4 text-center"> Create Account </h2>
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

      <b-form-group id="input-group-3"  label="Security Question:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.question"
          required
          placeholder="Write a security question"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4"  label="Security Answer:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.answer"
          required
          placeholder="Security question answer"
        ></b-form-input>
      </b-form-group>

      
    </b-form>
    <b-button class = "btn btn-dark" type="submit" variant="primary">Register</b-button>
  </div>
  </div>
  </div>
</div>
</template>

<script>
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
  },
};
</script>
