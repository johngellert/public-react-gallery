import React from 'react'; // import React
import ReactDOM from 'react-dom'; // import ReactDOM
import './index.css'; // import index stylesheet
import App from './components/App/App'; // import and declare App component
import registerServiceWorker from './registerServiceWorker';

// renders the App component to the DOM at div class 'root' on index.html
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
