// ============================================================
// App — root component with routing and layout
// ============================================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
} from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="ci-app">
        <Header />
        <main className="ci-app__main">
          <Routes>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
