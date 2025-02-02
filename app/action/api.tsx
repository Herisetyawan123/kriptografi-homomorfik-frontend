import SessionApp from "./session";

class Api {
  static url = "https://kriptografi-homomorfik-backend.vercel.app"
  static login = "/api/login"
  static register = "/api/register"
  static logout = "/api/logout"
  static topup = "/api/topup"
  static withdraw = "/api/withdraw"
  static dashboard = "/api/dashboard"
  static transactions = "/api/transactions"
  headers = {};
  token: string | null = null;

  static async get(endpoint: string, auth: boolean = false, header: Object | null = null) {
    let headers: any = {
      "Content-Type": "application/json",
    }
    let token: string | null = null;
    if (headers != null)
      headers = { ...headers, header };

    if (auth) {
      token = SessionApp.get("token");
      if (token == null) {
        throw "Unauthorization";
      }
      headers = {
        "Authorization": `Bearer ${token}`,
        ...headers
      }
    }

    return await fetch(Api.url + endpoint, {
      headers: headers,
    });
  }

  static async post(endpoint: string, body: Object, auth: boolean = false, header: Object | null = null) {
    let headers: any = {
      "Content-Type": "application/json",
    }
    let token: string | null = null;
    if (header != null)
      headers = { ...headers, header };

    if (auth) {
      token = SessionApp.get("token");
      if (!token) {
        throw "Unauthorization";
      }
      headers = {
        "Authorization": `Bearer ${token}`,
        ...headers
      }
    }

    return await fetch(Api.url + endpoint, {
      method: "post",
      headers: headers,
      body: JSON.stringify(body),
    });
  }

}

export default Api;
