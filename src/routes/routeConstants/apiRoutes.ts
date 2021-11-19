export const ApiRoutes = {
  BASE_URL: "https://api.spotify.com/v1",
  ARTIST: "/artists",
  ARTIST_LIST:
    "?ids=1dVygo6tRFXC8CSWURQJq2,3gBKY0y3dFFVRqicLnVZYz,4YRxDV8wJFPHPTeXepOstw,3eDT9fwXKuHWFvgZaaYC5v",
  TRACK_LIST: "/top-tracks?market=ES",
  LATEST_RELEASE: "/browse/new-releases?country=IN&limit=20&offset=5",
  LATEST_CATEGOTRY: "/browse/categories",
  SEARCH: "/search?",
  SEARCH_ARTIST: "&type=artist&limit=10&offset=5",
  SEARCH_TYPE: "&type=track&limit=10&offset=5",
  FOLLOW_ARTIST: "/me/following?type=artist",
  UNFOLLOW_ARTIST: "/me/following?type=artist",
  PLAYER_DATA: "/me/player?market=ES",
  PLAY_PAUSE: "/me/player/devices",
};

/* play pause https://api.spotify.com/v1/me/player/play?device_id=0d1841b0976bae2a3a310dd74c0f3df354899bc8 */

/* player data
https://api.spotify.com/v1/me/player */

/* follow - https://api.spotify.com/v1/me/following?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6 */

/*  SEARCH_ARTIST:"/search?q=Muse&type=artist&limit=10&offset=5", */

/* https://api.spotify.com/v1/artists?ids=4YRxDV8wJFPHPTeXepOstw,0oOet2f43PA68X5RxKobEy,3eDT9fwXKuHWFvgZaaYC5v,3OLGltG8UPIea8sA4w0yg0 */

/* FOLLOW */

/* https://api.spotify.com/v1/me/following?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6 */

/* UNFOLLOW */
/* https://api.spotify.com/v1/me/following?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6 */
