import { Hero, VideosList, Footer } from "./sections";
import Home from "./Sections/Home";
import Nav from "./components/Nav";
const App = () => {
  return (
    <div>
      <main className="relative">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <Home />
        </section>
        <section className="padding">
          <VideosList />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default App;
