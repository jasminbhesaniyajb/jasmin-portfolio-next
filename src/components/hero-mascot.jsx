"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Hero character mascot — a looping 3D character clip framed as a circular
 * "spotlight" orb that fills the empty gap in the hero.
 *
 * The clip has a solid-black background (no alpha), so it lives inside a
 * pure-black circle with an on-brand glow — the black edges melt in and it
 * reads as an intentional orb. Sources are ordered H.264 MP4 first (plays
 * everywhere, incl. Safari) then the original AV1 webm; a poster frame paints
 * instantly and a real profile photo is the last-resort fallback. Motion is
 * skipped under prefers-reduced-motion (the poster frame stays put).
 */
const HeroMascot = ({ className = "" }) => {
  const videoRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced) {
      const play = video.play?.();
      if (play?.catch) play.catch(() => {/* autoplay may be blocked; ignore */});
    }
  }, []);

  return (
    <div
      className={cn(
        "mascot-in mascot-bob relative aspect-square overflow-hidden rounded-full bg-black glow-ring ring-1 ring-primary-500/30",
        className
      )}
    >
      {failed ? (
        <img
          src="/images/jasmin-profile.webp"
          alt="Jasmin Bhesaniya"
          className="h-full w-full object-cover object-center"
        />
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          poster="/character/cartoon_character_poster.jpg"
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onError={() => setFailed(true)}
        >
          <source src="/character/cartoon_character.mp4" type="video/mp4" />
          <source src="/character/cartoon_character.webm" type="video/webm" />
        </video>
      )}
    </div>
  );
};

export default HeroMascot;
