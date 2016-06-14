let baseUrl = 'http://localhost:5000/api';

class Api {
  constructor(authToken){
    this.authToken = authToken;
  }
  getExpenses(){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Token token="+this.authToken);
    let url = baseUrl + "/expenses";
    let payload = {
      headers: headers
    }
    return fetch(url, payload)
  }

  createSession(email, password){
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    email = email.toLowerCase().trim();
    let body = {"session": {"email": email, "password": password}};
    let url = baseUrl + "/sessions"
    let payload = {
      method: 'post',
      headers: headers,
      body: JSON.stringify(body)
    };
    return fetch(url, payload)
  }
}

export default Api
