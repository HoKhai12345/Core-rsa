import { AuthState } from './shared/auth/auth.reducer';
import { LoadingState } from './shared/loading/loading.reducer';
import { ToastState } from './shared/toast/toast.reducer';

export interface AppState {
  auth: AuthState;
  loading: LoadingState;
  toast: ToastState;
}
