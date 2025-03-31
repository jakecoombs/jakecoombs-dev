import Intro from "@/components/Intro";
import Music from "@/components/Music";

const HomePage = () => {
  return (
    <main className="bg-white mt-4 container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Intro />
      <Music />
    </main>
  );
};

export default HomePage;
