import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    // local DB
    // local Array
    private readonly songs = [];
    create(song) {
        // Save the song into db
        this.songs.push(song);
        return this.songs;
    }
    findAll() {
        // Fetch the songs from db
        return this.songs;
    }
}
