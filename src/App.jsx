import React, { useState } from 'react';
import Card from './components/Card.jsx';
import IconLinks from './components/IconLinks.jsx';
import './App.css';


const mainLinks = [
  { href: 'https://open.spotify.com/album/1HfPmp1qLgn6Q1jbG76M2d', icon: 'spotify' },
  { href: 'https://soundcloud.com/user-719323831/sets/who-df-is-mhood556?si=b484398ae9f2400dbf9d7ad33ef6fe83&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
  { href: 'https://music.apple.com/us/album/who-df-is-mhood556-ep/1835050658', icon: 'apple' },
  { href: 'https://www.youtube.com/watch?v=wBdLEFkps5U&list=OLAK5uy_k9rpWCdBIprS-cmEOu134qoTyYuHMYRak', icon: 'youtube' },
];

const cardData = [
  { 
    title: 'Newswagg anthem 2 [scootxk]', 
    links: [
      { href: 'https://open.spotify.com/track/6z7awd5fi0xCuD9kRvWZmA?si=a84e6017b4234e2e', icon: 'spotify' },
      { href: 'https://soundcloud.com/user-719323831/newswagg-anthem-2?in=user-719323831/sets/who-df-is-mhood556&si=8cac90fa1a004b0cb9a067905726be1a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
      { href: 'https://music.apple.com/us/album/newswagg-anthem-2/1835050658?i=1835050659', icon: 'apple' },
      { href: 'https://youtu.be/wBdLEFkps5U?si=85vjQhwnduwNYwGW', icon: 'youtube' },
    ]
  },
  { 
    title: 'Yk what its like [scootxk]', 
    links: [
      { href: 'https://open.spotify.com/track/694eWUyJrRW1pV3IeCYzA1?si=81148e13fa734eee', icon: 'spotify' },
      { href: 'https://soundcloud.com/user-719323831/yk-whats-it-like-scootxk?in=user-719323831/sets/who-df-is-mhood556&si=7136a7dafec245b1813bebaad1feefda&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
      { href: 'https://music.apple.com/us/album/yk-what-its-like/1835050658?i=1835050811', icon: 'apple' },
      { href: 'https://youtu.be/Zo1dP5CGNBo?si=iSrjWCiLeN9QB0s8', icon: 'youtube' },
    ]
  },
  {
    title: 'Linda listen [scootxk]',
    links: [
      { href: 'https://open.spotify.com/track/694eWUyJrRW1pV3IeCYzA1?si=81148e13fa734eee', icon: 'spotify' },
      { href: 'https://soundcloud.com/user-719323831/linda-listen-scootxk?in=user-719323831/sets/who-df-is-mhood556&si=188e91645bda427a9bad3450a57b261f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
      { href: 'https://music.apple.com/us/album/linda-listen/1835050658?i=1835050812', icon: 'apple' },
      { href: 'https://youtu.be/zRcfbmNw41M?si=HcAai_LLYvZ6qVKD', icon: 'youtube' },
    ]
  },
  {
    title: 'Hey jessie [scootxk]',
    links: [
      { href: 'https://open.spotify.com/track/1nQ1m12cOmXCtU0KPsKVoC?si=e068e83c63e140f7', icon: 'spotify' },
      { href: 'https://soundcloud.com/user-719323831/hey-jessie-scootxk?in=user-719323831/sets/who-df-is-mhood556&si=e0da3fa99a0e44739c1ac1b3fc83e01b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
      { href: 'https://music.apple.com/us/album/hey-jessie/1835050658?i=1835050813', icon: 'apple' },
      { href: 'https://youtu.be/eFw1tjwJNNA?si=eZG52l7B30KEpNyc', icon: 'youtube' },
    ]
  },
  {
    title: '#ipromise [scootxk]',
    links: [
      { href: 'https://open.spotify.com/track/3BvT9UjowNrdKRm0OZzros?si=bb47aab158de439f', icon: 'spotify' },
      { href: 'https://soundcloud.com/user-719323831/ipromise-scootxk?in=user-719323831/sets/who-df-is-mhood556&si=46d2982a15894376bfce146ea0e90790&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing', icon: 'soundcloud' },
      { href: 'https://music.apple.com/us/album/ipromise/1835050658?i=1835050814', icon: 'apple' },
      { href: 'https://youtu.be/yhvt3KkyqUE?si=CKf-0ACMFEiEii9D', icon: 'youtube' },
    ]
  }
];

const footerLinks = [
  { href: 'https://www.instagram.com/mhood556/', icon: 'instagram' },
  { href: 'https://soundcloud.com/user-719323831', icon: 'soundcloud' },
  { href: '#', icon: 'twitter' },
];

function App() {
  const [tapped, setTapped] = useState(false);

  return (
    <div className="app">
      <img
        src="mhood556.png"
        alt="Tap here"
        className={tapped ? 'tapped' : ''}
        onClick={() => setTapped(true)}
      />

      {tapped && <h1 className="fade-in">Who df is mhood556</h1>}

     
      {tapped && <IconLinks links={mainLinks} className="main-links" />}

      {tapped && (
        <div className="cards">
          {cardData.map((card, i) => (
            <Card key={i} title={card.title} links={card.links} />
          ))}
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Mhood556</p>
        <IconLinks links={footerLinks} />
      </footer>
    </div>
  );
}

export default App;
