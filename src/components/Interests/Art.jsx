import React, { Component, Fragment } from 'react';

const BACKGROUND_URLS = [
  {
    urlSmall: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Backgrounds/SunsetTomato/OceanSunsetTomatoRaw.gif',
    urlBig: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Backgrounds/SunsetTomato/OceanSunsetTomato.gif',
    altText: 'Ocean Sunset with a Tomato as the Sun',
  },
  {
    urlSmall: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Backgrounds/Rain/Cat_In_Rain_Raw.gif',
    urlBig: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Backgrounds/Rain/Cat_In_Rain.gif',
    altText: 'Cat sitting outside in the rain',
  },
];
const SPRITE_URLS = [
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Sprites/Cat/CurlyTailCat.gif', altText: 'Curly Tail Cat' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Sprites/Flower/DancingFlower.gif', altText: 'Dancing Flower' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Sprites/Cat/HappyPenCat.gif', altText: 'Happy Pen Cat' },
]

const SPRITE_URLS2 = [
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Whole/FreazyPeazy/Peazy.gif', altText: 'Peazy' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Whole/RainBee/BeeEater.gif', altText: 'Bee Eater (a bird)' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Whole/CatCopyPaste/PJ.gif', altText: 'PJ from Cat Copy Paste' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Whole/RainBee/Bee.gif', altText: 'Bee' },
  { url: 'https://raw.githubusercontent.com/TomatoToaster/PixelArt/main/Whole/RainBee/Queen.gif', altText: 'Queen Bee' },
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
        <p>I'm an amateur in the art stuff don't judge :)</p>

        <a href={'https://github.com/TomatoToaster/PixelArt/tree/main/Sprites'} target='_blank'>
          Check out some of the sprites I've been working on:
        </a>
        <div className='pixel-sprites'>
          {SPRITE_URLS.map(DigitalArtPiece)}
        </div>

        <div className='pixel-sprites'>
          {SPRITE_URLS2.map(DigitalArtPiece)}
        </div>

        <br/>

        <a href={'https://github.com/TomatoToaster/PixelArt/tree/main/Backgrounds'} target='_blank'>
          Or some of the backgrounds:
        </a>
        <div className='pixel-backgrounds'>
          {BACKGROUND_URLS.map(ResizableDigitalArtPiece)}
        </div>
{/* 
        <--- Congrats you found this commented out stuff I don't really do 3D stuff so don't worry about this right now --->
        <h2>3D Modeling</h2>
        <p>You can view models I've made on <a href={'https://sketchfab.com/6174'}>my sketchfab</a>.</p>
        <p>Here's some rendered output too:</p>
        <div>
          <iframe width="540" height="676" src="https://www.youtube.com/embed/rNZYClvcqv0" title="Sword Dolly" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
*/}
      </Fragment>
    );
  }
}

export default Art;
