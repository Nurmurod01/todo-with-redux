import { Provider } from "react-redux"
import Todo from "./components/todo"
import store from "./store"


function App() {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App
