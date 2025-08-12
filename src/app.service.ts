import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'node:fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getK8s(): string {
    const file = createWriteStream('k8s.log');

    for(let x = 0; x < 5000; x++) {
      file.write(`K8s endpoint hit ${process.env.APP_VERSION}\n`);
      file.write(`API Key: ${process.env.API_KEY}\n`);
    }
    file.end();
    return '#VoltaVida pf';
  }
}
