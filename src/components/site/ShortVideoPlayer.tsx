import { useState } from "react";

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const shortMatch = parsed.pathname.match(/\/shorts\/([^/?#]+)/);
    if (shortMatch) return shortMatch[1];
    if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

export function ShortVideoPlayer({ url, title }: { url: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const [unconfigured, setUnconfigured] = useState(false);

  const handleLaunch = () => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) {
      setUnconfigured(true);
      return;
    }
    setPlaying(true);
  };

  const videoId = getYouTubeVideoId(url);

  return (
    <div className="relative aspect-[9/16] w-[260px] sm:w-[300px] mx-auto md:mx-0 bg-[color:var(--ink)] overflow-hidden rounded-md shadow-xl">
      {playing && videoId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={handleLaunch}
          aria-label="Reproduzir vídeo em destaque"
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <span
              className="block w-0 h-0 ml-1"
              style={{
                borderTop: "10px solid transparent",
                borderBottom: "10px solid transparent",
                borderLeft: "16px solid white",
              }}
            />
          </span>
          <span className="text-xs uppercase tracking-widest">
            {unconfigured ? "Vídeo indisponível" : "Assistir vídeo"}
          </span>
        </button>
      )}
    </div>
  );
}
