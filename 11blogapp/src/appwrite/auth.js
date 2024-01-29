//In JS classes, constructor is called as soon as someone creates an object from a class.

//start with appwrite auth service

import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Appwrite service :: getCurrentUser() :: ", err);
      throw err;
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      console.log("Appwrite service :: logout() :: ", err);
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
