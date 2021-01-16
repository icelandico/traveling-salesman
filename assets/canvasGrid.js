const canvas = document.getElementById("chart-grid");
const grid_size = 17;
const canvas_width = canvas.width;
const canvas_height = canvas.height;
const num_lines_x = Math.floor(canvas_height / grid_size);
const num_lines_y = Math.floor(canvas_width / grid_size);
const x_axis_distance_grid_lines = Math.floor(num_lines_x / 2);
const y_axis_distance_grid_lines = Math.floor(num_lines_y / 2);

const drawGrid = () => {
  const ctx = canvas.getContext("2d");
  const x_axis_starting_point = 1;
  const y_axis_starting_point = 1;

  // Draw grid lines along X-axis
  for (let i = 0; i <= num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;

    // If line represents X-axis draw in different color
    if (i === x_axis_distance_grid_lines) ctx.strokeStyle = "#000000";
    else ctx.strokeStyle = "#acacac";

    if (i === num_lines_x) {
      ctx.moveTo(0, grid_size * i);
      ctx.lineTo(canvas_width, grid_size * i);
    } else {
      ctx.moveTo(0, grid_size * i + 0.5);
      ctx.lineTo(canvas_width, grid_size * i + 0.5);
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
};

const canvasPoints = document.getElementById("chart-points");
const canvasPointsContext = canvasPoints.getContext("2d");
canvasPointsContext.translate(
  y_axis_distance_grid_lines * grid_size,
  x_axis_distance_grid_lines * grid_size
);

function drawPoint(x, y) {
  canvasPointsContext.moveTo(grid_size * x + 0.5, grid_size * y + 0.5);
  canvasPointsContext.arc(
    grid_size * x + 0.5,
    grid_size * y * -1 + 0.5,
    6,
    0,
    Math.PI * 2,
    true
  );
}

function clearCanvasContext() {
  canvasPointsContext.restore();
  canvasPointsContext.clearRect(
    -x_axis_distance_grid_lines * grid_size,
    -y_axis_distance_grid_lines * grid_size,
    canvas_width,
    canvas_height
  );
}

function drawPointsLayer(points) {
  clearCanvasContext();
  points.forEach((point) => {
    canvasPointsContext.beginPath();
    drawPoint(point.x, point.y);
    canvasPointsContext.fillStyle = "#1e3383";
    canvasPointsContext.fill();
  });
}

drawGrid();
