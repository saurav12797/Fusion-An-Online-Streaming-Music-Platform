export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "e5fb50203631411cae1d0b3f04db8f00";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-modify",
  "playlist-modify-public",
  "playlist-modify-private",
];

export const getTokenFromUrl = () => {
  return window.location.hash /* location =url hash=# */
    .substring(1) /* get the 1st substring */
    .split("&") /* split 1st substring after &  */
    .reduce((initial: any, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
