type VideoBackgroundProps = {
  videoUrl: string;
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
