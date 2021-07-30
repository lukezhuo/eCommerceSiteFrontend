<template>
<div class="container">
  <div>
    <h1 class = 'my-5'> Shipping History </h1>
    <br>
        <b-container>
            <b-row class="vh-0 text-center" align-v="center">
                <b-col>
                  <button type="button" class="btn btn-success btn-med" v-b-modal.ship-modal>
                    Add Shipment
                    </button>
                </b-col>
            </b-row>
        </b-container>
        <br>
    <table class = "table table-hover">
      <thead>
        <tr>
          <th style= "width: 15%" scope="col">Buyer Email </th>
          <th scope ="col">Item ID</th>
          <th scope ="col">Date Shipped</th>
          <th scope ="col">Provider</th>
          <th scope ="col">ETA</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shippingItems" :key="index">
          <td>{{item.buyer_email}}</td>
          <td>{{item.item_id}}</td>
          <td>{{item.date_shipped}}</td>
          <td>{{item.provider}}</td>
          <td>{{item.ETA}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <b-modal ref="addShipmentModal" id= "ship-modal"
        title = "Add a new shipment"
        hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" class="w-100">
          <b-form-group id="form-buyerEmail-group"
                        label="Buyer Email:"
                        laber-for="form-buyerEmail-input">
            <b-form-input id="form-buyerEmail-input"
                          type="text"
                          v-modal="addShippingForm.buyerEmail"
                          required
                          placedholder="Enter Buyer Email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="form-sellerEmail-group"
                        label="Seller Email:"
                        laber-for="form-sellerEmail-input">
            <b-form-input id="form-sellerEmail-input"
                          type="text"
                          v-modal="addShippingForm.sellerEmail"
                          required
                          placedholder="Enter Seller Email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="form-itemID-group"
                        label="Item ID:"
                        laber-for="form-itemID-input">
            <b-form-input id="form-itemID-input"
                          type="text"
                          v-modal="addShippingForm.itemID"
                          required
                          placedholder="Enter Item ID">
            </b-form-input>
          </b-form-group>
          <b-form-group id="form-dateShipped-group"
                        label="Date Shipped:"
                        laber-for="form-dateShipped-input">
            <b-form-input id="form-dateShipped-input"
                          type="text"
                          v-modal="addShippingForm.dateShipped"
                          required
                          placedholder="Enter Date Shipped">
            </b-form-input>
          </b-form-group>
          <b-form-group id="form-provider-group"
                        label="Provider:"
                        laber-for="form-provider-input">
            <b-form-input id="form-provider-input"
                          type="text"
                          v-modal="addShippingForm.provider"
                          required
                          placedholder="Enter Provider">
            </b-form-input>
          </b-form-group>
          <b-form-group id="form-eta-group"
                        label="ETA:"
                        laber-for="form-eta-input">
            <b-form-input id="form-eta-input"
                          type="text"
                          v-modal="addShippingForm.eta"
                          required
                          placedholder="Enter ETA">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant= "primary"> Submit </b-button>
          <b-button type="reset" variant= "danger">Reset</b-button>
        </b-form>
    </b-modal>
</div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      shippingItems: [],
      addShippingForm: {
        buyerEmail: '',
        sellerEmail: '',
        itemID: '',
        dateShipped: '',
        provider: '',
        eta: '',
      },
    };
  },
  methods: {
    getShipments() {
      const path = 'http://localhost:5000/ship';
      axios.get(path)
        .then((res) => {
          this.shippingItems = res.data.ship;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addShipment(payload) {
      const path = 'http://localhost:5000/ship';
      axios.post(path, payload)
        .then(() => {
          this.getShipments();
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          this.getShipments();
        });
    },
    initForm() {
      this.addShippingForm.buyerEmail = '';
      this.addShippingForm.sellerEmail = '';
      this.addShippingForm.itemID = '';
      this.addShippingForm.dateShipped = '';
      this.addShippingForm.provider = '';
      this.addShippingForm.eta = '';
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addShipmentModal.hide();
      const payload = {
        buyerEmail: this.addShippingForm.buyerEmail,
        sellerEmail: this.addShippingForm.sellerEmail,
        itemID: this.addShippingForm.itemID,
        dateShipped: this.addShippingForm.dateShipped,
        provider: this.addShippingForm.provider,
        eta: this.addShippingForm.eta,
      };
      this.addShipment(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addShipmentModal.hide();
      this.initForm();
    },
  },
  created() {
    this.getShipments();
  },
};
</script>
