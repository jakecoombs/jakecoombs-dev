import { H3 } from "../Typography";

export const Top = () => (
  <div>
    <H3>Current Rotation</H3>
    <p className="text-muted-foreground mb-2">
      The top tracks in my rotation right now.
    </p>
    <iframe
      src="https://open.spotify.com/embed/playlist/37i9dQZF1EpideeuTcZ0K3?utm_source=generator"
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
);
