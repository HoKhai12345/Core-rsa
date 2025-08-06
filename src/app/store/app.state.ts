import {SharedState} from "./shared/shared.state";
import {SHARED_STATE_NAME} from "./shared/shared.selector";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState
}
