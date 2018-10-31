export const required = value =>
  value ? undefined : 'Будь ласка, заповніть це поле';

export const email = value => {
  const r = /^\w+@\w+\.\w{2,4}$/i;

  if (!r.test(value)) {
    return 'Некоректний email';
  }
  return undefined;
};
