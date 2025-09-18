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

  headers = [
    {
      name: 'Top header'
    },
    {
      name: 'Content'
    },
    {
      name: 'Footer'
    },
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
  listChannel = [
    {
      id: 1,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 2,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 3,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },{
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },
    {
      id: 4,
      level: '1',
      timeMorning: '222222',
      timeAfternoon: '02225',
      timeNight: '02222',
      name: 'gggggg'
    },

  ]

  dayName = [{key: 'Monday', name: 'Thứ 2'}, {key: 'Tuesday', name: 'Thứ 3'},
    {key: 'Wednesday', name: 'Thứ 4'}, {key: 'Thursday', name: 'Thứ 5'}, {key: 'Friday', name: 'Thứ 6'},
    {key: 'Saturday', name: 'Thứ 7'}, {key: 'Sunday', name: 'Chủ Nhật'}
  ];

  dateTime = {
    date: [
      { label: "22-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "23-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "24-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "25-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "26-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "27-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "28-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "29-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }},
      { label: "30-07",
        value: 2207,
        day: this.getDayName("Monday"),
        dataBooking: {
          morning: [{
            id: 1,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          noon: [{
            id: 2,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }],
          dinner: [{
            id: 3,
            status: 1,
            name: 'booking',
            timeFrom: '11:00'
          }]
        }}
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  onDateChange(event: Event) {

  }

  getDayName(dayName: string) {
    console.log("this.dayName", this.dayName);
    const day = this.dayName.find((item: any) => {
      return item.key === dayName;
    });
    return day?.name ?? dayName;
  }

}
