export default class Sample {
  status = 'playing'

  constructor ({ url, vol = 1 }) {
    this.track = new Audio(url)
    this.track.volume = vol
  }

  mute () {
    this.track.volume = this.status === 'muted' ? 1 : 0
    this.status = this.status === 'muted' ? 'playing' : 'muted'
  }

  play () {
    this.track.currentTime = 0
    this.track.play()
  }

  isPlaying () {
    return this.status === 'playing'
  }
}
