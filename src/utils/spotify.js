export async function getSpotifyAccessToken() {
  const client_id = "2fd788b8683044ceab397e94ebf4a11a"; 
  const client_secret = "7b0535fd7f694f44b583ca2bbeb53006";  
  
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
