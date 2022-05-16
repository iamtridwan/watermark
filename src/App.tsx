import React, { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Integrate = lazy(() => import("./pages/Integrate"));
const How = lazy(() => import("./pages/How"));
const Loading = lazy(() => import("./components/Loading"));
const Layout = lazy(() => import("./components/Layout"));

function App() {
  const navigate = useNavigate()
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="integrate" element={<Integrate />} />
          <Route path="how" element={<How />} />
          <Route path="*" element={
            <div>
              <p>Sorry this is a dead end</p>
              <button onClick={() => navigate("/")}>Back to home</button>
            </div>
          } />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

