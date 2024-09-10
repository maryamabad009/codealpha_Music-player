import React, { useState, useRef, useEffect } from 'react';
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

// Import audio files
import song1Audio from '../audio/song1.mp3';
import song2Audio from '../audio/song2.mp3';
import song3Audio from '../audio/song3.mp3';
import song4Audio from '../audio/song4.mp3';

const HomePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showMusicPage, setShowMusicPage] = useState(false);
    const [showPlaylistPage, setShowPlaylistPage] = useState(false);
    const [currentSong, setCurrentSong] = useState({
        title: 'Song 1',
        artist: 'Artist 1',
        albumCover: image4,
        audioSrc: song1Audio, // Initial audio source
    });
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Create a ref to control the audio element
    const audioRef = useRef(null);

    useEffect(() => {
        // Event listener to update time as the song plays
        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        // Event listener to set duration once metadata is loaded
        const handleLoadedMetadata = () => {
            setDuration(audioRef.current.duration);
        };

        const audio = audioRef.current;
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        // Clean up event listeners on component unmount
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    // Function to format time (mm:ss)
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Function to toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            audioRef.current.pause(); // Pause the audio if playing
        } else {
            audioRef.current.play(); // Play the audio if paused
        }
    };

    // Function to expand the music player on double-click
    const handleDoubleClick = () => {
        setShowMusicPage(true); // Expand the music player page on double-click
    };

    // Close the expanded music player
    const closeMusicPage = () => {
        setShowMusicPage(false); // Close the expanded music page
    };

    // Open the playlist page
    const openPlaylistPage = () => {
        setShowPlaylistPage(true); // Show the playlist page
    };

    // Close the playlist page
    const closePlaylistPage = () => {
        setShowPlaylistPage(false); // Close the playlist page
    };

    // Function to handle song selection from the playlist
    const handleSongSelection = (song) => {
        setCurrentSong(song); // Update the current song to the selected song
        setIsPlaying(false);  // Pause any current playback to allow loading

        audioRef.current.src = song.audioSrc; // Change the audio source
        audioRef.current.load(); // Load the new audio source

        // Play the song once it's ready
        audioRef.current.oncanplay = () => {
            setIsPlaying(true);  // Update state to reflect that the song is playing
            audioRef.current.play();  // Start playing the new song
        };

        closePlaylistPage(); // Close the playlist page and return to the music player
    };

    // Function to update the seek bar manually
    const handleSeekChange = (event) => {
        const newTime = event.target.value;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime); // Update the current time
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
                        <p>{currentSong.title}</p>
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
                                    <h2>{currentSong.title}</h2>
                                    <p>{currentSong.artist}</p>
                                </div>
                                <button className="playlist-button" onClick={openPlaylistPage}>
                                    <i className="fas fa-list"></i>
                                </button>
                            </div>
                            <div className="album-cover">
                                <img src={currentSong.albumCover} alt="Album cover" />
                            </div>
                            <div className="seek-bar">
                                <input
                                    type="range"
                                    min="0"
                                    max={duration} // Set max to the duration of the song
                                    value={currentTime} // Bind value to the currentTime
                                    className="seek-slider"
                                    onChange={handleSeekChange} // Allow user to seek manually
                                />
                                <div className="seek-time">
                                    <span>{formatTime(currentTime)}</span>
                                    <span>{formatTime(duration)}</span>
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
                                <h2 className="play-title">Playlist</h2>
                            </div>
                            <div className="song-list">
                                {[
                                    { title: 'Song 1', artist: 'Artist 1', albumCover: image4, audioSrc: song1Audio },
                                    { title: 'Song 2', artist: 'Artist 2', albumCover: image5, audioSrc: song2Audio },
                                    { title: 'Song 3', artist: 'Artist 3', albumCover: image7, audioSrc: song3Audio },
                                    { title: 'Song 4', artist: 'Artist 4', albumCover: image8, audioSrc: song4Audio },
                                    { title: 'Song 5', artist: 'Artist 5', albumCover: image9, duration: song1Audio },
                                    { title: 'Song 6', artist: 'Artist 6', albumCover: image10, duration: song2Audio },
                                    { title: 'Song 7', artist: 'Artist 7', albumCover: image1, duration: song3Audio },
                                    { title: 'Song 8', artist: 'Artist 8', albumCover: image2, duration: song4Audio },
                                    { title: 'Song 9', artist: 'Artist 9', albumCover: image3, duration: song1Audio },
                                    { title: 'Song 10', artist: 'Artist 10', albumCover: image5, duration: song2Audio },
                                    { title: 'Song 11', artist: 'Artist 11', albumCover: image4, duration: song3Audio },
                                ].map((song, index) => (
                                    <div key={index} className="song-item">
                                        <img src={song.albumCover} alt={song.title} />
                                        <p>{song.title}</p>
                                        <button
                                            className="play-icon"
                                            onClick={() => handleSongSelection(song)}
                                        >
                                            <i className="fas fa-play"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* iPhone Bottom Indicator */}
                <div className="iphone-bottom-indicator"></div>

                {/* Audio element to play the current song */}
                <audio ref={audioRef} />
            </div>
        </div>
    );
};

export default HomePage;
