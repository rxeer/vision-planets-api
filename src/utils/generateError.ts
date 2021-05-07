interface IMessageError {
  errorCode: number;
  errorMesssage: string;
}
export const generateError = (
  statusCode: number,
  statusMessage = 'Server error'
): IMessageError => ({
  errorCode: statusCode,
  errorMesssage: statusMessage,
});
