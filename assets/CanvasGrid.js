import Canvas from "./Canvas";

export default class CanvasGrid extends Canvas {
  canvas = document.getElementById("chart-grid");

  drawGrid() {
    const ctx = this.canvas.getContext("2d");
    const x_axis_starting_point = 1;
    const y_axis_starting_point = 1;

    for (let i = 0; i <= this.num_lines_x; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      if (i === this.x_axis_distance_grid_lines) ctx.strokeStyle = "#000000";
      else ctx.strokeStyle = "#acacac";

      if (i === this.num_lines_x) {
        ctx.moveTo(0, this.grid_size * i);
        ctx.lineTo(this.canvas_width, this.grid_size * i);
      } else {
        ctx.moveTo(0, this.grid_size * i + 0.5);
        ctx.lineTo(this.canvas_width, this.grid_size * i + 0.5);
      }
      ctx.stroke();
    }

    for (let i = 0; i <= this.num_lines_y; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      if (i === this.y_axis_distance_grid_lines) {
        ctx.strokeStyle = "#121418";
      } else {
        ctx.strokeStyle = "#acacac";
      }

      if (i === this.num_lines_y) {
        ctx.moveTo(this.grid_size * i, 0);
        ctx.lineTo(this.grid_size * i, this.canvas_height);
      } else {
        ctx.moveTo(this.grid_size * i + 0.5, 0);
        ctx.lineTo(this.grid_size * i + 0.5, this.canvas_height);
      }
      ctx.stroke();
    }

    ctx.translate(
      this.y_axis_distance_grid_lines * this.grid_size,
      this.x_axis_distance_grid_lines * this.grid_size
    );

    for (
      let i = 1;
      i < this.num_lines_y - this.y_axis_distance_grid_lines;
      i++
    ) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      ctx.moveTo(this.grid_size * i + 0.5, -3);
      ctx.lineTo(this.grid_size * i + 0.5, 3);
      ctx.stroke();

      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${x_axis_starting_point * i}`, this.grid_size * i - 2, 15);
    }

    for (let i = 1; i < this.y_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      ctx.moveTo(-this.grid_size * i + 0.5, -3);
      ctx.lineTo(-this.grid_size * i + 0.5, 3);
      ctx.stroke();

      ctx.font = "11px Consolas";
      ctx.textAlign = "end";
      ctx.fillText(
        `${-x_axis_starting_point * i}`,
        -this.grid_size * i + 3,
        15
      );
    }

    for (
      let i = 1;
      i < this.num_lines_x - this.x_axis_distance_grid_lines;
      i++
    ) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      ctx.moveTo(-3, this.grid_size * i + 0.5);
      ctx.lineTo(3, this.grid_size * i + 0.5);
      ctx.stroke();

      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${-y_axis_starting_point * i}`, 8, this.grid_size * i + 3);
    }

    for (let i = 1; i < this.x_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      ctx.moveTo(-3, -this.grid_size * i + 0.5);
      ctx.lineTo(3, -this.grid_size * i + 0.5);
      ctx.stroke();

      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${y_axis_starting_point * i}`, 8, -this.grid_size * i + 3);
    }
  }
}
