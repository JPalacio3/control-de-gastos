import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracker() {
  const { state, totalExpenses, remainingExpenses } = useBudget();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/grafico.jpg" alt="Grafico de gastos" />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          className="bg-pink-600 hover:bg-pink-700 w-full md:w-auto text-white
				font-bold rounded-lg p-2 uppercase"
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
