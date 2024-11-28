import poster from "../../public/images/poster-for-video.png";

export default function VideoPage() {
  return (
    <section className="relative flex justify-center items-center mx-auto bg-gray-800 rounded-xl w-[90%] max-w-[900px] p-4 mt-20 shadow-md">
      <video
        className="w-full h-auto rounded-xl"
        controls
        preload="none"
        poster="/images/poster-for-video.png">
        <source
          src="https://res.cloudinary.com/dc2qd4mzh/video/upload/v1732754636/LOCVM-landing%20page/xzzx6mdvuawrpiikunln.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
