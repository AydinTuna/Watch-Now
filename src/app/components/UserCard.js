export default async function Card({ user }) {
    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.name}!
        </div>
    ) : null

    // const emailDisplay = user?.email ? (
    //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
    //         {user?.email}
    //     </div>
    // ) : null

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            {/* {videoList} */}
        </section>
    )
}