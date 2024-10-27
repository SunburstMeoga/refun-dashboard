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
    setTimeout(() => setIsLogin(true), 5000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    !isLogin ? (<Routes>
      <Route
        path="/"
        element={
          <>
            <PageTitle title="Signup | ReFun" />
            <SignUp />
          </>
        }
      /></Routes>) : (<DefaultLayout>
        <Routes>

          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | ReFun" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | ReFun" />
                <Profile />
              </>
            }
          />
          <Route
            path="/forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements | ReFun" />
                <FormElements />
              </>
            }
          />
          <Route
            path="/forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout | ReFun" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | ReFun" />
                <Tables />
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
            path="/personal"
            element={
              <>
                <PageTitle title="Tables | ReFun" />
                <Personal />
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
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | ReFun" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart | ReFun" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | ReFun" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | ReFun" />
                <Buttons />
              </>
            }
          />
          <Route
            path="/auth/signin"
            element={
              <>
                <PageTitle title="Signin | ReFun" />
                <SignIn />
              </>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <>
                <PageTitle title="Signup | ReFun" />
                <SignUp />
              </>
            }
          />
        </Routes>
      </DefaultLayout>)

  );
}

export default App;
