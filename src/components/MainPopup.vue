<template>
  <transition name="content">
    <div
      v-if="isOpenPopup"
      class="modal-shadow"
      @click.self="isOpenPopup = false"
    >
      <div class="main-modal">
        <div class="main-modal-close" @click="isOpenPopup = false">
          &#10006;
        </div>

        <h3 class="main-modal-title">Title</h3>

        <form class="main-modal-content">
          <label class="main-modal__label">Name</label>
          <input v-model.lazy="name" type="text" name="name" required />

          <label class="main-modal__label">Description</label>
          <input v-model.lazy="description" type="text" name="description" />

          <label class="main-modal__label">Price</label>
          <input v-model="price" type="number" name="price" required />

          <button
            class="btn btn-primary btn-position"
            :disabled="btnDisabled"
            @click.prevent="createResultPopup"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>

export default {
  name: "MainPopup",
  data() {
    return {
      isOpenPopup: false,
    };
  },
  computed: {
    btnDisabled() {
      if (this.name === null || this.name === "") {
        return true;
      } else if (this.price === 0) {
        return true;
      }
    },
    name: {
      get() {
        return this.$store.getters.getName;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    price: {
      get() {
        return this.$store.getters.getPrice;
      },
      set(value) {
        this.$store.commit("setPrice", value);
      },
    },
    description: {
      get() {
        return this.$store.getters.getDescription;
      },
      set(value) {
        this.$store.commit("setDescription", value);
      },
    },
  },
  methods: {
    createResultPopup() {
      this.$store.commit("buttonToggle");
      this.isOpenPopup = false;
    },
  }
};
</script>

<style lang="scss" scoped>

.content-enter-active,
.content-leave-active {
  transition: opacity 0.7s;
}

.content-enter,
.content-leave-to {
  opacity: 0;
}
</style>