import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'oxi-gas:quote-cart';

function readStorage(): readonly string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((value): value is string => typeof value === 'string');
  } catch {
    return [];
  }
}

function writeStorage(codes: readonly string[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
  } catch {
    // localStorage may be unavailable (private mode, quota): silently ignore.
  }
}

export type QuoteCart = {
  readonly codes: readonly string[];
  readonly count: number;
  has: (code: string) => boolean;
  add: (code: string) => void;
  remove: (code: string) => void;
  toggle: (code: string) => void;
  clear: () => void;
};

export function useQuoteCart(): QuoteCart {
  const [codes, setCodes] = useState<readonly string[]>(() => readStorage());

  useEffect(() => {
    writeStorage(codes);
  }, [codes]);

  useEffect(() => {
    function handleStorage(event: StorageEvent): void {
      if (event.key !== STORAGE_KEY) return;
      setCodes(readStorage());
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const has = useCallback((code: string) => codes.includes(code), [codes]);

  const add = useCallback((code: string) => {
    setCodes((current) => (current.includes(code) ? current : [...current, code]));
  }, []);

  const remove = useCallback((code: string) => {
    setCodes((current) => current.filter((value) => value !== code));
  }, []);

  const toggle = useCallback((code: string) => {
    setCodes((current) =>
      current.includes(code) ? current.filter((value) => value !== code) : [...current, code],
    );
  }, []);

  const clear = useCallback(() => setCodes([]), []);

  return {
    codes,
    count: codes.length,
    has,
    add,
    remove,
    toggle,
    clear,
  };
}
