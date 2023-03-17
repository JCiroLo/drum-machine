export default {
  name: 'v-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      validator: val => ['fas', 'far', 'fal', 'fab', 'fad'].includes(val),
      default: 'fas'
    },
    fixed: {
      type: Boolean,
      default: true
    },
    spin: {
      type: Boolean
    }
  }
}
