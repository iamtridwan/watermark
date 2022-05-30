import React, { lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Integrate = lazy(() => import("./pages/Integrate"));
const How = lazy(() => import("./pages/How"));
const Loading = lazy(() => import("./components/Loading"));
const Layout = lazy(() => import("./components/Layout"));
const Uploads = lazy(() => import("./pages/Uploads"));
const Result = lazy(() => import("./pages/Result"));

function App() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="integrate" element={<Integrate />} />
          <Route path="how" element={<How />} />
          <Route
            path="*"
            element={
              <div
                style={{
                  color: "#2D3047",
                  fontSize: "18px",
                  margin: "80px auto",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  
                }}
              >
                <p>Sorry this is a dead end</p>
                <button
                  onClick={() => navigate("/")}
                  style={{
                    background: "#2D3047",
                    color: "white",
                    padding: "15px",
                    fontSize: "20px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Back to home
                </button>
              </div>
            }
          />
          <Route path="/upload" element={<Uploads />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
