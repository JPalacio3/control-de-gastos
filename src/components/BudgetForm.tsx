import { useMemo, useState } from "react";

export default function BudgetForm() {
	const [budget, setBudget] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBudget(e.target.valueAsNumber);
	};

	const isValid = useMemo(() => {
		return isNaN(budget) || budget <= 0;
	}, [budget]);

	return (
		<>
			<form action="" className="space-y-5">
				<div className="flex flex-col space-y-5">
					<label
						htmlFor="budget"
						className="text-4xl text-blue-600 font-bold text-center"
					>
						{"Definir Presupuesto"}
					</label>
					<input
						id="budget"
						type="number"
						className="w-full bg-white border border-gray-200 p-2"
						placeholder="Define tu presupuesto"
						name="budget"
						min={0}
						value={budget}
						onChange={handleChange}
					/>
				</div>

				<input
					type="submit"
					value={"Definir Presupuesto"}
					className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto
           text-white font-black p-2 uppercase rounded-lg disabled:opacity-40"
					disabled={isValid}
				/>
			</form>
		</>
	);
}
