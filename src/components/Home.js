import React, { useState } from 'react';
import './Home.css'; // Import your CSS file
import { Carousel } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';

const HomePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMusicPage, setShowMusicPage] = useState(false);
    const [showPlaylistPage, setShowPlaylistPage] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying); // Toggle between play and pause
    };

    const handleDoubleClick = () => {
        setShowMusicPage(true); // Expand the music player page on double-click
    };

    const closeMusicPage = () => {
        setShowMusicPage(false); // Close the expanded music page
    };

    const openPlaylistPage = () => {
        setShowPlaylistPage(true); // Show the playlist page
    };

    const closePlaylistPage = () => {
        setShowPlaylistPage(false); // Close the playlist page
    };

    return (
        <div className="app-container">
            <div className="mobile-frame">
                {/* iPhone Notch */}
                <div className="iphone-notch"></div>

                {/* Carousel */}
                <div className="home-container">
                    <Carousel className="music-carousel">
                        <Carousel.Item>
                            <img className="d-block w-100" src={image2} alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={image1} alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={image3} alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>

                    {/* Recently Played */}
                    <div className="section-title">Recently Played</div>
                    <div className="scroll-container">
                        <div className="track-card">
                            <img src={image4} alt="Track 1" />
                            <p>Top International</p>
                        </div>
                        <div className="track-card">
                            <img src={image5} alt="Track 2" />
                            <p>BTS Collection</p>
                        </div>
                        <div className="track-card">
                            <img src={image7} alt="Track 3" />
                            <p>Bollywood</p>
                        </div>
                        <div className="track-card">
                            <img src={image8} alt="Track 4" />
                            <p>Hollywood</p>
                        </div>
                    </div>

                    {/* Based On Your Listening */}
                    <div className="contain">
                        <div className="section-title">Based On Your Listening</div>
                        <div className="scroll-container">
                            <div className="track-card">
                                <img src={image9} alt="Track 3" />
                                <p>Top International</p>
                            </div>
                            <div className="track-card">
                                <img src={image10} alt="Track 4" />
                                <p>BTS Collection</p>
                            </div>
                            <div className="track-card">
                                <img src={image5} alt="Track 5" />
                                <p>Bollywood</p>
                            </div>
                            <div className="track-card">
                                <img src={image4} alt="Track 6" />
                                <p>Hollywood</p>
                            </div>
                        </div>
                    </div>

                    {/* Minimized Music Player */}
                    <div className="minimized-player" onDoubleClick={handleDoubleClick}>
                        <p>Song 1</p>
                        <div className="player-controls">
                            <button className="player-button">
                                <i className="fas fa-step-backward"></i> {/* Previous button */}
                            </button>
                            <button className="player-button" onClick={togglePlayPause}>
                                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i> {/* Play/Pause toggle */}
                            </button>
                            <button className="player-button">
                                <i className="fas fa-step-forward"></i> {/* Next button */}
                            </button>
                        </div>
                    </div>

                    {/* Expanded Music Player Page */}
                    {showMusicPage && (
                        <div className="expanded-music-page">
                            <div className="music-header">
                                <button className="back-button" onClick={closeMusicPage}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <div className="music-info">
                                    <h2>Song 1</h2>
                                    <p>Artist 1</p>
                                </div>
                                <button className="playlist-button" onClick={openPlaylistPage}>
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>
                            <div className="album-cover">
                                <img src={image5} alt="Album cover" />
                            </div>
                            <div className="seek-bar">
                                <input type="range" min="0" max="100" value="10" className="seek-slider" />
                                <div className="seek-time">
                                    <span>00:08</span>
                                    <span>03:09</span>
                                </div>
                            </div>
                            <div className="music-controls">
                                <button className="player-button">
                                    <i className="fas fa-sync-alt"></i> {/* Repeat button */}
                                </button>
                                <button className="player-button">
                                    <i className="fas fa-step-backward"></i> {/* Previous button */}
                                </button>
                                <button className="player-button" onClick={togglePlayPause}>
                                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i> {/* Play/Pause toggle */}
                                </button>
                                <button className="player-button">
                                    <i className="fas fa-step-forward"></i> {/* Next button */}
                                </button>
                                <button className="player-button">
                                    <i className="fas fa-volume-up"></i> {/* Volume button */}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Playlist Page */}
                    {showPlaylistPage && (
                        <div className="playlist-page">
                            <div className="playlist-header">
                                <button className="back-button" onClick={closePlaylistPage}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <h2 className='play-title'>Playlist</h2>
                            </div>
                            <div className="song-list">
                                <div className="song-item">
                                    <img src={image4} alt="Song 1" />
                                    <p>Song 1</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image5} alt="Song 2" />
                                    <p>Song 2</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image7} alt="Song 3" />
                                    <p>Song 3</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image4} alt="Song 3" />
                                    <p>Song 4</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image5} alt="Song 3" />
                                    <p>Song 5</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image7} alt="Song 3" />
                                    <p>Song 6</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image1} alt="Song 3" />
                                    <p>Song 7</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image8} alt="Song 3" />
                                    <p>Song 8</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image7} alt="Song 3" />
                                    <p>Song 9</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image10} alt="Song 3" />
                                    <p>Song 10</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                                <div className="song-item">
                                    <img src={image2} alt="Song 3" />
                                    <p>Song 11</p>
                                    <button className="play-icon">
                                        <i className="fas fa-play"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* iPhone Bottom Indicator */}
                <div className="iphone-bottom-indicator"></div>
            </div>
        </div>
    );
};

export default HomePage;
