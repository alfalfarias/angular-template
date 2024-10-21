import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { ConfigService } from "./app-initializer-config.service";

export function initializeApp(http: HttpClient, configService: ConfigService) {
    return async (): Promise<void> => {
        console.log('APP_INITIALIZER -> Loading');
        const response = await firstValueFrom(configService.loadConfig())
        console.log('APP_INITIALIZER -> ', response);
    }
}
