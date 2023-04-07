import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
