import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import relayEnvironment from './relay/relayEnvironment';
import Home from './pages/Home';

const { Suspense } = React;

export default function App(props: any) {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <Home/>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}