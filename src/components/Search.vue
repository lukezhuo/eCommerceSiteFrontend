<!-- eslint-disable  -->
<template>
  <div class="container">
  <div class="col d-flex justify-content-center">
      <div class="col-sm-10">
        <br><br>
        <h1 class="text-center">Search</h1>
        <br>
      </div>
      </div>
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
          <b-form-group id="form-name-group"
                        label="name:"
                        label-for="form-name-input">
              <b-form-input id="form-name-input"
                            type="text"
                            v-model="addSearchForm.name"
                            required
                            placeholder="Enter name">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-category-group"
                        label="category:"
                        label-for="form-category-input">
              <b-form-input id="form-category-input"
                            type="text"
                            v-model="addSearchForm.category"
                            required
                            placeholder="Enter category">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-description-group"
                        label="description:"
                        label-for="form-description-input">
              <b-form-input id="form-description-input"
                            type="text"
                            v-model="addSearchForm.description"
                            required
                            placeholder="Enter description">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-minprice-group"
                        label="minimum price:"
                        label-for="form-minprice-input">
              <b-form-input id="form-minprice-input"
                            type="text"
                            v-model="addSearchForm.minprice"
                            required
                            placeholder="Enter minimum price">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-maxprice-group"
                        label="maximum price:"
                        label-for="form-maxprice-input">
              <b-form-input id="form-maxprice-input"
                            type="text"
                            v-model="addSearchForm.maxprice"
                            required
                            placeholder="Enter maximum price">
              </b-form-input>
          </b-form-group>
          <b-form-group id="form-seller-group"
                        label="seller:"
                        label-for="form-seller-input">
              <b-form-input id="form-seller-input"
                            type="text"
                            v-model="addSearchForm.seller"
                            required
                            placeholder="Enter seller">
              </b-form-input>
          </b-form-group>
          <b-row class="vh-0 text-center" align-v="center">
                    <b-col>
                      <router-link :to="'results?name=' + addSearchForm.name + '&category=' + addSearchForm.category + '&description=' + addSearchForm.description + '&minprice=' + addSearchForm.minprice + '&maxprice=' + addSearchForm.maxprice + '&seller=' + addSearchForm.seller">
                        <b-button type="submit" variant="primary">Submit</b-button>
                      </router-link>
                        <span style="width:10px;display:inline-block"></span>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-col>
                </b-row>
          </b-form>
      </div>
</template>

<script>

export default {
  data() {
    return {
      addSearchForm: {
        name: '',
        category: '',
        description: '',
        minprice: '',
        maxprice: '',
        seller: '',
      },
    };
  },
  methods: {
    initForm() {
      this.addSearchForm.name = '';
      this.addSearchForm.category = '';
      this.addSearchForm.description = '';
      this.addSearchForm.minprice = '';
      this.addSearchForm.maxprice = '';
      this.addSearchForm.seller = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      /* const payload = {
        uid: this.addSearchForm.uid,
        name: this.addSearchForm.name,
        price: this.addSearchForm.price,
        quantity: this.addSearchForm.quantity,
        description: this.addSearchForm.description,
        seller: this.addSearchForm.seller,
      };
      this.addItem(payload); */
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.initForm();
    },
  },
};
</script>
