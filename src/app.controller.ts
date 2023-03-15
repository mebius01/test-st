import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): { version: any } {
    return { version: process.env.npm_package_version };
  }
}
