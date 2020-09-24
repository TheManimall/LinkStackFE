import React from 'react';

const LinkCard = ({ link }) => (
  <>
    <h2>Link</h2>
    <p>Shorten link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
    <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
    <p>Count clicks: <strong>{link.clicks}</strong></p>
    <p>Date: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
  </>
);

export default LinkCard;