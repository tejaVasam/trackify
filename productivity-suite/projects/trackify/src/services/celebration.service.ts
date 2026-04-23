import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CelebrationService {
  private colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#c084fc', '#f472b6'];

  celebrate() {
    this.createEmojiBurst();
    this.createParticleBurst();
    this.playSuccessSound();
  }

  uncelebrate() {
    this.playSadSound();
  }

  private playSuccessSound() {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
      oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.05); // E6

      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      console.warn('Audio feedback failed', e);
    }
  }

  private playSadSound() {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(220, audioCtx.currentTime); // A3
      oscillator.frequency.linearRampToValueAtTime(110, audioCtx.currentTime + 0.4); // A2

      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
      console.warn('Audio feedback failed', e);
    }
  }

  private createEmojiBurst() {
    const emojis = ['🎉', '✨', '🔥', '⭐', '🎈', '🙌', '🚀'];
    for (let i = 0; i < 15; i++) {
      const emoji = document.createElement('div');
      emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.position = 'fixed';
      emoji.style.bottom = '20%';
      emoji.style.left = '50%';
      emoji.style.fontSize = '24px';
      emoji.style.zIndex = '10000';
      emoji.style.pointerEvents = 'none';
      document.body.appendChild(emoji);

      const destX = (Math.random() - 0.5) * 400;
      const destY = -Math.random() * 400 - 100;

      const animation = emoji.animate([
        { transform: 'translate(-50%, 0) scale(0)', opacity: 0 },
        { transform: 'translate(-50%, 0) scale(1.5)', opacity: 1, offset: 0.2 },
        { transform: `translate(calc(-50% + ${destX}px), ${destY}px) scale(1) rotate(${Math.random() * 360}deg)`, opacity: 0 }
      ], {
        duration: 2000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
      });

      animation.onfinish = () => emoji.remove();
    }
  }

  private createParticleBurst() {
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.bottom = '20%';
      p.style.left = '50%';
      p.style.width = '8px';
      p.style.height = '8px';
      p.style.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];
      p.style.borderRadius = i % 2 === 0 ? '50%' : '2px';
      p.style.zIndex = '10000';
      p.style.pointerEvents = 'none';
      document.body.appendChild(p);

      const destX = (Math.random() - 0.5) * 500;
      const destY = -Math.random() * 500 - 50;

      const animation = p.animate([
        { transform: 'translate(-50%, 0) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${destX}px), ${destY}px) rotate(${Math.random() * 1000}deg) scale(0)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 800,
        easing: 'cubic-bezier(0, .9, .57, 1)'
      });

      animation.onfinish = () => p.remove();
    }
  }
}
