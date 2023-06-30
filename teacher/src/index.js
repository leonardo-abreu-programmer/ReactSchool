import React from 'react';
import { createRoot } from 'react-dom/client';

import Painel from './componentes/Aplicacao';

import MsgMain from './componentes/MsgMain';

import MyComponent from './componentes/MyComponent';

const container = document.getElementById('aplicacao');

const root = createRoot(container);

root.render(<MyComponent />);
