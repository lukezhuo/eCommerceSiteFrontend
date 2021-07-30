<!-- eslint-disable  -->
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

<template>
  <div class="container" >
    <br><br>
    <div>
      <div class="row">
        <div  v-for="(item, index) in items" :key="index">
          <h3>Leave a review for: </h3>
          <h4> {{ item.item_name}} </h4>
            <b-form @submit="onSubmit" class="w-100">
            <b-form-group id="form-star-group"
                          label="Stars:"
                          label-for="form-star-input">
                <b-form-input id="form-star-input"
                              type="text"
                              v-model="addReviewForm.stars"
                              required
                              placeholder="Enter the amount of stars">
                </b-form-input>
            </b-form-group>
            <b-form-group id="form-notes-group"
                          label="notes:"
                          label-for="form-notes-input">
                <b-form-input id="form-notes-input"
                              type="text"
                              v-model="addReviewForm.notes"
                              required
                              placeholder="Enter your notes">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
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
      addReviewForm: {
        item_id: '',
        buyer_email: 'Copnovelist@gmail.com',
        notes: '',
        buyername: 'Copnovelist',
        stars: '',
      },
    };
  },
  methods: {
    getOneItem() {
      const path = `http://127.0.0.1:5000/getitem/${this.$route.params.id}`;
      axios.get(path)
        .then((res) => {
          this.items = res.data.items;
          this.reviews = res.data.reviews;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addReview(payload) {
      const path = 'http://localhost:5000/publishreview';
      axios.post(path, payload)
        .then(() => {
          this.$router.push('/account');
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const payload = {
        item_id: this.items[0].item_id,
        buyer_email: 'Copnovelist@gmail.com',
        notes: this.addReviewForm.notes,
        buyername: 'Copnovelist',
        stars: this.addReviewForm.stars,
      };
      this.addReview(payload);
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
