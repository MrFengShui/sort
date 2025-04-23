const local: Storage = window.localStorage;
const sessioin: Storage = window.sessionStorage;

export const loadFromLocalStorage = (key: string): Promise<string | null> => {
    if (!local) return Promise.resolve(null);

    return Promise.resolve(local.getItem(key));
}

export const saveToLocalStorage = async (key: string, value: string): Promise<boolean> => {
    if (!local) return Promise.resolve(false);

    local.setItem(key, value);

    const item: string | null = await loadFromLocalStorage(key);
    return item !== null;
}

export const loadFromSessionStorage = (key: string): Promise<string | null> => {
    if (!sessioin) return Promise.resolve(null);

    return Promise.resolve(sessioin.getItem(key));
}

export const saveToSessionStorage = async (key: string, value: string): Promise<boolean> => {
    if (!sessioin) return Promise.resolve(false);

    sessioin.setItem(key, value);

    const item: string | null = await loadFromSessionStorage(key);
    return item !== null;
}
