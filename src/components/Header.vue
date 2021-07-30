<!-- eslint-disable  -->
<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/home">
      <img src="../assets/nile.png" alt="logo" width="45" height="45">
    </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="navbar-brand" href="#"> </a>
        </li>
          <li class="nav-item">
            <router-link class = "nav-link" to="/account">
              <svg width="2.2em" height="2.2em" viewBox="0 0 16 16" class="bi bi-person-circle " fill='white' xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="'cart'" class = "nav-link">
            <svg width="2.2em" height="2.2em" viewBox="0 0 16 16" class="bi bi-cart" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
            </router-link>

          </li>
          <li class="nav-item">
            <router-link :to="'shipment'" class = "nav-link">
              <svg width="2.2em" height="2.2em" viewBox="0 0 16 16" class="bi bi-mailbox2" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm1 1.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1zM4.585 7.157C4.836 7.264 5 7.334 5 7a1 1 0 0 0-2 0c0 .334.164.264.415.157C3.58 7.087 3.782 7 4 7c.218 0 .42.086.585.157z"/>
              </svg>
            </router-link>

          </li>
      </ul>
      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit="onSubmit">
          <b-form-group id="form-phototext-group"
          <b-form-input v-model="namequery" size="sm" class="mr-sm-2" type="text" style="width: 200px" placeholder="Search All Items" ></b-form-input>
        </b-form-group>
          <router-link :to="'results?name=' + namequery + '&category=' + '' + '&description=' + '' + '&minprice=' + '0' + '&maxprice=' + '' + '&seller=' + ''">
            <b-button  size="sm" class="my-2 my-sm-0 mr-sm-1 btn-success" type="submit">
            <svg width="1.4em" height="1.4em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </b-button>
          </router-link>
        </b-nav-form>
        <router-link to="/search">
          <p1> Advanced Search </p1>
        </router-link>
      </b-navbar-nav>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      namequery: '',
    };
  },
  methods: {
    initForm() {
      this.namequery = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.initForm();
    },
  },

};
</script>
