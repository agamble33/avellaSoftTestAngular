import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Song } from './song';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  public isCreate = false;
  public isUpdate = false;
  public currentSong: Song | null = null;
  public songs: Array<Song> = [];
  public form = new FormGroup({
    artist: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required, Validators.maxLength(4)]),
  });

  constructor(private songService: SongsService) {}

  /**
   * @function ngOnInit Fetches Songs on component load
   * @returns void
   */
  ngOnInit(): void {
    this.getSongList();
  }

  /**
   *
   * @param song Song
   * @function removeSong Removes song from database
   * @returns void
   */
  public removeSong = (song: Song): void => {
    this.songService.delete(song).then(() => {
      alert('Song removed.');
      this.getSongList();
    });
  };

  /**
   * @function showCreateSong Toggles variables to handle create song form submission
   * @returns void
   */
  public showCreateSong = (): void => {
    this.isCreate = true;
    this.currentSong = null;
  };

  /**
   *
   * @param song Song
   * @function showUpdateSong oggles variables to handle update song form submission
   * @returns void
   */
  public showUpdateSong = (song: Song): void => {
    this.isUpdate = true;
    this.currentSong = song;
  };

  /**
   *
   * @function saveSong Creates/Updates song to database
   * @returns void
   */
  public saveSong = (): void => {
    const { artist, title, year } = this.form.value;
    if (this.isCreate) {
      const id = Math.floor(Math.random() * 999999999).toString();
      const song: Song = { id, artist, title, year };

      this.songService.create(song).then(() => {
        alert('Song created.');
        this.isCreate = false;
        this.getSongList();
      });
    } else if (this.isUpdate) {
      if (!this.currentSong) return;
      const updateId = this.currentSong?.id || '';
      const song: Song = { id: updateId, artist, title, year };
      this.songService.update(song).then(() => {
        alert('Song updated.');
        this.isUpdate = false;
        this.getSongList();
      });
    }
    this.form.reset();
  };

  /**
   * @function cancelForm Toggles varaibles to hide form
   * @returns void
   */
  public cancelForm = (): void => {
    this.currentSong = null;
    this.isCreate = false;
    this.isUpdate = false;
  };

  /**
   * @function getSongList Gets songs from database and stores in component variable
   * @returns void
   */
  public getSongList = (): void => {
    this.songService.get().then((response) => {
      this.songs = response.songs;
    });
  };
}
