<template>
  <div class="page">
    <h1>Main page</h1>
    <div class="main-container">
      <img
        :src="mainImage"
        @click="showPopup"
        class="main-image"
        alt="room img"
      />
    </div>
    <main-popup ref="popup"></main-popup>
    <result-popup ref="resultPopup"></result-popup>
  </div>
</template>

<script>
import MainPopup from "./MainPopup";
import ResultPopup from "./ResultPopup.vue";
import mainImage from "../assets/images/room.jpg";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "MainPage",
  components: {
    MainPopup,
    ResultPopup,
  },
  data() {
    return {
      mainImage,
      isOpenPopup: false,
      isOpenResultPopup: false,
    };
  },
  methods: {
    showPopup() {
      this.$refs.popup.isOpenPopup = true;
    },
    showResultPopup() {
      this.$refs.resultPopup.isOpenResultPopup = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  min-height: 100%;
}
</style>