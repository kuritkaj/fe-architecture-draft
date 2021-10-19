---
to: src/infrastructure/api/<%= domain %>/<%= Name %>ApiRepository.ts
---
import {
  Inject,
  Injectable
} from "/src/lib/di/di";
import { HttpClient } from "/src/infrastructure/service/http/HttpClient";
import { <%= Name %>Repository } from "/src/domain/service/<%= domain %>/<%= Name %>Repository";
import { <%= Name %>ApiMapper } from "./<%= Name %>ApiMapper";

@Injectable()
export class <%= Name %>ApiRepository implements <%= Name %>Repository {
    constructor(@Inject(HttpClient) protected httpClient: HttpClient) {}
}
