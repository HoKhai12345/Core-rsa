import { Component, OnInit } from '@angular/core';
import {BreadCrumbs} from "../../../../models/bread-crumbs.model";

@Component({
  selector: 'app-booking-location',
  templateUrl: './booking-location.component.html',
  styleUrls: ['./booking-location.component.css']
})
export class BookingLocationComponent implements OnInit {
  selectedDate = '';
  breadcrumbs: BreadCrumbs[] = [
    { label: 'Home', nameIcon: 'home', url: '/dashboard' },
    { label: 'Booking location', nameIcon: 'calculator', url: '/booking-location' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: Event) {

  }

}
