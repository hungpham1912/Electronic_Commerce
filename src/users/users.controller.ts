import { Controller, Get, Post, Delete, Put, Body, Param, Header, Req, Request, Res, Response } from '@nestjs/common';
import { UsersService } from './users.service'


@Controller('users')
export class UsersController {
    constructor(private readonly UserMethod: UsersService) { }
    @Get()
    private async getUser() {
        return this.UserMethod.getAll();
    }
}
