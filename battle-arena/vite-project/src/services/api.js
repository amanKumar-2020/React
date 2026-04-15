const API_BASE_URL = 'http://localhost:3001';

/**
 * Sends a battle request to the backend API.
 * @param {string} prompt - The coding problem prompt
 * @returns {Promise<import('../types/battle.types.js').BattleResponse>}
 */
export async function fetchBattle(prompt) {
  const response = await fetch(`${API_BASE_URL}/battle`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Battle request failed with status ${response.status}`
    );
  }

  return response.json();
}

/**
 * Health check for the backend API.
 * @returns {Promise<boolean>}
 */
export async function checkApiHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      signal: AbortSignal.timeout(5000),
    });
    return response.ok;
  } catch {
    return false;
  }
}
