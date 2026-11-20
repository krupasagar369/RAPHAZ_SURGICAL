import { z } from "zod";

export const enquiryTypes = ["Rental", "Purchase", "General"] as const;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(80, "Name is too long"),
  mobile: z
    .string()
    .trim()
    .refine(
      (value) => /^(?:\+?91|0)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, "")),
      "Enter a valid 10-digit Indian mobile number",
    ),
  email: z
    .string()
    .trim()
    .refine((value) => value === "" || z.email().safeParse(value).success, "Enter a valid email address"),
  enquiryType: z.enum(enquiryTypes, { error: "Please select an enquiry type" }),
  product: z.string().trim().max(100, "Product name is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details (at least 10 characters)")
    .max(1000, "Message is too long"),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
