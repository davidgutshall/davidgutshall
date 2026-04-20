const DEFAULTS = {
  rows: 60,
  cols: 100,
  density: 0.2,
  fps: 15,
  wrapEdges: true,
  cellSize: 10,
};

const state = {
  rows: DEFAULTS.rows,
  cols: DEFAULTS.cols,
  density: DEFAULTS.density,
  fps: DEFAULTS.fps,
  wrapEdges: DEFAULTS.wrapEdges,
  cellSize: DEFAULTS.cellSize,
  generation: 0,
  running: false,
  intervalId: null,
  grid: [],
};

const canvas = document.getElementById("lifeCanvas");
const ctx = canvas.getContext("2d");

const controls = {
  rows: document.getElementById("rows"),
  cols: document.getElementById("cols"),
  density: document.getElementById("density"),
  fps: document.getElementById("fps"),
  startPauseBtn: document.getElementById("startPauseBtn"),
  stepBtn: document.getElementById("stepBtn"),
  randomizeBtn: document.getElementById("randomizeBtn"),
  clearBtn: document.getElementById("clearBtn"),
  applySizeBtn: document.getElementById("applySizeBtn"),
  generationLabel: document.getElementById("generationLabel"),
  aliveLabel: document.getElementById("aliveLabel"),
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function makeEmptyGrid(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function makeRandomGrid(rows, cols, density) {
  const grid = [];
  for (let r = 0; r < rows; r += 1) {
    const row = [];
    for (let c = 0; c < cols; c += 1) {
      row.push(Math.random() < density ? 1 : 0);
    }
    grid.push(row);
  }
  return grid;
}

function readInputs({ includeSize = false } = {}) {
  const nextState = {};
  nextState.density = clamp(Number.parseFloat(controls.density.value), 0.01, 1.0);
  nextState.fps = clamp(Number.parseFloat(controls.fps.value), 1, 60);

  if (includeSize) {
    nextState.rows = clamp(Number.parseInt(controls.rows.value, 10), 10, 200);
    nextState.cols = clamp(Number.parseInt(controls.cols.value, 10), 10, 260);
  }

  return nextState;
}

function applyInputs({ includeSize = false } = {}) {
  const nextState = readInputs({ includeSize });
  if (includeSize) {
    state.rows = nextState.rows || DEFAULTS.rows;
    state.cols = nextState.cols || DEFAULTS.cols;
  }
  state.density = nextState.density || DEFAULTS.density;
  state.fps = nextState.fps || DEFAULTS.fps;
}

function updateCanvasSize() {
  canvas.width = state.cols * state.cellSize;
  canvas.height = state.rows * state.cellSize;
}

function aliveCount() {
  let count = 0;
  for (let r = 0; r < state.rows; r += 1) {
    for (let c = 0; c < state.cols; c += 1) {
      count += state.grid[r][c];
    }
  }
  return count;
}

function draw() {
  ctx.fillStyle = "#0d1320";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#22d3ee";
  for (let r = 0; r < state.rows; r += 1) {
    for (let c = 0; c < state.cols; c += 1) {
      if (state.grid[r][c]) {
        const x = c * state.cellSize;
        const y = r * state.cellSize;
        ctx.fillRect(x, y, state.cellSize - 1, state.cellSize - 1);
      }
    }
  }

  controls.generationLabel.textContent = `Generation: ${state.generation}`;
  controls.aliveLabel.textContent = `Alive: ${aliveCount()}`;
}

function neighborCount(row, col) {
  let total = 0;
  for (let dr = -1; dr <= 1; dr += 1) {
    for (let dc = -1; dc <= 1; dc += 1) {
      if (dr === 0 && dc === 0) {
        continue;
      }

      let nr = row + dr;
      let nc = col + dc;

      if (state.wrapEdges) {
        nr = (nr + state.rows) % state.rows;
        nc = (nc + state.cols) % state.cols;
        total += state.grid[nr][nc];
      } else if (nr >= 0 && nr < state.rows && nc >= 0 && nc < state.cols) {
        total += state.grid[nr][nc];
      }
    }
  }
  return total;
}

function step() {
  const next = makeEmptyGrid(state.rows, state.cols);
  for (let r = 0; r < state.rows; r += 1) {
    for (let c = 0; c < state.cols; c += 1) {
      const isAlive = state.grid[r][c] === 1;
      const neighbors = neighborCount(r, c);

      if (isAlive && (neighbors === 2 || neighbors === 3)) {
        next[r][c] = 1;
      } else if (!isAlive && neighbors === 3) {
        next[r][c] = 1;
      }
    }
  }

  state.grid = next;
  state.generation += 1;
  draw();
}

function stop() {
  if (state.intervalId !== null) {
    window.clearInterval(state.intervalId);
    state.intervalId = null;
  }
  state.running = false;
  controls.startPauseBtn.textContent = "Start";
}

function start() {
  stop();
  const interval = Math.max(1, Math.floor(1000 / state.fps));
  state.running = true;
  controls.startPauseBtn.textContent = "Pause";
  state.intervalId = window.setInterval(step, interval);
}

function resetBoard({ random = true, includeSize = false } = {}) {
  applyInputs({ includeSize });
  state.generation = 0;
  state.grid = random
    ? makeRandomGrid(state.rows, state.cols, state.density)
    : makeEmptyGrid(state.rows, state.cols);
  updateCanvasSize();
  draw();
}

function toggleCellFromClick(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const col = Math.floor(x / state.cellSize);
  const row = Math.floor(y / state.cellSize);

  if (row < 0 || row >= state.rows || col < 0 || col >= state.cols) {
    return;
  }

  state.grid[row][col] = state.grid[row][col] ? 0 : 1;
  draw();
}

function bindEvents() {
  controls.startPauseBtn.addEventListener("click", () => {
    if (state.running) {
      stop();
      return;
    }
    applyInputs();
    start();
  });

  controls.stepBtn.addEventListener("click", () => {
    if (state.running) {
      return;
    }
    applyInputs();
    step();
  });

  controls.randomizeBtn.addEventListener("click", () => {
    stop();
    resetBoard({ random: true });
  });

  controls.clearBtn.addEventListener("click", () => {
    stop();
    resetBoard({ random: false });
  });

  controls.applySizeBtn.addEventListener("click", () => {
    stop();
    resetBoard({ random: true, includeSize: true });
  });

  controls.fps.addEventListener("change", () => {
    applyInputs();
    if (state.running) {
      start();
    }
  });

  controls.density.addEventListener("change", () => {
    applyInputs();
  });

  canvas.addEventListener("click", toggleCellFromClick);
}

function init() {
  controls.rows.value = String(DEFAULTS.rows);
  controls.cols.value = String(DEFAULTS.cols);
  controls.density.value = DEFAULTS.density.toFixed(2);
  controls.fps.value = String(DEFAULTS.fps);

  state.grid = makeRandomGrid(state.rows, state.cols, state.density);
  updateCanvasSize();
  bindEvents();
  draw();
}

init();
