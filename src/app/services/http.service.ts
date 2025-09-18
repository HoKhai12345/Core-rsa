import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

interface ApiResponse {
  status: number;
  message: string;
  data: any;
}

@Injectable({providedIn: 'root'})

export class HttpService {

  apiServer = environment.apiServer;

  constructor(private httpClient: HttpClient) {

  }

  get<T>(path: string, options: {}): Observable<T> {
      return this.httpClient.get<T>(this._buildUrl(path), options)
  }

  async post<T>(path: string, body: {}, options: {}): Promise<T> {
    return await firstValueFrom(
      this.httpClient.post<T>(this._buildUrl(path), body, options)
    )
  }

  async put<T>(path: string, body: {}, options: {}): Promise<T> {
    return await firstValueFrom(
      this.httpClient.put<T>(this._buildUrl(path), body, options)
    )
  }

  async delete<T>(path: string, options: {}): Promise<T> {
    return await firstValueFrom(
      this.httpClient.delete<T>(this._buildUrl(path), options)
    )
  }

  _buildUrl(path: string) {
    let baseUrl = '';
    if (this.apiServer.host) {
      baseUrl = this.apiServer.ssl === true ? 'https://' : 'http://';
      baseUrl += this.apiServer.host;
    }
    if (this.apiServer.prefix !== '') {
      baseUrl += '/' + this.apiServer.prefix;
    }
    return baseUrl + '/' + path;
  }

  }
