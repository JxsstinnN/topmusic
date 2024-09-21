export async function getSpotifyAccessToken() {
  const client_id = ""; 
  const client_secret = "";  
  
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(client_id + ":" + client_secret)}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();
  return data.access_token;  
}
