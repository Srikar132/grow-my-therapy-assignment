"use client"
import React from 'react';
import ContactForm from './ContactForm';
import drSerenaBlakeData from '@/constants';
import { Phone } from 'lucide-react';



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


  const handleGoogleMapsClick = () => {
    const address = `${office.address}, ${office.city}, ${office.state} ${office.zipCode}`;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-[#B5DBDF] min-h-screen py-12 lg:py-20 common-padding">
      <div className="max-w-5xl mx-auto items-center">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Office Info */}
          <div className="space-y-8 mt-14">
            <div>
              <h2 className="text-4xl font-semibold font-color mb-2">Our Office</h2>
              <div className="font-color text-lg">
                <p>{office.address}</p>
                <p>{office.suite}</p>
                <p>{office.city}</p>
                <p>{office.state} {office.zipCode}</p>
                <p>{office.fullLocation}</p>
                <button
                  onClick={handleGoogleMapsClick}
                  className="mt-3 bg-color text-white px-4 py-2 rounded text-sm"
                >
                  Google Maps
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold font-color mb-2">Hours</h2>
              <div className="text-lg font-color leading-tight">
                <p>{hours.inPerson}</p>
                <p>{hours.virtual}</p>
                <p>{hours.method}</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-semibold font-color mb-2">Contact</h2>
              <div className="text-lg">
                <p className="flex items-center">
                  <span className="mr-2"><Phone className='font-color'/></span>
                  <a href={`tel:${contact.phone}`} className="font-color">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='w-full max-w-sm place-self-center'>
            <ContactForm
                formConfig={formConfig}
            />
          </div>
        </div>

        {insuranceNote && (
          <div className="mt-8 max-w-6xl mx-auto bg-white border border-teal-900 rounded-lg p-4">
            <div className="flex items-start flex-col">
              <div className="flex-shrink-0">
                <span className="text-red-700 font-bold">⚠️ Please Note:</span>
              </div>
              <div className="ml-3">
                <p className="text-lg text-blue-800">
                  {insuranceNote.split('out-of-network benefits').map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 && (
                        <span className="text-blue-900 font-semibold">out-of-network benefits</span>
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
