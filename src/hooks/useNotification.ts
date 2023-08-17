import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addNotification,
  clearNotification,
  NotificationState,
} from "../redux/reducers/notification/notificationSlice";

const useNotification = () => {
  const dispatch = useDispatch();

  const display = useCallback(
    (notification: NotificationState) => {
      dispatch(addNotification(notification));
    },
    [dispatch]
  );

  const clear = useCallback(() => {
    dispatch(clearNotification());
  }, [dispatch]);

  return { display, clear };
};

export default useNotification;
