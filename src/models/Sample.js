import * as Tone from 'tone'

export default class Sample {
  constructor (url) {
    this.track = new Tone.Player(url).toDestination()
    this.isMuted = false
  }
}
