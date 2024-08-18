import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService){}
    @Post()
    create() {
        return this.songService.create("Animals by Martin Garrix");
    }
    @Get() 
    findAll() {
        return this.songService.findAll();
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
