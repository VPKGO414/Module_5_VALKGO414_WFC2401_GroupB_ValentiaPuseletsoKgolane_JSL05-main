// Array of song objects. Add songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Life for Rent", artist: "Dido", genre: "Spanish Rock" },
    { title: "White Flag", artist: "Dido", genre: "Spanish Rock" },
    { title: "Sand in My Shoes", artist: "Dido", genre: "Spanish Rock" },
    { title: "Don't Leave Home", artist: "Dido", genre: "Spanish Rock" },
    { title: "Thank You", artist: "Dido", genre: "Spanish Rock" },
];

const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop",
    "Valentia": "Spanish Rock",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = {};
    for (const guardian in guardians) {
        const genre = guardians[guardian];
        playlists[guardian] = songs.filter(song => song.genre === genre);
    }
    return playlists;
}

// Function to display playlists
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');
    Object.entries(playlists).map(([guardian, playlist]) => {
        const guardianPlaylistElement = document.createElement('div');
        guardianPlaylistElement.classList.add('playlist', 'guardian-playlist');
        const header = document.createElement('h2');
        header.textContent = `${guardian}'s Playlist:`;
        header.classList.add('playlist-header');
        guardianPlaylistElement.appendChild(header);
        const songList = document.createElement('div');
        songList.classList.add('song-list');
        playlist.map(song => {
            const songItem = document.createElement('div');
            const songName = document.createElement('span');
            const songArtist = document.createElement('span');
            songName.textContent = `${song.title}`;
            songName.classList.add('song-title');
            songArtist.textContent = ` by ${song.artist}`;
            songArtist.classList.add('song-artist');
            songItem.appendChild(songName);
            songItem.appendChild(songArtist);
            songList.appendChild(songItem);
        });
        guardianPlaylistElement.appendChild(songList);
        playlistsContainer.appendChild(guardianPlaylistElement);
    });
}

// Call generatePlaylist and displayPlaylists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
