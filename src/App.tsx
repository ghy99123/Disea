import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Notification } from "./components";
import AppRouter from "./routes";
import WithAxios from "./withAxios";
import { useNotification } from "./hooks/useNotification";
import { RootState } from "./redux/store";

function App() {
  const { open, timeout, severity, message } = useSelector(
    (state: RootState) => state.notification
  );
  const { clear } = useNotification();

  return (
    <>
      <WithAxios>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </WithAxios>
      <Notification
        open={open}
        message={message}
        handleClose={clear}
        duration={timeout}
        severity={severity}
      />
    </>
  );
}

export default App;
