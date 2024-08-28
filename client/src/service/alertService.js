import { notification } from 'antd';

export const alertService = () => {
  /**
   * Shows Alert messages
   * @param message
   * @param description
   * @param type
   */
  const showAlert = (message, description, type = 'info', duration = 5) => {
    notification[type]({
      message,
      description,
      placement: 'top',
      duration: duration,
    });
  };

  return {
    showAlert,
  };
};