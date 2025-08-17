import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Directive({
    selector: '[appStatusRolesDirective]'
})
export class StatusRolesDirective implements OnInit {

    @Input() status!: number | undefined;

    roles = {
        status0: 'badge badge-danger font-size-sm',
        status1: 'badge badge-success font-size-sm',
    };

    constructor(private el: ElementRef,
                private renderer: Renderer2,
                public translate: TranslateService) {
    }

    ngOnInit() {
        const key = this.translate.instant('common.core.admin.roles.status' + this.status);
        const statusKey = 'status' + this.status;
        const className = this.roles[statusKey as keyof typeof this.roles] || '';
        this.el.nativeElement.className = className;
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', key);
    }
}
