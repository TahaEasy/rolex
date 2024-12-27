export const formatCurrency = (value) => {
  return `${new Intl.NumberFormat().format(value)} تومان`;
};

export const formatPercent = (value, percentage) => {
  const discountValue = (value * percentage) / 100;

  return value - discountValue;
};

export const formatPercentCurrency = (value, percentage) => {
  const discountValue = (value * percentage) / 100;

  return discountValue;
};

export function loadState(key) {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch {
    return [];
  }
}

export async function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    throw new Error(e.message);
  }
}

export async function removeState(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    return undefined;
  }
}
