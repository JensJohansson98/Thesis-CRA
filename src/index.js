import reactDom from 'react-dom';
import App from "./app.js"
import TodoList from "./components/TodoList"

reactDom.render(<TodoList/>, document.getElementById("root"));