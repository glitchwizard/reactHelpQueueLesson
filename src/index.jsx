import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppContainer from "./components/App";

ReactDOM.render(
    <AppContainer>
    <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
);

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}