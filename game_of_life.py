#!/usr/bin/env python3
"""Animate Conway's Game of Life in a terminal."""

from __future__ import annotations

import argparse
import random
import shutil
import sys
import time
from dataclasses import dataclass


ALIVE = "█"
DEAD = " "


@dataclass
class GameOfLife:
    """Conway's Game of Life simulation state."""

    rows: int
    cols: int
    wrap: bool = True
    alive_probability: float = 0.2
    seed: int | None = None

    def __post_init__(self) -> None:
        rng = random.Random(self.seed)
        self.generation = 0
        self.grid = [
            [1 if rng.random() < self.alive_probability else 0 for _ in range(self.cols)]
            for _ in range(self.rows)
        ]

    def _neighbor_count(self, row: int, col: int) -> int:
        count = 0
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                if dr == 0 and dc == 0:
                    continue

                nr = row + dr
                nc = col + dc

                if self.wrap:
                    nr %= self.rows
                    nc %= self.cols
                    count += self.grid[nr][nc]
                elif 0 <= nr < self.rows and 0 <= nc < self.cols:
                    count += self.grid[nr][nc]

        return count

    def step(self) -> None:
        """Advance the simulation by one generation."""
        next_grid: list[list[int]] = []
        for r in range(self.rows):
            next_row: list[int] = []
            for c in range(self.cols):
                neighbors = self._neighbor_count(r, c)
                current = self.grid[r][c]
                if current and neighbors in (2, 3):
                    next_row.append(1)
                elif not current and neighbors == 3:
                    next_row.append(1)
                else:
                    next_row.append(0)
            next_grid.append(next_row)

        self.grid = next_grid
        self.generation += 1

    def render(self) -> str:
        """Return a string visualization of the current board."""
        top_border = "+" + "-" * self.cols + "+"
        lines = [top_border]
        for row in self.grid:
            cell_line = "".join(ALIVE if cell else DEAD for cell in row)
            lines.append(f"|{cell_line}|")
        lines.append(top_border)
        return "\n".join(lines)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Conway's Game of Life with console animation."
    )
    terminal_size = shutil.get_terminal_size((100, 40))
    parser.add_argument(
        "--rows",
        type=int,
        default=max(5, terminal_size.lines - 8),
        help="Number of rows in the simulation grid.",
    )
    parser.add_argument(
        "--cols",
        type=int,
        default=max(10, terminal_size.columns - 4),
        help="Number of columns in the simulation grid.",
    )
    parser.add_argument(
        "--density",
        type=float,
        default=0.2,
        help="Initial probability (0.0-1.0) that a cell starts alive.",
    )
    parser.add_argument(
        "--fps",
        type=float,
        default=10.0,
        help="Animation speed in frames per second.",
    )
    parser.add_argument(
        "--steps",
        type=int,
        default=0,
        help="Optional number of generations to run (0 means run forever).",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=None,
        help="Random seed for reproducible runs.",
    )
    parser.add_argument(
        "--no-wrap",
        action="store_true",
        help="Disable edge wrapping (cells outside bounds are always dead).",
    )

    args = parser.parse_args()
    if args.rows <= 0 or args.cols <= 0:
        parser.error("--rows and --cols must be positive integers.")
    if not 0.0 <= args.density <= 1.0:
        parser.error("--density must be between 0.0 and 1.0.")
    if args.fps <= 0:
        parser.error("--fps must be greater than 0.")
    if args.steps < 0:
        parser.error("--steps must be 0 or a positive integer.")
    return args


def animate(game: GameOfLife, fps: float, steps: int) -> None:
    delay = 1.0 / fps
    hide_cursor = "\x1b[?25l"
    show_cursor = "\x1b[?25h"
    clear_screen = "\x1b[H\x1b[J"

    print(hide_cursor, end="", flush=True)
    try:
        frame = 0
        while steps == 0 or frame < steps:
            header = (
                "Conway's Game of Life  "
                f"(Generation: {game.generation}, Ctrl+C to quit)"
            )
            board = game.render()
            print(f"{clear_screen}{header}\n{board}", end="", flush=True)
            time.sleep(delay)
            game.step()
            frame += 1
    except KeyboardInterrupt:
        print("\nInterrupted by user.")
    finally:
        print(show_cursor)


def main() -> int:
    args = parse_args()
    game = GameOfLife(
        rows=args.rows,
        cols=args.cols,
        wrap=not args.no_wrap,
        alive_probability=args.density,
        seed=args.seed,
    )
    animate(game, fps=args.fps, steps=args.steps)
    return 0


if __name__ == "__main__":
    sys.exit(main())
