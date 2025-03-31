import { H3 } from "../Typography";

export const Unknown = () => (
  <div>
    <H3>The Best Songs You&apos;ve Never Heard</H3>
    <p className="text-muted-foreground mb-2">
      Some of my favorite songs that have not been heard by enough people.
    </p>
    <iframe
      src="https://open.spotify.com/embed/playlist/3CGAURFayCRuBbfuNiyq9D?utm_source=generator"
      width="100%"
      height="352"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
);
