// ============================================================
// App — root component with routing and layout
// ============================================================
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Header, Footer } from "./components/layout";
import {
  HomePage,
  CoursesPage,
  CourseDetailPage,
  InterviewQuestionsPage,
  BlogsPage,
  BlogDetailPage,
  ContactPage,
  DashboardPage,
  LandingPage,
} from "./pages";
import "./App.css";

/* Main site layout — Header + Footer + content */
function MainLayout() {
  return (
    <div className="ci-app">
      <Header />
      <main className="ci-app__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ad landing page — standalone, no header/footer */}
        <Route path="/join" element={<LandingPage />} />

        {/* Main site routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
          <Route
            path="/interview-questions"
            element={<InterviewQuestionsPage />}
          />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
