import { useState, useCallback } from 'react';
import { fetchBattle } from '../services/api';
import { BATTLE_STATUS } from '../types/battle.types';

/**
 * Custom hook to manage battle state and logic.
 * Encapsulates prompt handling, API calls, and response state.
 */
export function useBattle() {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState(BATTLE_STATUS.IDLE);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const startBattle = useCallback(async () => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setStatus(BATTLE_STATUS.LOADING);
    setError(null);
    setData(null);

    try {
      const result = await fetchBattle(trimmed);
      setData(result);
      setStatus(BATTLE_STATUS.SUCCESS);
    } catch (err) {
      const message = err instanceof Error
        ? err.message
        : 'An unexpected error occurred';
      setError(message);
      setStatus(BATTLE_STATUS.ERROR);
    }
  }, [prompt]);

  const resetBattle = useCallback(() => {
    setStatus(BATTLE_STATUS.IDLE);
    setData(null);
    setError(null);
    setPrompt('');
  }, []);

  const isLoading = status === BATTLE_STATUS.LOADING;
  const isSuccess = status === BATTLE_STATUS.SUCCESS;
  const isError = status === BATTLE_STATUS.ERROR;
  const isIdle = status === BATTLE_STATUS.IDLE;

  return {
    prompt,
    setPrompt,
    status,
    data,
    error,
    isLoading,
    isSuccess,
    isError,
    isIdle,
    startBattle,
    resetBattle,
  };
}
