import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(
    public router: Router
  ) { }
  ngOnInit(): void {}

  redirect(url: string) {
    this.router.navigate([url], {});
    // tắt sidebar
    const drawerToggle = document.getElementById('my-drawer') as HTMLInputElement;
    if (drawerToggle) {
      drawerToggle.checked = false; // Đóng drawer
    }
  }
}
