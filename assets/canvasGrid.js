const drawGrid = (w, h, id) => {
  const canvas = document.getElementById(id);
  const ctx = canvas.getContext('2d');
  ctx.canvas.width  = w;
  ctx.canvas.height = h;
  //
  // for (let x = 0; x <= w; x += 20) {
  //   for (let y = 0; y <= h; y += 20) {
  //     ctx.moveTo(x, 0);
  //     ctx.lineTo(x, h);
  //     ctx.stroke();
  //     ctx.moveTo(0, y);
  //     ctx.lineTo(w, y);
  //     ctx.stroke();
  //   }
  // }

  for(var i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;

    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines)
      ctx.strokeStyle = "#000000";
    else
      ctx.strokeStyle = "#e9e9e9";

    if(i == num_lines_x) {
      ctx.moveTo(0, grid_size*i);
      ctx.lineTo(canvas_width, grid_size*i);
    }
    else {
      ctx.moveTo(0, grid_size*i+0.5);
      ctx.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctx.stroke();
  }

};


drawGrid(800, 400, "chart");