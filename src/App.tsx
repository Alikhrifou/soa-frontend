import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {!isAuthenticated ? (
          <Login />
        ) : (
          <div className="flex">
            <div className="w-full p-4">
              <ProductList />
            </div>
          </div>
        )}
      </div>
    </Provider>
  );
};

export default App;
