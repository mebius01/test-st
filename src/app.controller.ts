import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): { version } {
    return { version: process.env.npm_package_version };
  }
}
