export class Tutorial {
  id?: any;
  title?: string;
  psize?: string;
  ptopping?: string;
  pbase?: string;
  psizeS?: string;
  ptoppingS?: string;
  pbaseS?: string;
  description?: string;
  published?: boolean;
  pizzas?: Pizza[];
}

export class Pizza {
  psize?: string;
  ptopping?: string;
  pbase?: string;
}