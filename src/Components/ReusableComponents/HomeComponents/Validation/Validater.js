import { z } from 'zod';

const validationSchema = z.object({
  from: z.string().nonempty('From is required'),
  to: z.string().nonempty('To is required'),
  departDate: z.string().nonempty('Depart Date is required'),
  returnDate: z.string().nonempty('Return Date is required'),
  travellerEconomy: z.string().nonempty('Traveller Economy is required'),
});

export default validationSchema;
