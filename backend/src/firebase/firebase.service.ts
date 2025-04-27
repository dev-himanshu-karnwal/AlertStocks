import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

@Injectable()
export class FirebaseService {
  constructor() {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    });
  }

  async verifyToken(idToken: string) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      return decodedToken;
    } catch (error) {
      throw new Error('Unauthorized');
    }
  }
}
