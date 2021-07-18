"use strict";
const rock = document.querySelector(".r");
const paper = document.querySelector(".p");
const scissor = document.querySelector(".s");
const player = document.querySelector(".ps");
const bot = document.querySelector(".bs");
const game = document.querySelector(".game");
const stat = document.querySelector(".game-stat");
const winner = document.querySelector(".win-stat");
const again = document.querySelector(".again");
const cr = document.querySelector(".aft2");
const cp = document.querySelector(".aft1");
const cs = document.querySelector(".aft3");
const bef = document.querySelector(".bef");
let r = 0;
let p = 0;
let s = 0;
let ps = 0;
let bs = 0;
let comp;
const init = function () {
  game.classList.remove("hidden");
  stat.classList.add("hidden");
  bef.classList.remove("hidden");
  cr.classList.add("hidden");
  cs.classList.add("hidden");
  cp.classList.add("hidden");
  bs = 0;
  ps = 0;
  r = 0;
  p = 0;
  s = 0;
  bot.textContent = bs;
  player.textContent = ps;
};
const checker = function () {
  comp = Math.trunc(Math.random() * 3) + 1;
  bef.classList.add("hidden");
  if (comp == 1) {
    cr.classList.remove("hidden");
    cs.classList.add("hidden");
    cp.classList.add("hidden");
  } else if (comp == 2) {
    cp.classList.remove("hidden");
    cs.classList.add("hidden");
    cr.classList.add("hidden");
  } else if (comp == 3) {
    cs.classList.remove("hidden");
    cp.classList.add("hidden");
    cr.classList.add("hidden");
  }
  if (r == 1 && (comp == 1 || comp == 3)) return true;
  else if (p == 1 && (comp == 2 || comp == 1)) return true;
  else if (s == 1 && (comp == 3 || comp == 2)) return true;
  else return false;
};

const scorecard = function () {
  if (checker()) {
    ps++;
    if (comp == r || comp == s || comp == p) bs++;
  } else bs++;
  player.textContent = ps;
  bot.textContent = bs;
};
const winchecker = function () {
  if (bs == 5 || ps == 5) return true;
  else return false;
};
const decider = function () {
  if (winchecker()) {
    game.classList.add("hidden");
    stat.classList.remove("hidden");
    if (bs == 5) {
      winner.textContent = "Bot Wins the Game🤖";
    } else if (ps == 5) {
      winner.textContent = "Player Wins the Game😜";
    } else {
      winner.textContent = "Game Tied🙄";
    }
  }
};
rock.addEventListener("click", function () {
  r = 1;
  p = 0;
  s = 0;
  scorecard();
  decider();
});
paper.addEventListener("click", function () {
  r = 0;
  p = 1;
  s = 0;
  scorecard();
  decider();
});
scissor.addEventListener("click", function () {
  r = 0;
  p = 0;
  s = 1;
  scorecard();

  decider();
});

again.addEventListener("click", function () {
  init();
});
