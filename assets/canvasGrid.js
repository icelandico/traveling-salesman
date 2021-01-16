export default class CanvasGrid {
  canvas = document.getElementById("chart-grid");
  grid_size = 17;
  canvas_width = this.canvas.width;
  canvas_height = this.canvas.height;
  num_lines_x = Math.floor(this.canvas_height / this.grid_size);
  num_lines_y = Math.floor(this.canvas_width / this.grid_size);
  x_axis_distance_grid_lines = Math.floor(this.num_lines_x / 2);
  y_axis_distance_grid_lines = Math.floor(this.num_lines_y / 2);

  drawGrid() {
    const ctx = canvas.getContext("2d");
    const x_axis_starting_point = 1;
    const y_axis_starting_point = 1;

    // Draw grid lines along X-axis
    for (let i = 0; i <= num_lines_x; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      // If line represents X-axis draw in different color
      if (i === this.x_axis_distance_grid_lines) ctx.strokeStyle = "#000000";
      else ctx.strokeStyle = "#acacac";

      if (i === num_lines_x) {
        ctx.moveTo(0, this.grid_size * i);
        ctx.lineTo(this.canvas_width, this.grid_size * i);
      } else {
        ctx.moveTo(0, this.grid_size * i + 0.5);
        ctx.lineTo(this.canvas_width, this.grid_size * i + 0.5);
      }
      ctx.stroke();
    }

    // Draw grid lines along Y-axis
    for (let i = 0; i <= num_lines_y; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;

      // If line represents X-axis draw in different color
      if (i === y_axis_distance_grid_lines) {
        ctx.strokeStyle = "#121418";
      } else {
        ctx.strokeStyle = "#acacac";
      }

      if (i === num_lines_y) {
        ctx.moveTo(grid_size * i, 0);
        ctx.lineTo(grid_size * i, canvas_height);
      } else {
        ctx.moveTo(grid_size * i + 0.5, 0);
        ctx.lineTo(grid_size * i + 0.5, canvas_height);
      }
      ctx.stroke();
    }

    // Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
    ctx.translate(
      y_axis_distance_grid_lines * grid_size,
      x_axis_distance_grid_lines * grid_size
    );

    // Ticks marks along the positive X-axis
    for (let i = 1; i < num_lines_y - y_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(grid_size * i + 0.5, -3);
      ctx.lineTo(grid_size * i + 0.5, 3);
      ctx.stroke();

      // Text value at that point
      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${x_axis_starting_point * i}`, grid_size * i - 2, 15);
    }

    // Ticks marks along the negative X-axis
    for (let i = 1; i < y_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-grid_size * i + 0.5, -3);
      ctx.lineTo(-grid_size * i + 0.5, 3);
      ctx.stroke();

      // Text value at that point
      ctx.font = "11px Consolas";
      ctx.textAlign = "end";
      ctx.fillText(`${-x_axis_starting_point * i}`, -grid_size * i + 3, 15);
    }

    // Ticks marks along the positive Y-axis
    // Positive Y-axis of graph is negative Y-axis of the canvas
    for (let i = 1; i < num_lines_x - x_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-3, grid_size * i + 0.5);
      ctx.lineTo(3, grid_size * i + 0.5);
      ctx.stroke();

      // Text value at that point
      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${-y_axis_starting_point * i}`, 8, grid_size * i + 3);
    }

    // Ticks marks along the negative Y-axis
    // Negative Y-axis of graph is positive Y-axis of the canvas
    for (let i = 1; i < x_axis_distance_grid_lines; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#000000";

      // Draw a tick mark 6px long (-3 to 3)
      ctx.moveTo(-3, -grid_size * i + 0.5);
      ctx.lineTo(3, -grid_size * i + 0.5);
      ctx.stroke();

      // Text value at that point
      ctx.font = "11px Consolas";
      ctx.textAlign = "start";
      ctx.fillText(`${y_axis_starting_point * i}`, 8, -grid_size * i + 3);
    }
  }
}
