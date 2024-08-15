```
npm i
npm run dev -- --debug

  vite:proxy /api/v2.0/2024/events -> https://frc-api.firstinspires.org/ +25ms
Requesting frc-api.firstinspires.org//v2.0/2024/events
{
  "host": "frc-api.firstinspires.org",
  "connection": "close",
  "pragma": "no-cache",
  "cache-control": "no-cache",
  "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
  "dnt": "1",
  "sec-ch-ua-mobile": "?0",
  "authorization": "Basic dGVydmF5OjAzRjgyQjUzLUMxM0YtNDU1My1BNzZBLTcxNUZDMjY1MjY0QQ==",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
  "sec-ch-ua-platform": "\"Windows\"",
  "accept": "*/*",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  "referer": "http://localhost:5174/",
  "accept-encoding": "gzip, deflate, br, zstd",
  "accept-language": "en-US,en;q=0.9"
}
  vite:html-fallback Rewriting GET /vite.svg to /index.html +357ms
  vite:cache [memory] /src/main.tsx +102ms
  vite:time 3.10ms /index.html +102ms
Received Response from the Target: 401 {"server":"Kestrel","www-authenticate":"Basic realm=\"FRC Events API\"","date":"Thu, 15 Aug 2024 21:00:23 GMT","connection":"close","content-length":"0"}
  vite:time 124.91ms /v2.0/2024/events +41ms
Received Response from the Target: 401 {"server":"Kestrel","www-authenticate":"Basic realm=\"FRC Events API\"","date":"Thu, 15 Aug 2024 21:00:23 GMT","connection":"close","content-length":"0"}

```
