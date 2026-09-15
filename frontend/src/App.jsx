import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import CourseDetail from './pages/CourseDetail';
import Lesson from './pages/Lesson';
import MyLearning from './pages/MyLearning';
import ProtectedRoute from './components/auth/ProtectedRoute';

export default function App() {
  const location = useLocation();
  const isLessonPage = location.pathname.includes('/lessons/');

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 font-sans text-neutral-900">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Main Page Routing */}
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Catalog />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/courses/:courseSlug/lessons/:lessonSlug" element={<Lesson />} />
          <Route
            path="/my-learning"
            element={
              <ProtectedRoute>
                <MyLearning />
              </ProtectedRoute>
            }
          />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Global Footer (hidden on lesson player to preserve distraction-free video viewing) */}
      {!isLessonPage && <Footer />}
    </div>
  );
}
