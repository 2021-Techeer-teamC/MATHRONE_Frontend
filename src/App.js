import './App.css';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/User/SignIn.tsx';
import SignUp from './pages/User/SignUp.tsx';
import InfoPage from './pages/InfoPage.js';
import Workbook from './pages/Workbook';
import WorkbookDetail from './pages/WorkbookDetail';
import Rank from './pages/Rank/index.tsx';
import ProblemDetail from './pages/ProblemDetail';
import Result from './pages/Result';
import Profile from './pages/Profile/index';
import Error from './pages/Error/index';
import OauthGoogle from './pages/Oauth/Oauth2RedirectLoading';
import OauthKakao from './pages/Oauth/Oauth2KakaoRedirect';
import Success from './pages/Payment/result/Success';
import Fail from './pages/Payment/result/Fail';
import Cancel from './pages/Payment/result/Cancel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/error" exact element={<Error />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/info" exact element={<InfoPage />} />
          <Route path="/workbook" exact element={<Workbook />} />
          <Route path="/workbook/:id" element={<WorkbookDetail />} />
          <Route path="/rank" exact element={<Rank />} />
          <Route path="/oauth/callback/google" exact element={<OauthGoogle />} />
          <Route path="/oauth/callback/kakao" exact element={<OauthKakao />} />
          <Route path="problem/:workbookId">
            <Route path=":chapterId" element={<ProblemDetail />} />
            <Route path="" element={<ProblemDetail />} />
          </Route>
          {/*임시 테스트용*/}
          <Route path="/result" exact element={<Result />} />
          {/*임시 테스트용*/}
          <Route path="/payment/success" exact element={<Success />} />
          <Route path="/payment/fail" exact element={<Fail />} />
          <Route path="/payment/cancel" exact element={<Cancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
