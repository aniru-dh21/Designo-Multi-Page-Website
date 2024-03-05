import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageContainer from "./components/shared/page.container";
import PageContent from "./components/shared/page.content";
import Header from "./components/header/header";
import HomePage from "./pages/home.page";
import Footer from "./components/footer/footer";
import WebDesignPage from "./pages/webdesign.page";
import AppDesignPage from "./pages/adddesign.page";
import GraphicPage from "./pages/graphic.page";
import AboutPage from "./pages/about.page";
import LocationsPage from "./pages/location.page";
import ContactPage from "./pages/contact.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <HomePage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/webdesign",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <WebDesignPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/appdesign",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <AppDesignPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/graphicdesign",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <GraphicPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/about",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <AboutPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/locations",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <LocationsPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageContainer>
        <PageContent>
          <Header />
          <ContactPage />
        </PageContent>
        <Footer />
      </PageContainer>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
