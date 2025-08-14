import { AuthState } from './shared/auth/auth.reducer';

export interface AppState {
  auth: AuthState;
  loading: any;
  toast: any;
}
