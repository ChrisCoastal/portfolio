export const code = {
  playerDisplay: `import React, { useEffect, useState } from 'react';

import { IsActive, GameStatus, PeggingType, PlayerPos } from 'src/@types';

import Player from '../Player/Player';
import useGameContext from 'src/hooks/useGameContext';
import useAuthContext from 'src/hooks/useAuthContext';
import { getPlayerOpponent } from 'src/utils/helpers';
import anime from 'animejs';

const PlayerDisplay = () => {
const [message, setMessage] = useState<string | null>(null);

// game state updated from Firestore via websocket
const { gameState } = useGameContext();
const { userAuth } = useAuthContext();
const uid = userAuth.uid;

const { player, opponent } = getPlayerOpponent(gameState.players, uid);

useEffect(() => {
  updateStatusHandler(gameState.status);
}, [gameState.status]);

function updateStatusHandler(status: GameStatus) {
  switch (status) {
    case GameStatus.NEW: {
      if (!gameState.players[opponent].displayName.length) {
        setMessage(\`\${gameState.players[player].avatar} Waiting for opponent...\`);
      }
      break;
    }
    // ...
    // other case statements

    case GameStatus.WINNER: {
      setMessage(null);
      break;
    }
    default:
      break;
  }
}

useEffect(() => {
  // message animation
  anime({
    targets: '.animate-message',
    scale: [
      { value: 0, duration: 0 },
      { value: 1.05, duration: 200 },
      { value: 1, duration: 200 }
    ],
    translateX: [-8, 0],
    translateY: [8, 0],
    easing: 'spring(0.5, 100, 10, 0)'
  });
}, [message]);

return (
  <div className="flex w-[376px] gap-4 rounded-md border border-stone-400 py-2 pl-10 pr-4 sm:py-2">
    <Player
      playerPos={player}
      isDealer={isDealer}
      displayName={gameState.players[player].displayName}
      avatar={gameState.players[player].avatar}
      isActive={gameState.players[player].activePlayer === IsActive.ACTIVE}
    />
    <div className="flex-shrink">
      <ul className="mt-1 flex max-h-20 flex-col-reverse gap-1 sm:max-h-[6.5rem]">
        {message && (
          <li className="animate-message relative inline-block origin-bottom-left rounded-md bg-gradient-to-br from-emerald-300 to-emerald-500 py-0.5 px-2 text-sm text-stone-800">
            {message}
            <MessageTail height="36" width="36" className="absolute left-0" />
          </li>
        )}
      </ul>
    </div>
  </div>
);
};`,
};
