import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  currentPlayer: string = 'X';
  winner: string | null = null;

  makeMove(i: number, j: number): void {
    if (this.board[i][j] === '' && !this.winner) {
      this.board[i][j] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    // بررسی ردیف‌ها
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== ''
      ) {
        return true;
      }
    }
    // بررسی ستون‌ها
    for (let j = 0; j < 3; j++) {
      if (
        this.board[0][j] === this.board[1][j] &&
        this.board[1][j] === this.board[2][j] &&
        this.board[0][j] !== ''
      ) {
        return true;
      }
    }
    // بررسی قطرها
    if (
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2] &&
      this.board[0][0] !== ''
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.board[1][1] &&
      this.board[1][1] === this.board[2][0] &&
      this.board[0][2] !== ''
    ) {
      return true;
    }
    return false;
  }

  resetGame(): void {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.winner = null;
    this.currentPlayer = 'X';
  }
}
