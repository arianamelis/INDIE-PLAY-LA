import axios from "../../node_modules/axios";

// Export an object containing methods we'll use for accessing the ticketMaster API

export default {
  getIndieArtistEvents: function () {
    return axios.get("/api/events/ticketMaster ");
  },


  getIndieArtists: function () {
    return axios.get("/api/artists/ticketMaster ");
  },

  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/signup', { username: username, email: email, password: password });
  },
  searchArtist: (name) => {
    return axios.get(`/api/events/artist/${name}`);
  },
  getProfileEvents: (email) =>{
    return axios.get(`api/events/all/${email}`); 
  }
    // /api/events/${email}


  // // creates event 
  // createFavEvent: (user_id) => {
  //   return axios.post(`/api/event/${user_id}`);
  // }
};
