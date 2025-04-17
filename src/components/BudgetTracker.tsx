import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { state, totalExpenses, remainingExpenses, dispatch } = useBudget();

  const percentage = +(totalExpenses / state.budget) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage >= 90 ? "#DC2626" : "#3B82F6",
            trailColor: "lightgray",
            textColor: percentage >= 90 ? "#DC2626" : "#3B82F6",
            pathTransitionDuration: 0.3,
            strokeLinecap: "round",
            textSize: 12,
          })}
          text={`${percentage.toFixed(1)}% Gastado`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          className="bg-pink-600 hover:bg-pink-700 w-full md:w-auto text-white
				font-bold rounded-lg p-2 uppercase"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingExpenses} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
