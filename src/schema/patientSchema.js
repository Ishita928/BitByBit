import { z } from 'zod';

export const patientSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address").optional(),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dob: z.string().refine(val => {
    const date = new Date(val);
    return !isNaN(date.getTime());
  }, "Please enter a valid date of birth"),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"]),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  specialty: z.string().min(3, "Please select a valid specialty"),
  symptoms: z.string().min(10, "Please describe symptoms with at least 10 characters"),
  preferredDateTime: z.string().optional(),
});

export type PatientFormData = z.infer<typeof patientSchema>;