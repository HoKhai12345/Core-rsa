import { createAction, props } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";

export class ToastActionComponent {
    constructor(
        private translate: TranslateService
    ) {

    }
}
export const enabledToast = createAction(
    '[Toast] Enabled',
    props<{ message: string }>()
  );
export const disabledToast = createAction('[Toast] Disabled');
