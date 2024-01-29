import { Client, Databases, Storage, Query, ID } from "appwrite";

import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (err) {
      console.log("Service Error::getPost()", err);
      return false;
    }
  }

  async getPostsSelectedQuery(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Service Error::getPostsSelectedQuery()", err);
    }
  }

  async createPost({ title, content, slug, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Service Error::createPost()", err);
    }
  }

  async updatePost(slug, { title, featuredImage, content, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Service Error::updatePost()", err);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Service Error::updatePost()", err);
    }
  }

  //storage service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite error::uploadFile()", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite error::deleteFile()", error);
    }
  }

  previewFile(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
    } catch (error) {
      console.log("Appwrite error::previewFile()", error);
    }
  }
}

const service = new Service();
export default service;
