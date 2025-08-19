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

  timeDayWeek= [
    {label: 'Thứ 2'},
    {label: 'Thứ 3'},
    {label: 'Thứ 4'},
    {label: 'Thứ 5'},
    {label: 'Thứ 6'},
    {label: 'Thứ 7'},
    {label: 'Chủ nhật'},
    {label: 'Thứ 2'},
    {label: 'Thứ 3'},
    {label: 'Thứ 4'},
    {label: 'Thứ 5'},
    {label: 'Thứ 6'},
    {label: 'Thứ 7'},
    {label: 'Chủ nhật'},
  ]
  timeSlots = ['Sáng', 'Chiều', 'Tối'];
  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: Event) {

  }

}
