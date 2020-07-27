import React, { Suspense } from 'react';
import './App.scss';
import Layout from './layout';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Explore, Favourite, Genre } from './page';
import ThemeProvider from './provider/theme.provider';
import Loading from './components/loading/loading.component';
import MusicPlayerProvider from './provider/music-player.provider';
import FavouriteProvider from './provider/favourite.provider';

function App() {
  return (
    <ThemeProvider>
      <MusicPlayerProvider>
        <FavouriteProvider>
          <Router basename={process.env.REACT_APP_SUBDIR}>
            <Layout>
              <Suspense fallback={<Loading />}>
                <Route path="/explore" component={Explore} />
                <Route path="/favorite" component={Favourite} />
                <Route path="/genre" component={Genre} />
              </Suspense>
            </Layout>
          </Router>
        </FavouriteProvider>
      </MusicPlayerProvider>
    </ThemeProvider>
  );
}

export default App;
