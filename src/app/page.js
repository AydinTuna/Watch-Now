import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"

export default async function Home() {
  const session = await getServerSession(options)

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
