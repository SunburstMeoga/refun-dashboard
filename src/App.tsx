import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Personal from './pages/Personal';
import Pool from './pages/Pool';
import DirectPush from './pages/DirectPush';
import PoolAward from './pages/PoolAward';
import BindedUser from './pages/BindedUser'
import AccRewards from './pages/AccRewards'
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    console.log(pathname)
    setTimeout(() => setLoading(false), 1000);
    // setTimeout(() => setIsLogin(true), 5000);
  }, []);
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    const handleTokenChange = () => {
      const newToken = localStorage.getItem('token');
      console.log('Token changed:', newToken);
      setToken(newToken);
      if (newToken !== null) {
        setIsLogin(true)
      }
    };

    // 页面加载时手动检查一次
    handleTokenChange();

    // 定期检查 token 更新
    const interval = setInterval(handleTokenChange, 1000);

    return () => clearInterval(interval);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    !isLogin ? (<Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Signin | ReFun" />
            <SignIn />
          </>
        }
      />
    </Routes>) : (<DefaultLayout>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <Personal />
            </>
          }
        />
        <Route
          path="/pools"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <Pool />
            </>
          }
        />

        <Route
          path="/direct-push"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <DirectPush />
            </>
          }
        />
        <Route
          path="/pool-award"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <PoolAward />
            </>
          }
        />

        <Route
          path="/binded-user"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <BindedUser />
            </>
          }
        />
        <Route
          path="/acc-rewards"
          element={
            <>
              <PageTitle title="Tables | ReFun" />
              <AccRewards />
            </>
          }
        />
      </Routes>
    </DefaultLayout>)

  );
}

export default App;
