const indexFile = `import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);`;

const appFile = `import React from 'react';
function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>This is React application.</p>
    </div>
  );
}

export default App;
`;

const scssmain = `
@use 'abstracts';
@use 'utilities';
@use 'components';
@use 'pages';
@use 'themes';`;

const abstractsScss = `
@forward 'variables';
@forward 'media-query';
@forward 'colors';
`;

const layoutScss = `
@forward 'header';
@forward 'sidebar';
@forward 'footer';
`;
const utilitiesScss = `
@forward 'main';
@forward 'container';
`;
module.exports = {
  indexFile,
  appFile,
  scssmain,
  abstractsScss,
  layoutScss,
  utilitiesScss,
};
