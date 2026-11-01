// Web Audio API synthetic ambient sound generator for serene South Indian temple/muhurtham aura

class HeritageAmbience {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private bellInterval: any = null;

  public init() {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtxClass) {
      this.ctx = new AudioCtxClass();
    }
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private start() {
    if (!this.ctx) return;
    this.isPlaying = true;

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2);
    this.masterGain.connect(this.ctx.destination);

    // Tanpura Drone Notes (D2: 73.42Hz, A2: 110Hz, D3: 146.83Hz)
    const droneFreqs = [146.83, 220.0, 293.66];
    this.oscillators = [];

    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Subtle warm detune for acoustic shimmer
      osc.detune.setValueAtTime((idx - 1) * 3, this.ctx.currentTime);

      // LFO for breathing drone
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start();

      this.oscillators.push(osc);
    });

    // Gentle periodic bronze bell chime (every 14s)
    this.playBellChime();
    this.bellInterval = setInterval(() => {
      if (this.isPlaying) {
        this.playBellChime();
      }
    }, 14000);
  }

  public playBellChime() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // High bell fundamental & harmonics
      const bellFreqs = [587.33, 1174.66, 1760.0];
      
      bellFreqs.forEach((freq, i) => {
        if (!this.ctx) return;
        const bellOsc = this.ctx.createOscillator();
        const bellGain = this.ctx.createGain();

        bellOsc.type = 'sine';
        bellOsc.frequency.setValueAtTime(freq, now);

        bellGain.gain.setValueAtTime(0, now);
        bellGain.gain.linearRampToValueAtTime(0.08 / (i + 1), now + 0.05);
        bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5 + i);

        bellOsc.connect(bellGain);
        bellGain.connect(this.ctx.destination);

        bellOsc.start(now);
        bellOsc.stop(now + 4.5);
      });
    } catch (e) {
      // Audio context might be restricted
    }
  }

  public stop() {
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = false;
    
    if (this.bellInterval) {
      clearInterval(this.bellInterval);
      this.bellInterval = null;
    }

    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); } catch (e) {}
        });
        this.oscillators = [];
      }, 1000);
    } catch (e) {
      // handled
    }
  }
}

export const soundAmbience = new HeritageAmbience();
