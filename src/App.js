import './App.css';
import Main from './pages/Main'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import InfoPage from "./pages/InfoPage.js";
import Books from "./pages/Workbook/index.tsx";
import BookDetail from "./pages/WorkbookDetail";
import Rank from "./pages/Rank/index.tsx";
import SignIn from "./pages/User/SignIn.tsx";
import SignUp from "./pages/User/SignUp.tsx";
import ProblemDetail from './pages/ProblemDetail';
import Result from './pages/Result';

const sections = [
  { title: "소개", url: "/info" },
  { title: "교재", url: "/books" },
  { title: "랭킹", url: "/rank" },
];

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact element={<Main sections={sections}/>} />
            <Route path="/signin" exact element={<SignIn/>} />
            <Route path="/signup" exact element={<SignUp/>} />
            <Route path="/info" exact element={<InfoPage sections={sections}/>} />
            <Route path="/books" exact element={<Books sections={sections}/>} />
            <Route path="/books/:id" element={<BookDetail sections={sections}/>} />
            <Route path="/rank" exact element={<Rank sections={sections}/>} />
            <Route path="/problem/:workbookId/:chapterId" element={<ProblemDetail sections={sections}/>} /> {/*임시 테스트용*/}
            <Route path="/result" exact element={<Result sections={sections}/>} /> {/*임시 테스트용*/}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
