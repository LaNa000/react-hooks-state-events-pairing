import {useState} from "react";

function VideoSection({video}) {

  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

    return (
      <>
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <button onClick={() => setUpvotes(upvotes+1)}>{upvotes} 👍</button>
      <button onClick={() => setDownvotes(downvotes+1)}>{downvotes} &#128078;</button>
      </>
    );
}
export default VideoSection;