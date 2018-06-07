import auth0 from "auth0-js";

const LOGIN_SUCCESS_PAGE = '/secret';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "daves-auth-server.auth0.com",
    clientID: "N4B28JxvZLVBVolk6BdpZPFJCAhmdUKe",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://daves-auth-server.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {

  }

  isAuthenticated() {

  }
}
