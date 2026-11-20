import { business } from "@/lib/business-config";
import type { EnquiryFormValues } from "@/lib/schemas";

/** Builds a wa.me link for the configured WhatsApp business number. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const generalEnquiryMessage =
  "Hello Raphaz, I would like to enquire about your medical equipment and healthcare products. Please share the details.";

export const rentalEnquiryMessage =
  "Hello Raphaz, I would like to check the rental availability of medical equipment. Please share the details.";

export function productEnquiryMessage(productName: string) {
  return `Hello Raphaz, I would like to enquire about the availability and pricing of ${productName}. Please share the details.`;
}

export function contactFormMessage(values: EnquiryFormValues) {
  const lines = [
    "Hello Raphaz, I would like to send an enquiry.",
    "",
    `Name: ${values.fullName}`,
    `Mobile: ${values.mobile}`,
  ];
  if (values.email) lines.push(`Email: ${values.email}`);
  lines.push(`Enquiry type: ${values.enquiryType}`);
  if (values.product) lines.push(`Product: ${values.product}`);
  lines.push("", `Message: ${values.message}`);
  return lines.join("\n");
}
