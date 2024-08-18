import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService){}
    @Post()
    create() {
        return "create a new song endpoint";
    }
    @Get() 
    findAll() {
        return "find all songs endpoint";
    }
    @Get(":id")
    findOne() {
        return "fetch songs based on id";
    }
    @Put(":id")
    update() {
        return "update the songs based upon id";
    }
    @Delete(":id")
    delete() {
        return "delete a song based upon id";
    }
}
