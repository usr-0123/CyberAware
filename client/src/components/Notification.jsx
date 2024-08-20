import { message } from 'antd';

const useNotification = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (content) => {
    messageApi.open({
      type: 'success',
      content: content || 'This is a success message',
    });
  };

  const error = (content) => {
    messageApi.open({
      type: 'error',
      content: content || 'This is an error message',
    });
  };

  const warning = (content) => {
    messageApi.open({
      type: 'warning',
      content: content || 'This is a warning message',
    });
  };

  return { contextHolder, success, error, warning };
};

export default useNotification;
