import { Controller, Get, Post,Body, Put, Delete, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
    constructor(private songService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: CreateSongDto) {
        const results = this.songService.create(createSongDTO);
        return results;
    }

    @Get()
    findAll() {
        try {
            return this.songService.findAll();
        } catch (e) {
            throw new HttpException(
                'Server error',
                HttpStatus.INTERNAL_SERVER_ERROR,
                { cause: e },
            );
        }
    }

    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return `Fetch song based on id: ${id} (type: ${typeof id})`;
    }

    @Put(':id')
    update(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return `Update the song based on id: ${id}`;
    }

    @Delete(':id')
    delete(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
            }),
        )
        id: number,
    ) {
        return `Delete the song based on id: ${id}`;
    }
}
