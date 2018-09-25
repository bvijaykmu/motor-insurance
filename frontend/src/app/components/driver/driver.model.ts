export interface Driver {
	firstName: string;
	lastName: string;
	dateOfBirth: any;
	gender: string;
	address: {
		zipCode: number;
		city: string;
		street: string
	};
	numberOfAccidents: number;
	numberOfTickets: number;
	licenceObtainedAtAge: number;
}
