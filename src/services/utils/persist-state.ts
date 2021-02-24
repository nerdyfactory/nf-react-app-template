export const persistState = (storageKey: string, value: any): void => {
  window.localStorage.setItem(storageKey, JSON.stringify(value));
};

export const clearState = (storageKey: string): void => {
  window.localStorage.removeItem(storageKey);
};

export const getIntialState = (storageKey: string): any => {
  const savedState = window.localStorage.getItem(storageKey);
  try {
    if (!savedState) {
      return undefined;
    }
    return JSON.parse(savedState ?? `{}`);
  } catch (e) {
    console.error(`Error loading state : ${storageKey}`);
    return undefined;
  }
};
