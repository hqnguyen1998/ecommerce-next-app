export const errorHandler = (status, success, msg, data = null) => {
  return {
    status: status,
    success: success,
    msg: msg,
    data: data,
  };
};
