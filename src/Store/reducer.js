import * as actionTypes from "./actions";

const initialState = {

  selectedArtistID: null,
  selectedAlbumID: null,
  selectedPlaylistID: null,
  selectedProfileID: null,
  userID: null,
  userToken: null,

  ArtistLogin:true,

  selectedSong: {_id : "1", SongName :"Perfect", Artist: "Ed Sheeran",AlbumName:"Perfect",Duration : "3:52", imgURL:"https://i.ytimg.com/vi/0R6YO0IAN48/maxresdefault.jpg", songURL:"https://www.mboxdrive.com/Perfect - Ed Sheeran (Lyrics).mp3"},
  loggenIn: false,
  user:{ID:"1",Email:"mnader93@yahoo.com",Password:"123456789",Username:"MohammedNader",Date:"28 july 1999",ImgUrl:"https://www.somagnews.com/wp-content/uploads/2020/01/a7-12-e1579117751843.jpg"},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ARTIST:
      return {
        ...state,
        selectedArtistID: action.value

      };
      break;

    case actionTypes.SELECT_ALBUM:
      return {
        ...state,
        selectedAlbumID: action.value

      };
      break;

    case actionTypes.SELECT_SONG:
      return {
        ...state,
        selectedSong: action.value
      };
      break;

    case actionTypes.SELECT_PLAYLIST:
      return {
        ...state,
        selectedPlaylistID: action.value

      };
      break;

    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        selectedProfileID: action.value

      };
      break;

    case actionTypes.ON_SIGNUP:
      console.log(action.payload.id);
      return {
        ...state,
        userID: action.payload.id,
        userToken: action.payload.token,
        loggenIn: true
      };
      break;
      
    case actionTypes.ON_SIGNIN:
      console.log(action.payload)
      return {
        ...state,
        user:action.payload.user,
        loggenIn: true
      };
      break;

    case actionTypes.ON_SIGNOUT:
      return {
        ...state,
        loggenIn: false,
        userID: null,
        userToken: null
        };
      break;
      
    default:
      return state;
      break;
  }
};

export default reducer;