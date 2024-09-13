import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate = ( code: string) => (
  <div>
    <p>
      Код подтверждения: <h2>{code}</h2>
    </p>

    <p>
      <a href={`http://localhost:3000/api/auth/verifiend?code=${code}`}>Подтвердить регистрацию</a>
    </p>
  </div>
);