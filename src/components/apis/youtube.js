import axios from 'axios';
const KEY = 'AIzaSyBs_y-gyjJ9ACgPoXFiaLvdn1p04BMk-vk';

// MAIN KEY // AIzaSyBs_y-gyjJ9ACgPoXFiaLvdn1p04BMk-vk //

//ALT KEY // AIzaSyANuw6USNNTupLH1nlzhwjHFNJfk19JaOQ //

//ALT KEY // AIzaSyBX5XQWH8-f5fXVbd4Qeu9xjwl_renyCUI //

//ALT KEY // AIzaSyANq1oGYM_kIzVqJV4y8RQYNvU47O0X9gM //


export const baseParams = {
   part: "snippet",
   maxResults: 2,
   type: 'video',
   key: KEY
};
export default axios.create({
   baseURL: "https://www.googleapis.com/youtube/v3",
   params: baseParams
});