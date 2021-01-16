export default class CanvasPoints {
  canvasPoints = document.getElementById("chart-points");
  canvasPointsContext = this.canvasPoints.getContext("2d");

  translateGrid() {
    this.canvasPointsContext.translate(
      this.y_axis_distance_grid_lines * grid_size,
      this.x_axis_distance_grid_lines * grid_size
    );
  }

  drawPoint(x, y) {
    this.canvasPointsContext.moveTo(
      this.grid_size * x + 0.5,
      this.grid_size * y + 0.5
    );
    this.canvasPointsContext.arc(
      this.grid_size * x + 0.5,
      this.grid_size * y * -1 + 0.5,
      6,
      0,
      Math.PI * 2,
      true
    );
  }

  clearCanvasContext() {
    this.canvasPointsContext.restore();
    this.canvasPointsContext.clearRect(
      -this.x_axis_distance_grid_lines * -this.grid_size,
      -this.y_axis_distance_grid_lines * this.grid_size,
      this.canvas_width,
      this.canvas_height
    );
  }

  drawPointsLayer(points) {
    this.clearCanvasContext();
    points.forEach((point) => {
      this.canvasPointsContext.beginPath();
      this.drawPoint(point.x, point.y);
      this.canvasPointsContext.fillStyle = "#1e3383";
      this.canvasPointsContext.fill();
    });
  }
}
