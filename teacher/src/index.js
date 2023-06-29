import React from 'react';
import { createRoot } from 'react-dom/client';

import Painel from './componentes/Aplicacao';

const container = document.getElementById('aplicacao');

const root = createRoot(container);

root.render(<Painel />);
