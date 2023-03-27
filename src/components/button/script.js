export default {
  name: 'v-button',
  props: {
    active: Boolean
  },
  data () {
    return {
      sfx: new Audio(require('../../assets/samples/button.mp3'))
    }
  },
  methods: {
    click () {
      this.sfx.currentTime = 0
      this.sfx.play()
    }
  }
}
