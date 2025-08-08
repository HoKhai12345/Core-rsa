import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeDropdown: null | "chat" | "notification" | 'setupUser' | 'setting' = null;
  constructor() { }

  ngOnInit(): void {}

  toggleDropdown(type: 'chat' | 'notification' | 'setupUser' | 'setting') {
    this.activeDropdown = this.activeDropdown === type ? null : type;
  }


}
