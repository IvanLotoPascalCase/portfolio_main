import "../styling/blurryfilter.css";
import Divider from "./Reuse/Divider";

const About = () => {
  return (
    <section className="bg-primary-skill blur-background-filter bg-opacity-50 px-[10vh]">
      <div className="flex justify-center">
        <div className="flex w-[35vh] h-full m-4 justify-center items-center text-pf-dp text-6xl rounded-xl p-2 text-f-secondary">
          <h2 className="m-2">About Me</h2>
        </div>
      </div>
      <Divider />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 w-[160vh] h-full mx-8 mb-8 justify-items-center items-center text-pf-dp rounded-xl text-lg font-normal text-f-secondary text-center">
          <p className="lg:w-3/4 pb-6">
            So embarking in the process of self-discovery has been one of the
            most challenging things to do. And I made this portfolio thing just
            to make a safe place to be, like a spot where I can code quietly and
            improve without any concern.
          </p>
          <p className="lg:w-3/4 pb-6">Also it's a letter for the future-me.</p>
          <p className="lg:w-3/4 pb-6">
            So yeah, I'm Iván. I'm 24, and since I was a kid I had this
            fascination for the artsy thing. Also, I was a child who used the
            computer a lot, so I was very interested in the subject. So when it
            came time to pick a path after graduation, I went with the tech
            route. I wasn't even sure about that decision, but turns out pretty
            well. So I decided that I wanted to be a web developer, because that
            way, I could combine the things I liked the most: technology and
            art.
          </p>
          <p className="lg:w-3/4 pb-6">
            Now, speaking of art, music is practically sacred to me. I can lose
            myself in a good tune any day. And video games? Oh, don't get me
            started. That love for gaming is what nudged me toward programming
            in the first place. The idea of creating virtual worlds got me
            hooked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
