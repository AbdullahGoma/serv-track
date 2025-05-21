import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // @HostBinding('class') get statusClass() {
  //   return `status-${this.currentStatus}`;
  // }
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef)
  // private interval?: ReturnType<typeof setInterval>;

  constructor() {
    effect(() => { 
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // this.interval = 
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 to 0.999

      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
