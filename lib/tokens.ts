import { getVerficicationTokenByEmail } from '@/data/verification-token';
import { v4 as uuidv4 } from 'uuid';
import { db } from './db';

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    // expire token in 1 hour
    const expires = new Date(new Date().getTime() + 3600 * 1000);

    const existingToken = await getVerficicationTokenByEmail(email);

    // if a token already exists, delete it
    if (existingToken) {
        await db.verificationToken.delete({
            where: { 
                id: existingToken.id 
            },
        });
    }

    // otherwise create a new token
    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires,
        },
    });

    return verificationToken;
}