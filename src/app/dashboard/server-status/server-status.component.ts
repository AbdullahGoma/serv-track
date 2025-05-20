import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  @HostBinding('class') get statusClass() {
    return `status-${this.currentStatus}`;
  }
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
}
