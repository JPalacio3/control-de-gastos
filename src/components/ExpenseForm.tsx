import { useState } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {
	const [expense, setExpense] = useState<DraftExpense>({
		amount: 0,
		expenseName: "",
		category: "",
		date: null,
	});

	const [error, setError] = useState("");
	const { dispatch } = useBudget();

	const handleChangeDate = (value: Value) => {
		setExpense({
			...expense,
			date: value,
		});
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		const isAmountField = ["amount"].includes(name);

		setExpense({
			...expense,
			[name]: isAmountField ? Number(value) : value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		//Validar el formulario
		if (Object.values(expense).includes("")) {
			setError("Todos los campos son obligatorios");

			setTimeout(() => {
				setError("");
			}, 3500);
			return;
		}
		// Agregar un nuevo gasto
		setError("");
		dispatch({ type: "add-expense", payload: { expense } });

		// Reiniciar el state
		setExpense({
			amount: 0,
			expenseName: "",
			category: "",
			date: new Date(),
		});
	};

	return (
		<>
			<form action="" className="space-y-5" onSubmit={handleSubmit}>
				<legend
					className="uppercase text-center text-2xl font-black border-b-4
					border-blue-600 flex p-2 y-2 w-full"
				>
					Nuevo Gasto
				</legend>
				{error && <ErrorMessage> {error} </ErrorMessage>}

				<div className="flex flex-col gap-2">
					<label htmlFor="expenseName" className="text-xl">
						Nombre Gasto: {""}
					</label>
					<input
						type="text"
						id="expenseName"
						placeholder="Añade el nombre del gasto"
						className="bg-slate-100 p-2 rounded-lg"
						name="expenseName"
						value={expense.expenseName}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="amount" className="text-xl">
						Cantidad: {""}
					</label>

					<input
						type="number"
						id="amount"
						placeholder="Añade la cantidad del gasto. ej: 300"
						className="bg-slate-100 p-2 rounded-lg my-3"
						name="amount"
						min={1}
						value={expense.amount}
						onChange={handleChange}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="category" className="text-xl">
						Categoría: {""}
					</label>
					<select
						id="category"
						className="bg-slate-100 p-2 rounded-lg"
						name="category"
						value={expense.category}
						onChange={handleChange}
					>
						<option value="" defaultChecked hidden>
							-- Seleccione --
						</option>
						+
						{categories.map((category) => (
							<option value={category.id} key={category.id}>
								{category.name}
							</option>
						))}
					</select>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="amount" className="text-xl">
						Fecha Gasto: {""}
					</label>
					<DatePicker
						className="bg-slate-100 p-2 rounded-lg"
						value={expense.date}
						onChange={handleChangeDate}
					/>
				</div>

				<input
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto text-white
					font-black p-2 px-10 uppercase rounded-lg cursor-pointer"
					value={"Registrar Gasto"}
				/>
			</form>
		</>
	);
}
