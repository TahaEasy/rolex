import WatchesTable from "../features/watches/WatchesTable";
import HomeSlider from "../features/home/HomeSlider";
import SpecialWatches from "../features/home/SpecialWatches";
import ModernWatch from "../features/home/ModernWatch";
import Brands from "../features/home/Brands";
import Categories from "../features/home/Categories";
import PopularWatches from "../features/home/PopularWatches";
import GoTopButton from "../features/home/GoTopButton";
import WatchExhibit from "../features/home/WatchExhibit";
import Benefits from "../features/home/Benefits";

const Home = () => {
  return (
    <>
      <GoTopButton />
      <section>
        <HomeSlider />
      </section>
      <section>
        <Brands />
      </section>
      <section>
        <WatchesTable />
      </section>
      <section>
        <SpecialWatches />
      </section>
      <section>
        <Categories />
      </section>
      <section>
        <ModernWatch />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <WatchExhibit />
      </section>
      <section>
        <PopularWatches />
      </section>
    </>
  );
};

export default Home;
