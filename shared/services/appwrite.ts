import { Account, Client, Databases, Storage, ID } from 'react-native-appwrite';

const client = new Client();

client
    .setEndpoint(process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

export const storage = new Storage(client);
export const database = new Databases(client);
export const account = new Account(client);
export { ID };

export const APPWRITE_CONFIG = {
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
    collectionId: process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!,
    bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID!,
};