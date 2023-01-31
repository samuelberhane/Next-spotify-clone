import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";

const useSpotify = () => {
  const { data: session } = useSession();
  let spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_SPOTIFY_ID,
    clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET,
  });

  // set spotify accessToken
  useEffect(() => {
    if (session?.accessToken) {
      spotifyApi.setAccessToken(session?.accessToken);
    }
  }, [session?.accessToken]);
  return spotifyApi;
};

export default useSpotify;
