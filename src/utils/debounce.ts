export const debounce = <F extends (...args: any) => void>(
  func: F,
  delay = 300
) => {
  let timeout: ReturnType<typeof setTimeout>;
  const context = this;

  return function (...args: Parameters<typeof func>) {
    const fncall = () => {
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fncall, delay);
  };
};
