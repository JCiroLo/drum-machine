import * as Tone from 'tone'

class Sample {
  constructor (url) {
    this.track = new Tone.Player(url).toDestination()
    this.isMuted = false
  }
}

export default class Sequencer {
  samples = {
    sfx1: new Sample(require('../assets/samples/drum_conga.wav')),
    sfx2: new Sample(require('../assets/samples/drum_clank.wav')),
    sfx3: new Sample(require('../assets/samples/drum_indian.wav')),
    sfx4: new Sample(require('../assets/samples/drum_kick.wav'))
  }

  constructor ({ bpm, bars }) {
    this.bpm = bpm
    this.bars = bars
    this.status = 'off'
    this.grid = this.loadSamples()

    Tone.start()
    Tone.getDestination().volume.rampTo(-10, 0.001)
    this.loop()
  }

  loadSamples () {
    const { sfx1, sfx2, sfx3, sfx4 } = this.samples

    return {
      0: [sfx1, sfx2, sfx3, sfx4],
      1: [sfx1],
      2: [sfx1, sfx2],
      3: [sfx1, sfx3],
      4: [sfx1, sfx2, sfx4],
      5: [sfx1],
      6: [sfx1, sfx2, sfx3],
      7: [sfx1],
      8: [sfx1, sfx2, sfx4],
      9: [sfx1, sfx3],
      10: [sfx1, sfx2],
      11: [sfx1]
    }
  }

  loop () {
    let beat = 0

    const repeat = time => {
      this.grid[beat].forEach(sample => {
        if (!sample.isMuted) {
          sample.track.start(time)
        }
      })

      beat = (beat + 1) % (this.bars * 2)
    }

    Tone.Transport.bpm.value = this.bpm
    Tone.Transport.scheduleRepeat(repeat, '8n')
  }

  play () {
    if (this.status === 'off') {
      this.status = 'on'
      Tone.Transport.start()
    }
  }

  stop () {
    if (this.status === 'on') {
      this.status = 'off'
      Tone.Transport.stop()
    }
  }

  getSamples () {
    return this.samples
  }

  mute () {}

  isPlaying () {
    return this.status === 'on'
  }
}
