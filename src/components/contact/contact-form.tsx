"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { enquirySchema, enquiryTypes, type EnquiryFormValues } from "@/lib/schemas";
import { contactFormMessage, whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  defaultProduct?: string;
  defaultType?: (typeof enquiryTypes)[number];
}

const fieldClass =
  "h-12 w-full rounded-2xl border border-brand-charcoal/15 bg-white px-4 text-base text-brand-charcoal placeholder:text-brand-muted focus:border-brand-orange-deep aria-invalid:border-brand-red";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-brand-charcoal">
        {label}
        {required ? (
          <span className="text-brand-red" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-brand-muted"> (optional)</span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-brand-red-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Validates the enquiry with Zod and hands it off to WhatsApp (no backend required).
 *
 * To send enquiries to a server instead (email service, CRM or database), replace `onSubmit`
 * with a POST to your own API route, e.g. `fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) })`.
 */
export function ContactForm({ defaultProduct = "", defaultType = "General" }: ContactFormProps) {
  const [opened, setOpened] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      enquiryType: defaultType,
      product: defaultProduct,
      message: defaultProduct
        ? `I would like to enquire about the availability and pricing of ${defaultProduct}.`
        : "",
    },
  });

  const onSubmit = (values: EnquiryFormValues) => {
    const url = whatsappUrl(contactFormMessage(values));
    const opener = window.open(url, "_blank", "noopener,noreferrer");
    // Pop-up blockers can refuse window.open; fall back to same-tab navigation.
    if (!opener) window.location.assign(url);
    setOpened(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Enquiry form"
      className="space-y-5 rounded-3xl border border-brand-charcoal/8 bg-white p-6 shadow-soft sm:p-8"
    >
      <Field id="fullName" label="Full Name" required error={errors.fullName?.message}>
        <input
          id="fullName"
          type="text"
          autoComplete="name"
          aria-invalid={errors.fullName ? true : undefined}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className={fieldClass}
          {...register("fullName")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="mobile" label="Mobile Number" required error={errors.mobile?.message}>
          <input
            id="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            aria-invalid={errors.mobile ? true : undefined}
            aria-describedby={errors.mobile ? "mobile-error" : undefined}
            className={fieldClass}
            {...register("mobile")}
          />
        </Field>
        <Field id="email" label="Email Address" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="enquiryType" label="Enquiry Type" required error={errors.enquiryType?.message}>
          <select
            id="enquiryType"
            aria-invalid={errors.enquiryType ? true : undefined}
            aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
            className={fieldClass}
            {...register("enquiryType")}
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field id="product" label="Product Interested In" error={errors.product?.message}>
          <input
            id="product"
            type="text"
            placeholder="e.g. Wheelchair, BiPAP"
            aria-invalid={errors.product ? true : undefined}
            aria-describedby={errors.product ? "product-error" : undefined}
            className={fieldClass}
            {...register("product")}
          />
        </Field>
      </div>

      <Field id="message" label="Message" required error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "h-auto resize-y py-3")}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        <Send className="size-5" aria-hidden="true" />
        Send Enquiry
      </Button>

      <p className="flex items-start gap-2 text-sm text-brand-muted" role="status" aria-live="polite">
        <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-[#0e7a3f]" />
        {opened
          ? "WhatsApp has been opened with your enquiry. Press send in WhatsApp to deliver it to our team."
          : "Your enquiry opens in WhatsApp so you can send it to our team directly."}
      </p>
    </form>
  );
}
