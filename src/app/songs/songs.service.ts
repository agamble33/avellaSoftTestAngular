import { Injectable } from '@angular/core';
import { Song } from './song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  constructor() {}
  private songDatabase: { songs: Array<Song> } = {
    songs: [
      {
        id: '1',
        title: '1904',
        artist: 'The Tallest Man on Earth',
        year: '2012',
      },
      {
        id: '12',
        title: '#40',
        artist: 'Dave Matthews',
        year: '1999',
      },
      {
        id: '13',
        title: '40oz to Freedom',
        artist: 'Sublime',
        year: '1996',
      },
      {
        id: '14',
        title: '#41',
        artist: 'Dave Matthews',
        year: '1996',
      },
      {
        id: '15',
        title: 'American Girl',
        artist: 'Tom Petty',
        year: '1977',
      },
      {
        id: '16',
        title: 'American Music',
        artist: 'Violent Femmes',
        year: '1991',
      },
      {
        id: '17',
        title: 'American Pie',
        artist: 'Don McLean',
        year: '1972',
      },
      {
        id: '18',
        title: 'And it Stoned Me',
        artist: 'Van Morrison',
        year: '1970',
      },
      {
        id: '19',
        title: "A Sailor's Christmas",
        artist: 'Jimmy Buffett',
        year: '1996',
      },
      {
        id: '10',
        title: 'Badfish',
        artist: 'Sublime',
        year: '1996',
      },
      {
        id: '111',
        title: 'Banana Pancakes',
        artist: 'Jack Johnson',
        year: '2005',
      },
      {
        id: '112',
        title: 'Barefoot Children',
        artist: 'Jimmy Buffett',
        year: '1995',
      },
      {
        id: '113',
        title: 'Big Parade',
        artist: 'The Lumineers',
        year: '2012',
      },
      {
        id: '114',
        title: 'Brown Eyed Girl',
        artist: 'Van Morrison',
        year: '1967',
      },
      {
        id: '115',
        title: 'Cape Canaveral',
        artist: 'Conor Oberst',
        year: '2008',
      },
      {
        id: '116',
        title: 'Carry On',
        artist: 'fun.',
        year: '2012',
      },
      {
        id: '117',
        title: 'Catch the Wind',
        artist: 'Donovan',
        year: '1965',
      },
      {
        id: '118',
        title: "Cat's in the Cradle",
        artist: 'Harry Chapin',
        year: '1974',
      },
      {
        id: '119',
        title: 'Changes in Latitudes, Changes in Attitudes',
        artist: 'Jimmy Buffett',
        year: '1977',
      },
      {
        id: '120',
        title: 'Classy Girls',
        artist: 'The Lumineers',
        year: '2012',
      },
      {
        id: '121',
        title: 'Creep',
        artist: 'Radiohead',
        year: '1993',
      },
      {
        id: '122',
        title: 'Danny Boy',
        artist: 'Johnny Cash',
        year: '2002',
      },
      {
        id: '123',
        title: 'Darkness Between the Fireflies',
        artist: 'Mason Jennings',
        year: '1997',
      },
      {
        id: '124',
        title: 'Dead Sea',
        artist: 'The Lumineers',
        year: '2012',
      },
      {
        id: '125',
        title: 'Distantly in Love',
        artist: 'Jimmy Buffett',
        year: '1983',
      },
      {
        id: '126',
        title: "Don't Leave Me (Ne Me Quitte Pas)",
        artist: 'Regina Spektor',
        year: '2012',
      },
      {
        id: '127',
        title: "Don't Look Back in Anger",
        artist: 'Oasis',
        year: '1996',
      },
      {
        id: '127',
        title: "Don't Stop Believin'",
        artist: 'Journey',
        year: '1981',
      },
      {
        id: '129',
        title: 'Doomsday',
        artist: 'Elvis Perkins',
        year: '2009',
      },
      {
        id: '130',
        title: 'Do You Remember',
        artist: 'Jack Johnson',
        year: '2005',
      },
      {
        id: '131',
        title: 'Drink the Water',
        artist: 'Jack Johnson',
        year: '2001',
      },
    ],
  };

  /**
   * @function get Fetches Songs from database
   * @returns Promise which resolves with { Songs: song[] }
   */
  get = (): Promise<{ songs: Song[] }> => {
    return Promise.resolve(this.songDatabase);
  };

  /**
   * @param song Song
   * @function create Creates song and stores into database
   * @returns Promise<void>
   */
  create = (song: Song): Promise<void> => {
    this.songDatabase.songs.push(song);
    return Promise.resolve();
  };

  /**
   * @param song Song
   * @function update Updates Song in database
   * @returns Promise<void>
   */
  update = (song: Song): Promise<void> => {
    this.songDatabase.songs = this.songDatabase.songs.map((item, i) => {
      if (item.id === song.id) {
        item = song;
      }
      return item;
    });
    return Promise.resolve();
  };

  /**
   * @param song Song
   * @function delete Deletes Song from database
   * @returns Promise<void>
   */
  delete = (song: Song): Promise<void> => {
    this.songDatabase.songs = this.songDatabase.songs.filter(function (item) {
      return item.id !== song.id;
    });
    return Promise.resolve();
  };
}
