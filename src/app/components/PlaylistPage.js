// export default function PlaylistPage({ videos }) {
//     console.log(videos);
//     return (
//         <div>
//             <h1>YouTube Playlist</h1>
//             <ul>
//                 {videos.map((item) => (
//                     <li key={item.id}>
//                         <a
//                             href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             {item.snippet.title}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
