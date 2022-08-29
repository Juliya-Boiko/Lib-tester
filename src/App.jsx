import { Routes, Route } from "react-router-dom";
import { KeenSlider } from "pages/KeenSlider";
import { Header } from "components/Header/Header";
import { Micromodal } from "pages/MicroModal";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="keenslider" element={<KeenSlider />} />
          <Route index path="micromodal" element={<Micromodal />} />
        </Route>
      </Routes>
    </div>
  );
};
