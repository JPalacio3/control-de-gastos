import { useMemo } from "react";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { formatDate } from "./helpers/utils";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
	expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
	const categoryInfo = useMemo(
		() => categories.filter((cat) => cat.id === expense.category)[0],
		[expense]
	);

	return (
		<div
			className="bg-white shadow-lg p-10 md:mx-10 border-b
    border-gray-200 rounded-lg flex gap-5 items-center "
		>
			<div className="">
				<img
					src={`/icono_${categoryInfo.icon}.svg`}
					alt="icono gasto"
					className="w-20"
				/>
			</div>

			<div className="flex-1 space-y-2">
				<p className="text-sm font-bold uppercase text-slate-500">
					{categoryInfo.name}
				</p>
				<p>{expense.expenseName}</p>

				<p className="text-slate-600 text-sm">
					{formatDate(expense.date!.toString())}
				</p>

				<AmountDisplay amount={expense.amount} />
			</div>
			<div className=""></div>
		</div>
	);
}
