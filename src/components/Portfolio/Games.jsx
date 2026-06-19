import React, { Component } from 'react';
import GifButton from '../GifButton';
import { AppleIcon, AndroidIcon, DesktopIcon, HTML5Icon } from '../PlatformIcons';

const sgBadges = [
  { icon: <AppleIcon />, label: 'iOS',     tooltip: 'iOS app' },
  { icon: <AndroidIcon />, label: 'Android', tooltip: 'Android app' },
];

const webDevBadges = [
  { icon: <DesktopIcon />, label: 'PC',    tooltip: 'Play on PC' },
  { icon: <HTML5Icon />,   label: 'HTML5', tooltip: 'Play in browser' },
];

class Games extends Component {
    render() {
        return (
            <>
                <h2>Video Games</h2>

                <h3 className='currently-working-header'>Currently Working On</h3>
                <div className='currently-working-on'>
                    <GifButton
                        href="https://tomatotoaster.itch.io/web-developer"
                        imgSrc="/public/WebDeveloper/WebDeveloperAnimatedLogo.gif"
                        imgAlt="Web Developer"
                        badges={webDevBadges}
                    />
                    <GifButton
                        to="/SpillyGoose"
                        imgSrc="/public/SpillyGoose/SpillyGooseLogoWebsite.png"
                        imgAlt="Spilly Goose"
                        badges={sgBadges}
                    />
                </div>

                <h3 className='games-section-header'>Also on my <a href={'https://tomatotoaster.itch.io'}>itch.io</a></h3>
                <div className='game-preview'>
                    <p><iframe className='itchFrame' width="552" height="167" frameBorder="0" src="https://itch.io/embed/3110297?bg_color=7d7071&amp;fg_color=302c2e&amp;link_color=e6482e&amp;border_color=615973"><a href="https://tomatotoaster.itch.io/rainbee">Rainbee (Demo) by TomatoToaster</a></iframe></p>
                    <p>
                    <iframe className='itchFrame' width="552" height="167" frameBorder="0" src="https://itch.io/embed/1654950?dark=true"><a href="https://tomatotoaster.itch.io/stardustin">Stardustin by TomatoToaster</a></iframe>
                    </p>
                    {/*
                    <p>
                    <iframe className='itchFrame' width="552" height="167" frameBorder="0" src="https://itch.io/embed/2160954?dark=true"><a href="https://tomatotoaster.itch.io/fishing-boots">Fishing Boots by TomatoToaster</a></iframe>
                    </p>
                    */}
                    <p>
                    Or try this game that I've hosted on my website by clicking below:
                    </p>
                    <a href={'https://onetwo.tomatotoaster.com'} target='_blank'>
                        <img src='https://raw.githubusercontent.com/TomatoToaster/OneTwo/master/Game_Preview.png' className='game-preview-image' />
                    </a>
                </div>
            </>
        );
    }
}

export default Games;
