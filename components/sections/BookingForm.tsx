"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingFormSchema, BookingFormData } from "@/lib/validations";
import { SERVICES, PRICING_PLANS } from "@/lib/constants";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  AlertCircle,
  FileCheck2,
  RefreshCw,
  PhoneCall,
} from "lucide-react";

interface BookingFormProps {
  selectedService?: string;
}

export function BookingForm({ selectedService }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  // Get today's ISO date string YYYY-MM-DD for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      customerName: "",
      phoneNumber: "",
      email: "",
      service: selectedService || "",
      preferredDate: "",
      preferredTimeSlot: "",
      propertyAddress: "",
      additionalNotes: "",
    },
  });

  // Whenever parent sends an updated prefilled service (e.g. from Pricing card or Service card)
  useEffect(() => {
    if (selectedService) {
      setValue("service", selectedService, { shouldValidate: true });
    }
  }, [selectedService, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    // Simulate network submission delay
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setBookingData(data);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setIsSubmitted(false);
    setBookingData(null);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EASY SCHEDULING"
          title="Book a Professional Plumber"
          description="Select your service, choose a convenient date and time slot, and our certified plumbers will take care of the rest."
          align="center"
        />

        <div className="bg-[#F5F9FC] rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-card relative">
          {isSubmitted ? (
            /* Confirmation State: Do not claim an appointment is actually confirmed since no backend exists */
            <div className="text-center py-6 sm:py-8 space-y-6 animate-scaleUp">
              <div className="w-18 h-18 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                  Request Received
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] mt-1">
                  Your demo service request has been submitted.
                </h3>
                <p className="text-xs sm:text-sm text-[#627789] mt-2 max-w-lg mx-auto">
                  Thank you for testing the AquaFlow interactive scheduler. In a live system, our dispatch team would call{" "}
                  <strong className="text-[#102A43]">{bookingData?.phoneNumber}</strong> to confirm your slot on{" "}
                  <strong className="text-[#1677C8]">{bookingData?.preferredDate}</strong> ({bookingData?.preferredTimeSlot}).
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-soft max-w-lg mx-auto text-left text-xs sm:text-sm space-y-3">
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-[#102A43] font-bold">
                  <FileCheck2 className="w-4 h-4 text-[#1677C8]" />
                  <span>Scheduled Booking Overview (Demo Preview)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block">Customer:</span>
                    <span className="font-semibold text-slate-800">{bookingData?.customerName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Contact:</span>
                    <span className="font-semibold text-slate-800">{bookingData?.phoneNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Service:</span>
                    <span className="font-semibold text-[#1677C8]">{bookingData?.service}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Slot:</span>
                    <span className="font-semibold text-slate-800">
                      {bookingData?.preferredDate} ({bookingData?.preferredTimeSlot})
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-400 block">Address:</span>
                  <span className="font-medium text-slate-700">{bookingData?.propertyAddress}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button
                  variant="outline"
                  size="md"
                  leftIcon={<RefreshCw className="w-4 h-4" />}
                  onClick={handleReset}
                >
                  Book Another Appointment
                </Button>

                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1677C8] hover:underline"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Need Immediate Dispatch? Call Direct</span>
                </a>
              </div>
            </div>
          ) : (
            /* Active Interactive Booking Form */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Customer Name */}
                <FormField
                  label="Customer Name"
                  required
                  error={errors.customerName?.message}
                >
                  <input
                    type="text"
                    {...register("customerName")}
                    placeholder="e.g. Aditi Roy"
                    className={inputClasses(!!errors.customerName)}
                  />
                </FormField>

                {/* Phone Number */}
                <FormField
                  label="Phone Number"
                  required
                  error={errors.phoneNumber?.message}
                >
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    placeholder="e.g. 9876543210"
                    className={inputClasses(!!errors.phoneNumber)}
                  />
                </FormField>

                {/* Email Address */}
                <FormField
                  label="Email"
                  required
                  error={errors.email?.message}
                >
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="e.g. aditi@example.com"
                    className={inputClasses(!!errors.email)}
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Select Plumbing Service */}
                <FormField
                  label="Select Plumbing Service"
                  required
                  error={errors.service?.message}
                >
                  <select
                    {...register("service")}
                    className={inputClasses(!!errors.service)}
                  >
                    <option value="">Select Service / Package</option>
                    <optgroup label="Sample Pricing Packages">
                      {PRICING_PLANS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Core Plumbing Services">
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <option value="General Inspection">Other Plumbing Assessment</option>
                  </select>
                </FormField>

                {/* Preferred Date (Past dates prevented) */}
                <FormField
                  label="Preferred Date"
                  required
                  hint="Today or later"
                  error={errors.preferredDate?.message}
                >
                  <div className="relative">
                    <input
                      type="date"
                      min={todayStr}
                      {...register("preferredDate")}
                      className={inputClasses(!!errors.preferredDate)}
                    />
                  </div>
                </FormField>

                {/* Preferred Time Slot */}
                <FormField
                  label="Preferred Time Slot"
                  required
                  error={errors.preferredTimeSlot?.message}
                >
                  <select
                    {...register("preferredTimeSlot")}
                    className={inputClasses(!!errors.preferredTimeSlot)}
                  >
                    <option value="">Choose a Time Window</option>
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="Urgent Dispatch (Next Available)">Urgent Dispatch (Next Available)</option>
                  </select>
                </FormField>
              </div>

              {/* Property Address */}
              <FormField
                label="Property Address"
                required
                hint="Street, Flat/Building, Landmark, Area"
                error={errors.propertyAddress?.message}
              >
                <div className="relative">
                  <input
                    type="text"
                    {...register("propertyAddress")}
                    placeholder="e.g. Flat 402, Sunshine Towers, West End, Metro"
                    className={inputClasses(!!errors.propertyAddress)}
                  />
                </div>
              </FormField>

              {/* Additional Notes */}
              <FormField
                label="Additional Notes"
                hint="Optional instructions for our technician"
                error={errors.additionalNotes?.message}
              >
                <textarea
                  rows={2}
                  {...register("additionalNotes")}
                  placeholder="Gate code, parking instructions, or specific fixture make/brand..."
                  className={inputClasses(!!errors.additionalNotes)}
                />
              </FormField>

              {/* Booking Submit Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <AlertCircle className="w-4 h-4 text-[#1677C8] shrink-0" />
                  <span>
                    No advance payment required. Fee is payable post inspection & approval.
                  </span>
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto font-bold shadow-md"
                  isLoading={isSubmitting}
                  leftIcon={<Calendar className="w-4 h-4" />}
                >
                  Confirm Service Request
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

