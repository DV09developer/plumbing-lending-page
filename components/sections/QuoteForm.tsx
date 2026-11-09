"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, QuoteFormData } from "@/lib/validations";
import { SERVICES } from "@/lib/constants";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import {
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  PhoneCall,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<QuoteFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      propertyType: "Residential",
      preferredContact: "Phone Call",
      serviceRequired: "",
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      issueDescription: "",
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    // Simulate realistic asynchronous network submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmissionData(data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setSubmissionData(null);
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-[#102A43] text-white relative overflow-hidden">
      {/* Subtle decorative background gradient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#1677C8]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#24B8C7]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading and Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24B8C7]/20 border border-[#24B8C7]/30 text-[#24B8C7] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Obligation Estimate</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Need a Plumbing Expert?{" "}
              <span className="text-[#24B8C7]">Let&apos;s Talk.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us about your plumbing issue and our experienced team will review your specifications and get back to you with transparent pricing.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-700/80">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#24B8C7]/20 text-[#24B8C7] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Rapid Response Desk</h4>
                  <p className="text-xs text-slate-300">We respond to quote inquiries within 30 minutes during business hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#24B8C7]/20 text-[#24B8C7] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Honest, Fixed-Price Quotes</h4>
                  <p className="text-xs text-slate-300">All pricing is presented with zero hidden charges or unexpected additions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#24B8C7]/20 text-[#24B8C7] flex items-center justify-center shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Phone Consultation</h4>
                  <p className="text-xs text-slate-300">Prefer speaking directly? Call our dispatch engineers anytime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form / Success State */}
          <div className="lg:col-span-7">
            <div className="bg-[#0C2033]/90 backdrop-blur-md rounded-3xl p-6 sm:p-9 border border-slate-700/80 shadow-2xl relative">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-scaleUp">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Quote Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{submissionData?.fullName}</strong>. Our plumbing specialist will review your request and contact you via{" "}
                      <strong className="text-[#24B8C7]">{submissionData?.preferredContact}</strong> shortly.
                    </p>
                  </div>

                  {/* Summary of submitted details */}
                  <div className="bg-[#102A43] rounded-2xl p-4 text-left border border-slate-700 max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between border-b border-slate-700/60 pb-1.5">
                      <span className="text-slate-400">Selected Service:</span>
                      <span className="text-white font-semibold">{submissionData?.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/60 pb-1.5">
                      <span className="text-slate-400">Property Type:</span>
                      <span className="text-white font-semibold">{submissionData?.propertyType}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-700/60 pb-1.5">
                      <span className="text-slate-400">Phone:</span>
                      <span className="text-white font-semibold">{submissionData?.phoneNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Email:</span>
                      <span className="text-white font-semibold">{submissionData?.emailAddress}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    * Interactive frontend demo simulation: No backend call made.
                  </p>

                  <Button
                    variant="aqua"
                    size="md"
                    leftIcon={<RefreshCw className="w-4 h-4" />}
                    onClick={handleReset}
                    className="mx-auto"
                  >
                    Submit Another Quote Request
                  </Button>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <FormField
                      label="Full Name"
                      required
                      theme="dark"
                      error={errors.fullName?.message}
                    >
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="e.g. Ramesh Patel"
                        className={inputClasses(!!errors.fullName, true)}
                      />
                    </FormField>

                    {/* Phone Number */}
                    <FormField
                      label="Phone Number"
                      required
                      theme="dark"
                      error={errors.phoneNumber?.message}
                    >
                      <input
                        type="tel"
                        {...register("phoneNumber")}
                        placeholder="e.g. 9876543210"
                        className={inputClasses(!!errors.phoneNumber, true)}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <FormField
                      label="Email Address"
                      required
                      theme="dark"
                      error={errors.emailAddress?.message}
                    >
                      <input
                        type="email"
                        {...register("emailAddress")}
                        placeholder="e.g. ramesh@example.com"
                        className={inputClasses(!!errors.emailAddress, true)}
                      />
                    </FormField>

                    {/* Service Required Dropdown */}
                    <FormField
                      label="Service Required"
                      required
                      theme="dark"
                      error={errors.serviceRequired?.message}
                    >
                      <select
                        {...register("serviceRequired")}
                        className={inputClasses(!!errors.serviceRequired, true)}
                      >
                        <option value="" className="text-slate-900">Select a Service</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="text-slate-900">
                            {s.title}
                          </option>
                        ))}
                        <option value="General Plumbing Issue" className="text-slate-900">
                          Other / General Inquiry
                        </option>
                      </select>
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Property Type */}
                    <FormField
                      label="Property Type"
                      required
                      theme="dark"
                      error={errors.propertyType?.message}
                    >
                      <select
                        {...register("propertyType")}
                        className={inputClasses(!!errors.propertyType, true)}
                      >
                        <option value="Residential" className="text-slate-900">Residential (Apartment / House)</option>
                        <option value="Commercial" className="text-slate-900">Commercial (Office / Restaurant / Retail)</option>
                      </select>
                    </FormField>

                    {/* Preferred Contact Method */}
                    <FormField
                      label="Preferred Contact Method"
                      required
                      theme="dark"
                      error={errors.preferredContact?.message}
                    >
                      <select
                        {...register("preferredContact")}
                        className={inputClasses(!!errors.preferredContact, true)}
                      >
                        <option value="Phone Call" className="text-slate-900">Phone Call</option>
                        <option value="WhatsApp" className="text-slate-900">WhatsApp</option>
                        <option value="Email" className="text-slate-900">Email</option>
                      </select>
                    </FormField>
                  </div>

                  {/* Describe Your Plumbing Issue */}
                  <FormField
                    label="Describe Your Plumbing Issue"
                    required
                    theme="dark"
                    hint="Min 10 characters"
                    error={errors.issueDescription?.message}
                  >
                    <textarea
                      rows={3}
                      {...register("issueDescription")}
                      placeholder="Please describe symptoms, location of the leak or issue, and any urgency..."
                      className={inputClasses(!!errors.issueDescription, true)}
                    />
                  </FormField>

                  <Button
                    type="submit"
                    variant="aqua"
                    size="lg"
                    className="w-full text-sm font-bold shadow-lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Request My Free Quote
                  </Button>

                  <p className="text-[11px] text-center text-slate-400">
                    We respect your privacy. Zero spam or shared information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

