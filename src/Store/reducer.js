import * as actionTypes from "./actions";

const State = {
  selectedArtistID: null,
  selectedAlbumID: null,
  selectedPlaylistID: null,
  selectedProfileID: null,
  userID: null,
  userToken: null,
  RecommendedArtists: [],
  selectedSong: {songURL:""},
  loggenIn: false,
  user:{ImgUrl:""},

  ProfileImgUrl:"",
  ArtistLogin:false,

  selectedSong: {_id : "1", SongName :"Perfect", Artist: "Ed Sheeran",AlbumName:"Perfect",Duration : "3:52", imgURL:"https://i.ytimg.com/vi/0R6YO0IAN48/maxresdefault.jpg", songURL:"https://www.mboxdrive.com/Perfect - Ed Sheeran (Lyrics).mp3"},
  loggenIn: false,
  user:{ID:"1",type:"user",Email:"mnader93@yahoo.com",Password:"123456789",Username:"MohammedNader",Date:"28 july 1999",ImgUrl:"https://www.somagnews.com/wp-content/uploads/2020/01/a7-12-e1579117751843.jpg"},
}


const reducer = (state = State, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ARTIST:
      return {
        ...state,
        selectedArtistID: action.value

      };
      break;
    case actionTypes.Recommend:
      if (action.value[0]){
        state.RecommendedArtists.push(action.value[1])
          return{
              ...state,
              // artists: ()=>state.artists.push(Action.payload[1])
          }
      }
      else{
        const index=state.artists.indexOf(action.value[1])
        console.log("removed item at",index)
        artists:state.RecommendedArtists.splice(index,1)
        return{
            ...state,
        }
      }
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
      return {
        ...state,
        userID: action.payload.id,
        userToken: action.payload.token,
        loggenIn: true
      };
      break;
      
    case actionTypes.ON_SIGNIN:
      return {
        ...state,
        user:action.payload.user,
        loggenIn: true
      };
      break;
    
    case actionTypes.ON_SIGNIN:
      return {
        ...state,
        user:action.payload.user,
        loggenIn: true,
        ArtistLogin:true,
      };
      break;

    case actionTypes.ON_SIGNOUT:
      return {
        ...state,
        loggenIn: false,
        ArtistLogin:false,
        userID: null,
        userToken: null
        };
      break;
      case actionTypes.SELECT_PHOTO:
        console.log(action.value)
      return {
        ...state,
        ProfileImgUrl: action.value

      };
      break;
    default:
      return state;
      break;
  }
};

export default reducer;