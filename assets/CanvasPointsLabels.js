import Canvas from "./Canvas";

export default class CanvasPointsLabels extends Canvas {
  canvasPointsLabels = document.getElementById("chart-points-labels");
  canvasPointsLabelsContext = this.canvasPointsLabels.getContext("2d");

  constructor() {
    super();
    this.translateGrid();
  }

  translateGrid() {
    this.canvasPointsLabelsContext.translate(
      this.y_axis_distance_grid_lines * this.grid_size,
      this.x_axis_distance_grid_lines * this.grid_size
    );
  }

  drawLabel({ id, x, y }) {
    const labelX = this.grid_size * x + 3;
    const labelY = this.grid_size * y * -1 - 5;
    this.canvasPointsLabelsContext.fillStyle = "#292929";
    this.canvasPointsLabelsContext.font = "600 16px Consolas";
    this.canvasPointsLabelsContext.fillText(id, labelX, labelY);
  }

  clearCanvasContext() {
    this.canvasPointsLabelsContext.restore();
    this.canvasPointsLabelsContext.clearRect(
      -this.x_axis_distance_grid_lines * this.grid_size,
      -this.y_axis_distance_grid_lines * this.grid_size,
      this.canvas_width,
      this.canvas_height
    );
  }
}
