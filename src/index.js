import CoordinateSolver from "./../assets/CoordinateSolver";
import CanvasGrid from "../assets/CanvasGrid";

const coordinateSolver = new CoordinateSolver();
const canvasGrid = new CanvasGrid();

coordinateSolver.initListeners();
canvasGrid.drawGrid();
