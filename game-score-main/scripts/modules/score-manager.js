import { Maddox_NEW_SCORE } from './defaults.js';
import { getPlayer, getLeaderboardData, setLeaderboardData } from './game-session.js';

export function recordMaddoxHighScore() {
  const player = getPlayer();

  if (!player) {
    return {
      success: false,
      message: 'No player saved yet. Please save Maddox first.'
    };
  }

  const leaderboard = getLeaderboardData();

  leaderboard.push({
    name: player,
    score: Maddox_NEW_SCORE
  });

  leaderboard.sort((a, b) => b.score - a.score);

  setLeaderboardData(leaderboard);

  return {
    success: true,
    message: `${player}'s score of ${Maddox_NEW_SCORE} has been recorded.`
  };
}