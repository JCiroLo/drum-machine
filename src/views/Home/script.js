import Sequencer from '../../models/Sequencer'

export default {
  name: 'drum-machine',
  data () {
    return {
      settings: {
        bpm: 180,
        bars: 6
      },
      sequencer: null,
      sequence: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
      ],
      currentBeat: 0
    }
  },
  methods: {
    lessBpm () {
      this.settings.bpm -= 10
    },
    moreBpm () {
      this.settings.bpm += 10
    },
    power () {
      this.sequencer = new Sequencer({
        bpm: this.settings.bpm,
        bars: this.settings.bars,
        onBeat: beat => {
          this.currentBeat = beat
        }
      })
    },
    play () {
      if (!this.sequencer.isPlaying()) {
        this.sequencer.play()
      }
    },
    pause () {
      if (this.sequencer.isPlaying()) {
        this.sequencer.stop()
      }
    },
    eject () {
      this.pause()
      this.sequencer = null
    }
  },
  beforeCreate () {
    document.title = 'Drum Machine'
  }
}
