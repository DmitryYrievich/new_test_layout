<template>
  <div>
    <div class="pulse" @click="isOpenPopup = true" v-if="getPulseShow"></div>
    <div
      v-if="isOpenPopup"
      class="modal-shadow"
      @click.self="isOpenPopup = false"
    >
      <transition name="modal">
        <div class="main-modal">
          <h3 class="main-modal-title">Result</h3>

          <form class="main-modal-content">
            <div>
              <p>name: {{ getName }}</p>
            </div>
            <div v-if="getDescription !== null">
              <p>description: {{ getDescription }}</p>
            </div>
            <div>
              <p class="dollar">price: {{ getPrice }}</p>
            </div>

            <router-link :to="{ name: 'product', params: { id: `${getName}` } }"
              >learn more</router-link
            >

          </form>

          <div class="main-modal-footer">
            <button class="main-modal-footer__button" @click="removeData">
              Delete
            </button>
            <div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ResultPopup",
  data() {
    return {
      isOpenPopup: false,
    };
  },
  computed: {
    ...mapGetters(["getName", "getDescription", "getPrice", "getPulseShow"]),
  },
  methods: {
    removeData() {
      window.location.reload();
    },
  }
};
</script>

<style lang="scss" scoped>
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.main-modal {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &-close {
    border-radius: 50%;
    color: #fff;
    background: #2a4cc7;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  &-title {
    color: #0971c7;
  }

  &-content {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    .dollar {
      position: relative;

      &::after {
        content: "$";
        position: absolute;
        top: 0;
        margin-left: 2px;
        z-index: 1;
      }
    }
  }

  &-footer {
    &__button {
      background-color: #0971c7;
      color: #fff;
      border: none;
      text-align: center;
      padding: 8px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 8px;
      min-width: 150px;
    }
  }
}
.test:before {
  content: "$";
  position: absolute;
  top: 0;
  left: 40px;
  z-index: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 1s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.pulse {
  position: absolute;
  right: 189px;
  top: 185px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #cca92c;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: pulse 2s infinite;
}
.pulse:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
  }
}
</style>