import { APPWRITE_CONFIG, database, ID, storage } from '@/shared/services/appwrite';

export async function uploadUserProfilePicture(userId: string, pickerResult: any) {
    try {
        if (!pickerResult.assets || pickerResult.assets.length === 0) {
            throw new Error('No image selected.');
        }

        const asset = pickerResult.assets[0];

        const fileToUpload = {
            name: asset.fileName || `profile_${userId}.jpg`,
            type: asset.type || 'image/jpeg',
            size: asset.fileSize,
            uri: asset.uri,
        };

        const uploadedFile = await storage.createFile(
            APPWRITE_CONFIG.bucketId,
            ID.unique(),
            fileToUpload
        );

        const userProfile = await database.createDocument(
            APPWRITE_CONFIG.databaseId,
            APPWRITE_CONFIG.collectionId,
            userId,
            {
                userId: userId,
                profilePicId: uploadedFile.$id,
            }
        );

        return userProfile;
    } catch (error: any) {
        throw new Error(error.message || 'Failed to upload profile picture.');
    }
}

export async function getUserProfilePictureUrl(fileId: string) {
    try {
        if (!fileId) return null;

        return storage.getFilePreviewURL(
            APPWRITE_CONFIG.bucketId,
            fileId,
            200,
            200,
        ).toString();
    } catch (error) {
        console.error('Error fetching preview URL:', error);
        return null;
    }
}