"use client"
import React from 'react';
import ContactForm from './ContactForm';
import drSerenaBlakeData from '@/constants';



interface ContactSectionProps {
  office?: {
    address: string;
    suite: string;
    city: string;
    state: string;
    zipCode: string;
    fullLocation: string;
  };
  hours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
  };
  contact?: {
    phone: string;
  };
  formConfig?: {
    title: string;
    description: string;
    privacyPolicyUrl: string;
    tosUrl: string;
    practitionerName: string;
  };
  insuranceNote?: string;
}

// Extend Window interface for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: string | HTMLElement, options: any) => number;
      reset: (widgetId?: number) => void;
    };
  }
}


const ContactSection: React.FC<ContactSectionProps> = ({
  office = {
    address: "1287 Maplewood Drive",
    suite: "", // No suite was mentioned, but leave it empty for future use
    city: "Los Angeles",
    state: "CA",
    zipCode: "90026",
    fullLocation: "Los Angeles, CA"
  },
  hours = drSerenaBlakeData.officeHours as any,
  contact = {
    phone: drSerenaBlakeData.contact.phone
  },
  formConfig = {
    title: "Get In Touch",
    description: "Simply fill out the brief fields below and Ellie will be in touch with you soon, usually within one business day. This form is safe, private, and completely free.",
    privacyPolicyUrl: "#",
    tosUrl: "#",
    practitionerName: "Ellie"
  },
  insuranceNote = "I do not take insurance directly. However, I can provide you with a billing sheet with the necessary facts and codes so you can file for out-of-network benefits with your insurance company.",
}) => {
  const handleFormSubmit = (formData: FormData) => {
    console.log('Form submitted with data:', formData);
    // Handle form submission logic here
  };

  const handleGoogleMapsClick = () => {
    const address = `${office.address}, ${office.city}, ${office.state} ${office.zipCode}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-cyan-100 min-h-screen py-12 lg:py-20 common-padding">
      <div className="screen-max-width">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Office Info */}
          <div className="space-y-8">
            {/* Office Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Office</h2>
              <div className="text-gray-700 space-y-1">
                <p>{office.address}</p>
                <p>{office.suite}</p>
                <p>{office.city}</p>
                <p>{office.state} {office.zipCode}</p>
                <p>{office.fullLocation}</p>
                <button 
                  onClick={handleGoogleMapsClick}
                  className="mt-3 bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 transition-colors"
                >
                  Google Maps
                </button>
              </div>
            </div>

            {/* Hours Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Hours</h2>
              <div className="text-gray-700 space-y-1">
                <p>{hours.inPerson}</p>
                <p>{hours.virtual}</p>
                <p>{hours.method}</p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
              <div className="text-gray-700">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href={`tel:${contact.phone}`} className="hover:text-blue-600 transition-colors">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className='w-full max-w-sm place-self-center'>
            <ContactForm
                formConfig={formConfig}
            />
          </div>
        </div>

        {/* Insurance Note */}
        {insuranceNote && (
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="text-red-600 font-bold">⚠️ Please Note:</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800">
                  {insuranceNote.split('out-of-network benefits').map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 && (
                        <span className="text-blue-600 font-semibold">out-of-network benefits</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;

// Example usage:
// <ContactSection recaptchaSiteKey="your-recaptcha-site-key-here" />