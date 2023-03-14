"use client"
import { useEffect } from 'react';
import style from "./hero.module.css"

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

function YouTubeVideo({ videoId }: { videoId: string }) {
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag) {
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else {
      document.head.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('player', {
        videoId,
      });
    };
  }, [videoId]);

  return (
    <>
    <style jsx>{`
        .glow{
          border: 2px solid transparent;
          border-radius: 0.375rem;
          transition: all 0.2s;
          box-shadow: 0 0 40px #9137ff;
        }
        .glow:hover {
          border-color: #fff;
          
        }
      `}</style>
    <div id="player" className='sm:w-11/12 md:w-3/4 lg:w-1/2 h-96 md:h-128 lg:h-144 m-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 glow' >
      <h1 className=''>video </h1>
    </div>
    </>
  );
}

export default YouTubeVideo;