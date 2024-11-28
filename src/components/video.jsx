import Video from "next-video";
import Image from "next/image";
import poster from "../../public/images/poster-for-video.png";

export default function VideoPage() {
  return (
    <section className="flex justify-center align-middle mx-auto border   bg-gray-800 rounded-xl w-[800px] p-4 mt-20 shadow-md">
      <Video
        src="https://res.cloudinary.com/dc2qd4mzh/video/upload/v1732754636/LOCVM-landing%20page/xzzx6mdvuawrpiikunln.mp4"
        width="100%"
        height="100%"
        className="border-4 border-black rounded-xl ">
        <Image
          slot="poster"
          src={poster}
          placeholder="blur"
          alt="Some peeps doing something awesome"
        />
      </Video>
    </section>
  );
}
