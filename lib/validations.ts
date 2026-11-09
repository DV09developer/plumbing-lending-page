import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(80, "Name is too long"),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .regex(/^[0-9+\s\-()]{10,20}$/, "Please enter a valid phone number format"),
  emailAddress: z
    .string()
    .trim()
    .email("Please provide a valid email address"),
  serviceRequired: z
    .string()
    .min(1, "Please select the plumbing service required"),
  propertyType: z.enum(["Residential", "Commercial"], {
    errorMap: () => ({ message: "Please select property type" }),
  }),
  issueDescription: z
    .string()
    .trim()
    .min(10, "Please briefly describe your plumbing issue (at least 10 characters)")
    .max(1000, "Description cannot exceed 1000 characters"),
  preferredContact: z.enum(["Phone Call", "WhatsApp", "Email"], {
    errorMap: () => ({ message: "Please select preferred contact method" }),
  }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

export const bookingFormSchema = z.object({
  customerName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(80, "Name is too long"),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .regex(/^[0-9+\s\-()]{10,20}$/, "Please enter a valid phone number format"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  service: z
    .string()
    .min(1, "Please select the service you wish to book"),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred service date")
    .refine((val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today;
    }, "Selected date cannot be in the past"),
  preferredTimeSlot: z
    .string()
    .min(1, "Please choose a preferred time slot"),
  propertyAddress: z
    .string()
    .trim()
    .min(8, "Please enter your complete address and area (at least 8 characters)"),
  additionalNotes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

