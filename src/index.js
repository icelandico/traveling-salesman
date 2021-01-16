import CoordinateSolver from "./../assets/CoordinateSolver";
import CanvasGrid from "../assets/canvasGrid";

const coordinateSolver = new CoordinateSolver();
const canvasGrid = new CanvasGrid();

coordinateSolver.initListeners();
canvasGrid.drawGrid();
