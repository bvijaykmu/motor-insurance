export interface Variant {
	code: string;
	coverages: Coverage[];
	discounts: Discount[];
	order: number;
	premium: number;
	premiumBeforeDiscounts: number;
}

export interface Coverage {
	code: string;
	description: string;
	limitLeft: number;
	limitRight: number | null;
	name: string;
	position: number;
	premium: number;
}

export interface Discount {
	code: string;
	name: string;
	position: number;
	value: number;
}
