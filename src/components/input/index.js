export default {
  name: 'v-input',
  props: {
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value || null)
      }
    }
  }
}
