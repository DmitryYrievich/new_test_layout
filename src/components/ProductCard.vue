<template>
  <div>
    <div class="main-container">
      <img
        :src="productImage"
        class="main-image"
        alt="product img"
      />
      <div class="main-modal">
        <h3 class="main-modal-title">{{ getName }}</h3>

        <form class="main-modal-content">
          <div v-if="getDescription !== null">
            <p>description: {{ getDescription }}</p>
          </div>
          <div>
            <p class="dollar">price: {{ getPrice }}</p>
          </div>

          <button @click="back" class="btn btn-primary">Back</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import productImage from "../assets/images/lamp.jpg";

export default {
  name: "ProductCard",
  data() {
    return {
      productImage,
    };
  },
  computed: {
    ...mapGetters(["getName", "getDescription", "getPrice"]),
  },
  methods: {
    back() {
      this.$router.push({name: 'home'})
    }
  }
};
</script>

<style lang="scss" scoped>

.main-modal {
  background: grey;
}
</style>