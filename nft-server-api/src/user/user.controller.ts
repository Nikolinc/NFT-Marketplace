import { Controller, Get } from '@nestjs/common';

@Controller('/user')
export class UserController {
  create() {
    return null;
  }

  @Get('/all')
  getAll() {
    return 'user';
  }

  getOne() {
    return null;
  }

  delete() {
    return null;
  }
}
