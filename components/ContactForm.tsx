"use client"
import React, { useState, useRef, useEffect } from 'react';

// Types
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
  


const ContactForm: React.FC<ContactFormProps & { recaptchaSiteKey: string }> = ({
    formConfig = {
      title: "Get In Touch",
      description: "Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.",
      privacyPolicyUrl: "#",
      tosUrl: "#",
      practitionerName: "Ellie"
    },
    recaptchaSiteKey,
  }) => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const recaptchaRef = useRef<HTMLDivElement>(null);
    const recaptchaWidgetId = useRef<number | null>(null);
  
    // Load reCAPTCHA script
    useEffect(() => {
      if (!document.querySelector('script[src*="recaptcha"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setRecaptchaLoaded(true);
        };
        document.head.appendChild(script);
      } else {
        setRecaptchaLoaded(true);
      }
    }, []);
  
    // Initialize reCAPTCHA when loaded
    useEffect(() => {
      if (recaptchaLoaded && recaptchaRef.current && window.grecaptcha) {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current) {
            recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: recaptchaSiteKey,
              theme: 'light',
              size: 'normal'
            });
          }
        });
      }
    }, [recaptchaLoaded, recaptchaSiteKey]);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        // Verify reCAPTCHA
        if (window.grecaptcha) {
          const token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' });
          
          // Here you would normally send the token to your backend for verification
          console.log('reCAPTCHA token:', token);
          
          // Call the onSubmit callback if provided
        //   if (onSubmit) {
        //     onSubmit(formData);
        //   }
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
          
          // Reset reCAPTCHA
          if (recaptchaWidgetId.current !== null) {
            window.grecaptcha.reset(recaptchaWidgetId.current);
          }
          
          alert('Form submitted successfully!');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <div className="bg-pink-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{formConfig.title}</h2>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {formConfig.description}
        </p>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              required
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(555) 234-5678"
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
  
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can I help you?"
              rows={1}
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            />
          </div>
  
          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <div ref={recaptchaRef}></div>
          </div>
  
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-900 text-white py-2 px-4 rounded-md hover:bg-teal-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
  
          {/* Privacy Policy Text */}
          <p className="text-xs text-gray-500 mt-4">
            By submitting, you confirm you are 18+ and agree to our{' '}
            <a href={formConfig.privacyPolicyUrl} className="text-blue-600 hover:underline">
              Privacy Policy & ToS
            </a>{' '}
            and to receive emails & texts from {formConfig.practitionerName} Shumaker.
          </p>
        </form>
      </div>
    );
  };

  export default ContactForm