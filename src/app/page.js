import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import axios from "axios"
import youtubeService from './services/youtube.js';
import PlaylistPage from "./components/PlaylistPage";
import { google } from "googleapis"
import { redirect } from 'next/navigation'


export default async function Home() {
  const session = await getServerSession(options)

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_ID,
    process.env.GOOGLE_SECRET,
    process.env.REDIRECT_URL
  );

  const scopes = [
    'https://www.googleapis.com/auth/youtube.readonly'
  ];

  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true
  });

  if (authorizationUrl) {
    redirect(authorizationUrl)
  }
  console.log(authorizationUrl);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <>
          <UserCard user={session?.user} pagetype={"Home"} />
          {/* <PlaylistPage videos={playlistItems} /> */}
        </>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </div>
  )
}
