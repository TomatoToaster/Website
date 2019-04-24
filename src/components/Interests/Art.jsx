import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

const BACKGROUND_URLS = [
  { 
    urlSmall: 'https://raw.githubusercontent.com/TomatoToaster/Backgrounds/master/SunsetTomato/OceanSunsetTomatoRaw.gif',
    urlBig: 'https://raw.githubusercontent.com/TomatoToaster/Backgrounds/master/SunsetTomato/OceanSunsetTomato.gif',
    altText: 'Ocean Sunset with a Tomato as the Sun',
  },
];
const SPRITE_URLS = [
  { url: 'https://raw.githubusercontent.com/TomatoToaster/Sprites/master/Cat/CurlyTailCat.gif', altText: 'Curly Tail Cat' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/Sprites/master/Cat/HappyPenCat.gif', altText: 'Happy Pen Cat' },
] 
const DigitalArtPiece = ({url, altText}) => ( 
  <img src={url} alt={altText} className="digital-art-piece" />
); 

const ResizableDigitalArtPiece = ({urlSmall, urlBig, altText}) => (
  <div className="resizable-digital-art-piece">
    <img src={urlSmall} alt={altText} className="small-digital-art-piece" />
    <img src={urlBig} alt={altText} className="big-digital-art-piece" />
  </div>
);

class Art extends Component { 
  render() {
    return (
      <Segment>
        <h2>Pixel Art</h2>
        <p>Full disclaimer, I've only recently started learning how to make this, so I'm still very much an amateur!</p>

        <a href={'https://github.com/TomatoToaster/Sprites.git'} target='_blank'>
          <p> Check out some of the sprites I've been working on: </p>
        </a>
        <div className='pixel-sprites'>
          {SPRITE_URLS.map(DigitalArtPiece)}
        </div>

        <br/>

        <a href={'https://github.com/TomatoToaster/Backgrounds.git'} target='_blank'>
          <p> Or some of the backgrounds: </p>
        </a>
        <div className='pixel-backgrounds'>
          {BACKGROUND_URLS.map(ResizableDigitalArtPiece)}
        </div>
      </Segment>
    );
  }
}

export default Art;
