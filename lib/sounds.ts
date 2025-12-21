import { SoundType } from './types';

export const createBeep = (type: SoundType, enabled: boolean): void => {
  if (!enabled) return;

  try {
    const AudioContextClass = window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    switch (type) {
      case 'boot':
        osc.frequency.value = 800;
        gain.gain.value = 0.1;
        osc.start();
        setTimeout(() => osc.stop(), 150);
        break;
      case 'click':
        osc.frequency.value = 1200;
        gain.gain.value = 0.05;
        osc.start();
        setTimeout(() => osc.stop(), 30);
        break;
      case 'enter':
        osc.frequency.value = 1000;
        gain.gain.value = 0.08;
        osc.start();
        setTimeout(() => osc.stop(), 80);
        break;
      case 'error':
        osc.frequency.value = 200;
        gain.gain.value = 0.1;
        osc.start();
        setTimeout(() => osc.stop(), 200);
        break;
    }
  } catch {
    // Audio not supported or blocked
  }
};
