import React, { Component } from 'react';

const IOS_APP_STORE_URL = null; // Add iOS App Store URL here when ready
const GOOGLE_PLAY_URL = null;   // Add Google Play URL here when ready

const AppStoreBadge = ({ platform, url }) => {
    const label = platform === 'ios' ? 'App Store' : 'Google Play';
    const sublabel = platform === 'ios' ? 'Download on the' : 'Get it on';

    if (url) {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="sg-store-badge sg-store-badge--active">
                <span className="sg-store-badge__sub">{sublabel}</span>
                <span className="sg-store-badge__label">{label}</span>
            </a>
        );
    }

    return (
        <div className="sg-store-badge sg-store-badge--soon">
            <span className="sg-store-badge__sub">{sublabel}</span>
            <span className="sg-store-badge__label">{label}</span>
            <span className="sg-store-badge__coming-soon">Coming Soon</span>
        </div>
    );
};

const ScreenshotPlaceholder = ({ index }) => (
    <div className="sg-screenshot-placeholder">
        <span>Screenshot {index}</span>
    </div>
);

class SpillyGoose extends Component {
    render() {
        return (
            <div className="sg-page">
                <div className="sg-hero">
                    <h1 className="sg-title">Spilly Goose</h1>
                    <p className="sg-tagline">A mobile game about a very messy goose.</p>
                    <div className="sg-store-badges">
                        <AppStoreBadge platform="ios" url={IOS_APP_STORE_URL} />
                        <AppStoreBadge platform="android" url={GOOGLE_PLAY_URL} />
                    </div>
                </div>

                <div className="sg-section">
                    <h2 className="sg-section-title">Screenshots</h2>
                    <div className="sg-screenshots">
                        <ScreenshotPlaceholder index={1} />
                        <ScreenshotPlaceholder index={2} />
                        <ScreenshotPlaceholder index={3} />
                    </div>
                </div>

                <div className="sg-section">
                    <h2 className="sg-section-title">Gameplay</h2>
                    <div className="sg-video-placeholder">
                        <span>Gameplay Video</span>
                        <span className="sg-video-placeholder__sub">Coming Soon</span>
                    </div>
                </div>

                <div className="sg-section">
                    <h2 className="sg-section-title">About the Game</h2>
                    <p className="sg-description">
                        Spilly Goose is coming soon. Check back here for more details!
                    </p>
                </div>
            </div>
        );
    }
}

export default SpillyGoose;
