interface VideoPlayerProps {
  fileId: string;
}

const VideoPlayer = ({ fileId }: VideoPlayerProps) => {
  const videoUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="video-container">
      <iframe
        src={videoUrl}
        width="640"
        height="480"
        allow="autoplay"
        title="Google Drive Video"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
