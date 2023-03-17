import Sequencer from '../../models/Sequencer'
import Sample from '../../models/Sample'

export default {
  name: 'drum-machine',
  data () {
    return {
      settings: {
        bpm: 90,
        volume: {
          hat: 0.5,
          kick: 0.5,
          clank: 0.5,
          snare: 0.5
        }
      },
      sequencer: new Sequencer({ bpm: 90, bars: 8 }),
      drums: {
        hat: new Sample({
          url: require('../../assets/samples/drum_closed_hihat.wav')
        }),
        kick: new Sample({
          url: require('../../assets/samples/drum_kick.wav')
        }),
        clank: new Sample({
          url: require('../../assets/samples/drum_clank.wav')
        }),
        snare: new Sample({
          url: require('../../assets/samples/drum_snare.wav')
        })
      }
    }
  },
  methods: {
    power () {
      if (this.sequencer.isPlaying()) {
        this.sequencer.stop()
      } else {
        this.sequencer.play(({ id }) => {
          if (id === 'half-bar' && this.drums.hat.isPlaying()) {
            this.drums.hat.play()
          }
          if (id === 'one-bar' && this.drums.kick.isPlaying()) {
            this.drums.kick.play()
          }
          if (id === 'three-quarter-bar' && this.drums.clank.isPlaying()) {
            this.drums.clank.play()
          }
          if (id === 'two-bar' && this.drums.snare.isPlaying()) {
            this.drums.snare.play()
          }
        })
      }
    },
    test () {
      console.log('first')
    }
  }
}
