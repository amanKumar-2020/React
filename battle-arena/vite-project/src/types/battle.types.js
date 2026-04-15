/**
 * @typedef {Object} SolutionScores
 * @property {number} correctness
 * @property {number} efficiency
 * @property {number} readability
 * @property {number} overall
 */

/**
 * @typedef {Object} Solution
 * @property {string} model
 * @property {string} code
 * @property {string} explanation
 * @property {string} language
 */

/**
 * @typedef {Object} JudgeResult
 * @property {'solution1' | 'solution2'} winner
 * @property {string} reasoning
 * @property {{ solution1: SolutionScores, solution2: SolutionScores }} scores
 */

/**
 * @typedef {Object} BattleResponse
 * @property {string} problem
 * @property {Solution} solution1
 * @property {Solution} solution2
 * @property {JudgeResult} judge
 */

/**
 * @typedef {'idle' | 'loading' | 'success' | 'error'} BattleStatus
 */

/**
 * @typedef {Object} BattleState
 * @property {BattleStatus} status
 * @property {BattleResponse | null} data
 * @property {string | null} error
 * @property {string} prompt
 */

export const BATTLE_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const SCORE_CATEGORIES = [
  { key: 'correctness', label: 'Correctness', icon: '✓' },
  { key: 'efficiency', label: 'Efficiency', icon: '⚡' },
  { key: 'readability', label: 'Readability', icon: '📖' },
  { key: 'overall', label: 'Overall', icon: '🏆' },
];
