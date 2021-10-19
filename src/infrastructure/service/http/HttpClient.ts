import { Injectable } from "/src/lib/di/di";

@Injectable()
export class HttpClient {
  public get(url: string): Promise<Response> {
    return fetch(url);
  }
}
