import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectIsLoading} from "../store/shared/loading/loading.selector";
import {startLoading, stopLoading} from "../store/shared/loading/loading.action";

@Injectable({ providedIn: 'root' })
export class LoadingService {
  isSelectLoading: Observable<boolean> = this.store.select(selectIsLoading);
  constructor(
    private readonly store: Store,
  ) {}

  show(): void {
    this.store.dispatch(startLoading())
  }

  hide(): void {
    this.store.dispatch(stopLoading())
  }
}
