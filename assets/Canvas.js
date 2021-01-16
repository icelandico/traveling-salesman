export default class Canvas {
  canvas = document.getElementById("chart-grid");
  grid_size = 17;
  canvas_width = this.canvas.width;
  canvas_height = this.canvas.height;
  num_lines_x = Math.floor(this.canvas_height / this.grid_size);
  num_lines_y = Math.floor(this.canvas_width / this.grid_size);
  x_axis_distance_grid_lines = Math.floor(this.num_lines_x / 2);
  y_axis_distance_grid_lines = Math.floor(this.num_lines_y / 2);
}
