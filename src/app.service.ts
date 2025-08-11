import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getK8s(): string {
    console.log('K8s endpoint hit', process.env.APP_VERSION);
    console.log('API Key:', process.env.API_KEY);
    return '#VoltaVida pf';
  }
}
