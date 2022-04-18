import { BaseApiService } from "./base";
export class FlightsApiService extends BaseApiService {

    async getFlights(){
        return await (await this.httpClient.get('https://sd26cjicx5izxcazmcjs6f6hpi0zcexq.lambda-url.eu-central-1.on.aws/')).data;
    }
}