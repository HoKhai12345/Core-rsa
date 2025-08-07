import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css']
})
export class SvgIconComponent implements OnInit {

  @Input() name!: string;
  @Input() type: 'solid' | 'outline' = 'solid';
  @Input() version: '16' | '20' | '24' = '20';
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const path = `assets/icons/heroicons/${this.version}/${this.type}/${this.name}.svg`;
    this.http.get(path, { responseType: 'text' }).subscribe((svg) => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
    });
  }


}
