var playlist = {
  ironMaiden: 'The Ides Of March',
  saxon: 'Crusader',
  blackSabbath: 'Iron Man',
  savatage: 'White Witch'
};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
