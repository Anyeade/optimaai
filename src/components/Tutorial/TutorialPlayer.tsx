// Extend window type for YouTube API
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}
"use client";
import React, { useRef, useState } from "react";

interface TutorialPlayerProps {
  videoId: string;
  title: string;
}



const TutorialPlayer: React.FC<TutorialPlayerProps> = ({ videoId, title }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef = useRef<HTMLIFrameElement>(null);

  // Load YouTube IFrame API and set playback rate
  React.useEffect(() => {
    // Only run on client
    if (!window || !playerRef.current) return;

    let player: any = null;
    let ytScript: HTMLScriptElement | null = null;

    function onYouTubeIframeAPIReady() {
      // @ts-ignore
      player = new window.YT.Player(playerRef.current, {
        events: {
          onReady: () => {
            player.setPlaybackRate(playbackRate);
          },
        },
      });
    }

    // If YT API already loaded
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady();
    } else {
      // Load the IFrame Player API code asynchronously.
      ytScript = document.createElement('script');
      ytScript.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(ytScript);
      // @ts-ignore
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (ytScript) document.body.removeChild(ytScript);
      // Clean up player if needed
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  // Update playback rate when changed
  React.useEffect(() => {
    // @ts-ignore
    if (window.YT && playerRef.current && playerRef.current.contentWindow) {
      // Post message to iframe to set playback rate
      playerRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'setPlaybackRate', args: [playbackRate], id: videoId }),
        '*'
      );
    }
  }, [playbackRate, videoId]);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-primary-200 dark:border-primary-800 bg-gradient-to-br from-white via-primary-50 to-primary-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      {/* Responsive aspect ratio for video */}
      <div className="w-full aspect-video bg-black relative">
        <iframe
          ref={playerRef}
          className="w-full h-full rounded-2xl absolute top-0 left-0"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0&controls=1&enablejsapi=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {/* Overlay gradient for effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-white/80 dark:bg-neutral-900/80 border-t border-primary-100 dark:border-primary-800">
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-gray-700 dark:text-gray-200">Speed:</label>
          <select
            className="ml-1 px-2 py-1 rounded border border-primary-200 dark:border-primary-700 text-xs bg-white dark:bg-neutral-800"
            value={playbackRate}
            onChange={(e) => setPlaybackRate(Number(e.target.value))}
          >
            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
              <option key={rate} value={rate}>{rate}x</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export { TutorialPlayer };