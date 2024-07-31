import React from "react";

interface EmailTemplateProps {
  username: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  message,
  email
}) => (
  <div>
    <h1>Message to, {username}!</h1>
    <h3>E-mail: {email}</h3>
    <p>
      Message:
      {message}
    </p>
  </div>
);
