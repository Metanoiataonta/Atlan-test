<template>
  <div class="nested">
    <label
      v-for="(property, name) in itemWithoutID"

      :key="name"
      class="nested__label"
    >
      {{ name }} <span v-if="showError">Error</span>
      <input
        v-model="itemWithoutID[name]"
        :type="name === 'title' || name ==='price' ? 'text' : 'number' "
        class="nested__input"
        :name="name"
        @input="onChange"
      >
    </label>

    <button
      class="nested__close"
      @click="deleteNested"
    >
      <svg
        id="Layer_1"
        height="512px"
        fill="white"
        version="1.1"
        viewBox="0 0 512 512"
        width="512px"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
    name: 'MainNested',
    props: {
        item: {
            type: Object,
            default: () => {
            },
        },
        itemID: {
            type: Number,
            default: NaN,
        },
    },
    data() {
        return {
            showError: false,
        };
    },
    computed: {

        itemWithoutID() {
            let keys = Object.keys(this.item);
            const object = {};
            keys = keys.filter((key) => key !== 'id');
            // eslint-disable-next-line guard-for-in
            keys.forEach((key) => object[key] = this.item[key]);
            return object;
        },
    },
    methods: {
        deleteNested() {
            this.$store.commit('deleteDocData', this.itemID);
        },
        checkValue(value, exp) {
            this.showError = !exp.test(value);
        },
        onChange(e) {
            const target = e.target;
            switch (target.name) {
            case 'title':
                this.checkValue(target.value, /\S/i);
                break;
            case 'price':
                this.checkValue(target.value, /^\d+\.?\d{0,2}$/i);
                break;
            }
            if (!this.showError) {
                this.$store.commit('setDocData', {
                    id: this.itemID,
                    prop: target.name,
                    value: target.name === 'title' ? target.value : Number(target.value),
                });
            }
        },
    },

};
</script>

<style lang="scss" scoped>
.nested {
  border: 1px solid #fff;
  position: relative;
  padding: 20px 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &__label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__close {
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: transparent;
    border: none;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover svg {
      fill: rgba(180, 179, 179, 0.98);
    }

    &:active svg {
      fill: #5b5b5b;
    }


  }
}
</style>
