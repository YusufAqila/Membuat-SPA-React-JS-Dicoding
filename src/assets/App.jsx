import { ThemeContext } from "./components/ThemeProvider";
import HomePage from "./pages/HomePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import AddNewPage from "./pages/AddNewPage";
import ReadNotesPage from "./pages/ReadNotesPage";
import Navigation from "./components/Navigation";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div className="app-container" data-theme={theme}>
          <header>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/archives" element={<ArchivedNotesPage />} />
              <Route path="/notes/new" element={<AddNewPage />} />
              <Route path="/notes/edit/:id" element={<AddNewPage />} />
              <Route path="/notes/:id" element={<ReadNotesPage />} />
            </Routes>
          </main>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
