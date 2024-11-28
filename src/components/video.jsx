import Video from "next-video";
import Image from "next/image";
import poster from "../../public/images/poster-for-video.png";
import locumVideo from "../../videos/locvm-video.mp4";

export default function VideoPage() {
  return (
    <section className="relative flex justify-center align-middle mx-auto border   bg-gray-800 rounded-xl sm:w-[800px] p-4 mt-20 shadow-md">
      <Video
        src={locumVideo}
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
