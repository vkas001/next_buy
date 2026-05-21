import { account } from '@/shared/services/appwrite';

export async function loginUser(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log('Successfully authenticated! Session ID:', session.$id);
        return session;
    } catch (error: any) {
        throw new Error(error.message || 'Failed to sign in.');
    }
}