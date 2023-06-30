import Banner from "./components/Banner";
import Header from "./components/Header";
import Announcements from "./components/Announcements";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <section className="h-full">
      <header>
        <Header />
      </header>
      <section>
        <Banner />
      </section>
      <article className="space-y-8 pt-8" aria-label="contents">
        <section>
          <Announcements />
        </section>
        <section>
          <Projects />
        </section>
      </article>
    </section>
  );
};

export default Home;
