import { Routes, Route } from "react-router-dom";
import { KeenSlider } from "pages/KeenSlider";
import { Header } from "components/Header/Header";
import { CarouselSlider } from "pages/CarouselSlider";
import { DigitalClock } from "pages/Clock";
import { LogoWall } from "pages/LogoWall";
import { FirebaseAuth } from "pages/FirebaseAuth";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="keenslider" element={<KeenSlider />} />
          <Route path="carouselslider" element={<CarouselSlider />} />
          <Route path="clock" element={<DigitalClock />} />
          <Route path="logowall" element={<LogoWall />} />
          <Route path="firebaseauth" element={<FirebaseAuth />} />
        </Route>
      </Routes>
    </div>
  );
};
