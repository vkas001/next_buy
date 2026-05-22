import { account, ID } from '@/shared/services/appwrite';

export async function loginUser(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log('Successfully authenticated! Session ID:', session.$id);
        return session;
    } catch (error: any) {
        throw new Error(error.message || 'Failed to sign in.');
    }
}

export async function signUpUser(email: string, password: string, name: string) {
    try {

        await account.create(ID.unique(), email, password, name);

        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error: any) {
        throw new Error(error.message || 'Registration failed');
    }
}

export async function logoutUser() {
    try {
        await account.deleteSession({ sessionId: 'current' });
        // console.log('Session ended successfully.');
        return true;
    } catch (error: any) {
        throw new Error(error.message || 'Failed to log out.');
    }
}

export async function getCurrentUser() {
    try {
        const currentUser = await account.get();
        return currentUser;
    } catch (error: any) {

        // console.log('No active session found:', error.message);
        return null;
    }
}