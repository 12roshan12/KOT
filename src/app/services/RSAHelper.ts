import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';

@Injectable({
    providedIn: 'root',
})
export class RSAHelper {
    publicKey: string = `-----BEGIN RSA PUBLIC KEY-----
MIICCgKCAgEAjqk54qdOXEZpgL3uMPPjKU6ZGqxWnho0sf7/xTwfVAcOaBbdVgIG
8VOoUJHs2WHMMMZ1rkK+LKaiTaWcWSBbDudzOffT0hgvjgsp8MOkO/247jZuz2Y2
YRwzngrYpJv1m7wqL8kNcBtp4KGvfvRUG4A2nhFBJzc9tIFbKlua6yJEOcis3FNA
knNH2UafR57y/bVsKQBOnG+x90pfA64OdZADVEbxHxmrB8TCyQQ0fxqb22/7txmA
/lEb/KxaRljpA9nELBkEcudcKp21aUL4X/cgegZuee7/9oC7J3nkBtEVZLuhC0o2
FlF3w3w1R6Dw9mHYEdpDFkMqNkUlHQysidp874aGGZ+wlz7kLdjhClRAYBugMQj6
lMWTe45kxfIMl3rLPq1lZJkvFNSA0IUCeUUIY9emwUetP/Z+hudjY3hhHacYiCvN
lu9j9Jw9QycoxeXcjpJK6u9MZoISeRSXYH678JJFnsb35n/fENfA68IHSdK0JQEQ
YPPxOy0cA2majEQNOTiXVOR4lgVgu0MOE7iI/E8kV3M2WzFNnEwpVDBOUx3yozXg
qa/OKRxYzC7cnLsyzuBscaSTqAuOBmowDr51SvhRCfO6TM125tGYaPgpOC7ODYGv
8q8YfFLPJrJ+Pgt1INvvnYsqaFCjk9YpPXE3daeDNyAj7ScQesxpMusCAwEAAQ==
-----END RSA PUBLIC KEY-----`;

    constructor() {}

    encryptWithPublicKey(valueToEncrypt: string): string {
        const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
        return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
    }

    decryptWithPrivateKey(valueToEncrypt: string): string {
        const rsa = Forge.pki.privateKeyFromPem(this.publicKey);
        return window.btoa(rsa.decrypt(valueToEncrypt.toString()));
    }

}
