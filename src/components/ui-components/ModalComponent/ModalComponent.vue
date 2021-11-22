<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__text">
        Are you sure?
      </div>
      <div class="modal__control">
        <button class="modal__button modal__button_yes">
          yes
        </button>
        <button
          class="modal__button"
          @click="closeModal"
        >
          no
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'ModalComponent',
    methods: {
        closeModal() {
            this.$store.commit('toggleModal');
        },
    },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(#fff, 0.8);

  &__wrapper {
    margin: 10% 40%;
    background-color: #fff;
    color: #000;
    padding: 40px 50px 20px;
    border-radius: 20px;
    box-shadow: 10px 10px 30px #000;
  }

  &__control {
    display: flex;
    justify-content: space-around;
  }

  &__text {
    font-size: 30px;
    margin-bottom: 40px;
  }

  &__button {
    padding: 10px 20px;

    &_yes {
      background-color: darkred;
      box-shadow: 2px 3px 1px #620000, 7px 7px 3px rgba(#000, 0.7);

      &:active {
        box-shadow: 0 0 transparent;
      }
    }
  }
}
</style>
