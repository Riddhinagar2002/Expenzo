import { randomBytes } from 'crypto';

function generateJWTSecret() {
  const secret = randomBytes(64).toString('hex');
  console.log('Your new JWT Secret:', secret);
}

generateJWTSecret();
