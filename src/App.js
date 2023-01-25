import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "./pages/User/SignIn.tsx";
import SignUp from "./pages/User/SignUp.tsx";
import InfoPage from "./pages/InfoPage.js";
import Workbook from "./pages/Workbook";
import WorkbookDetail from "./pages/WorkbookDetail";
import Rank from "./pages/Rank/index.tsx";
import ProblemDetail from "./pages/ProblemDetail";
import Result from "./pages/Result";
import Profile from "./pages/Profile/index";
import Error from "./pages/Error/index";
import OauthGoogle from "./pages/Oauth/Oauth2RedirectLoading";
import OauthKakao from "./pages/Oauth/Oauth2KakaoRedirect";

const sections = [
  { title: "소개", url: "/info" },
  { title: "문제집", url: "/workbook" },
  { title: "랭킹", url: "/rank" },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main sections={sections} />} />
          <Route path="/error" exact element={<Error sections={sections} />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route
            path="/profile"
            exact
            element={<Profile sections={sections} />}
          />
          <Route
            path="/info"
            exact
            element={<InfoPage sections={sections} />}
          />
          <Route
            path="/workbook"
            exact
            element={<Workbook sections={sections} />}
          />
          <Route
            path="/workbook/:id"
            element={<WorkbookDetail sections={sections} />}
          />
          <Route path="/rank" exact element={<Rank sections={sections} />} />
          <Route
            path="/oauth/callback/google"
            exact
            element={<OauthGoogle sections={sections} />}
          />
          <Route
            path="/oauth/callback/kakao"
            exact
            element={<OauthKakao sections={sections} />}
          />
          <Route
            path="/problem/:workbookId/:chapterId"
            element={<ProblemDetail sections={sections} />}
          />{" "}
          {/*임시 테스트용*/}
          <Route
            path="/result"
            exact
            element={<Result sections={sections} />}
          />{" "}
          {/*임시 테스트용*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
