'use client';
import useRecaptcha from '@/hooks/useReCaptcha';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  formConfig?: {
    title: string;
    description: string;
    privacyPolicyUrl: string;
    tosUrl: string;
    practitionerName: string;
  };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps & { recaptchaSiteKey?: string }> = ({
  formConfig = {
    title: "Get In Touch",
    description: "Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day.",
    privacyPolicyUrl: "#",
    tosUrl: "#",
    practitionerName: "Ellie",
  },
  recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
}) => {
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });




  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate reCAPTCHA
    if (!capchaToken) {
      alert('Please complete the reCAPTCHA');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: `Phone: ${formData.phone}\n\nMessage: ${formData.message}`,
          to_name: "Srikar",
          to_email: "srikarchinthala25@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      recaptchaRef?.current?.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{formConfig.title}</h2>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {formConfig.description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="(555) 123-4567"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="How can I help you?"
          value={formData.message}
          onChange={handleInputChange}
          rows={1}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-900"
        />

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSiteKey!}
            onChange={handleRecaptcha}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-800 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Privacy */}
        <p className="text-xs text-gray-500 mt-4">
          By submitting, you agree to our{' '}
          <a href={formConfig.privacyPolicyUrl} className="text-blue-600 underline">
            Privacy Policy & ToS
          </a>{' '}
          and to receive messages from {formConfig.practitionerName}.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
