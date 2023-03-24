import Sequencer from '../../models/Sequencer'

export default {
  name: 'drum-machine',
  data () {
    return {
      settings: {
        bpm: 180,
        bars: 6,
        volume: {
          hat: 0.5,
          kick: 0.5,
          clank: 0.5,
          snare: 0.5
        }
      },
      sequencer: null
    }
  },
  methods: {
    power () {
      this.sequencer = new Sequencer({
        bpm: this.settings.bpm,
        bars: this.settings.bars
      })
    },
    play () {
      if (this.sequencer.isPlaying()) {
        this.sequencer.stop()
      } else {
        this.sequencer.play()
      }
    },
    test (a) {
      a.mute()
      console.log(a)
    }
  },
  mounted () {}
}
