export const promisify = <E, R>(
  callback: (fn: (err?: E, result?: R) => void) => void,
): Promise<R> =>
  new Promise((resolve, reject) => {
    callback((err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
