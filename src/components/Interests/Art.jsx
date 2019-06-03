import React, { Component, Fragment } from 'react';

const BACKGROUND_URLS = [
  { 
    urlSmall: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Backgrounds/SunsetTomato/OceanSunsetTomatoRaw.gif',
    urlBig: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Backgrounds/SunsetTomato/OceanSunsetTomato.gif',
    altText: 'Ocean Sunset with a Tomato as the Sun',
  },
  { 
    urlSmall: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Backgrounds/Rain/Cat_In_Rain_Raw.gif',
    urlBig: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Backgrounds/Rain/Cat_In_Rain.gif',
    altText: 'Cat sitting outside in the rain',
  },
];
const SPRITE_URLS = [
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Sprites/Cat/CurlyTailCat.gif', altText: 'Curly Tail Cat' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Sprites/Flower/DancingFlower.gif', altText: 'Dancing Flower' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/master/Sprites/Cat/HappyPenCat.gif', altText: 'Happy Pen Cat' },
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
      <Fragment>
        <h2>Pixel Art</h2>
        <p>Full disclaimer, I've only recently started learning how to make this, so I'm still very much an amateur!</p>

        <a href={'https://github.com/TomatoToaster/PixelArt/tree/master/Sprites'} target='_blank'>
          Check out some of the sprites I've been working on:
        </a>
        <div className='pixel-sprites'>
          {SPRITE_URLS.map(DigitalArtPiece)}
        </div>

        <br/>

        <a href={'https://github.com/TomatoToaster/PixelArt/tree/master/Backgrounds'} target='_blank'>
          Or some of the backgrounds:
        </a>
        <div className='pixel-backgrounds'>
          {BACKGROUND_URLS.map(ResizableDigitalArtPiece)}
        </div>
      </Fragment>
    );
  }
}

export default Art;
