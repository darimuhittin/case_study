import { BaseApiService } from "./base"

export class PassangerApiService extends BaseApiService {
    async createPassanger(passanger){
        return await (await this.httpClient.post("https://zitfutnmyicch2zrixpqkp6l6u0hfwcz.lambda-url.eu-central-1.on.aws",passanger)).data.message;
    }
}