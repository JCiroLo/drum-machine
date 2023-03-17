export default class Sequencer {
  cicle = null

  constructor ({ bpm, bars }) {
    this.bpm = bpm
    this.bars = bars
    this.status = 'off'
  }

  play (callback) {
    if (this.status === 'off') {
      this.status = 'on'

      let timer = 0

      const divisions = [
        { id: 'half-bar', t: 0.5 },
        { id: 'three-quarter-bar', t: 0.75 },
        { id: 'one-bar', t: 1 },
        { id: 'two-bar', t: 2 }
      ]

      this.cicle = setInterval(() => {
        divisions.forEach(d => {
          const beat = (60 / this.bpm) * d.t * 1000

          if (timer % beat >= 0 && timer % beat < 10) {
            callback(d)
          }
        })

        if (timer > (60 / this.bpm) * this.bars * 1000) {
          timer = 0
          console.log('bar is changed')
        }

        timer += 10
      }, 10)
    }
  }

  stop () {
    this.status = 'off'
    clearInterval(this.cicle)
  }

  isPlaying () {
    return this.status === 'on'
  }
}
