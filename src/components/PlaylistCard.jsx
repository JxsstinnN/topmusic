import { useEffect, useState } from "react";
import { getSpotifyAccessToken } from "../utils/spotify";
import PlayButton from "./PlayButton.astro";

const PlaylistCard = ({ categoryId }) => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const accessToken = await getSpotifyAccessToken();
      const response = await fetch(
        `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setPlaylists(data.playlists.items);
      setLoading(false);
    };

    fetchPlaylists();
  }, [categoryId]);

  if (loading) return <div>Cargando Playlists</div>;

  return (
    <div className="playlist-container">
      {playlists.map((playlist) => (
        <a
          key={playlist.id}
          className="playlist-item flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
        >
          <div class="h-20 w-20">
            <img
              src={playlist.icons[0].url}
              alt={playlist.name}
              class="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div class="font-bold block">{playlist.name}</div>
          <div
            class={
              "absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            }
            >
            
          </div>
        </a>
      ))}
    </div>
  );
};

export default PlaylistCard;
