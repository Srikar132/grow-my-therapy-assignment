import CandleQuoteSection from "@/components/CandleQuoteSection"
import MapEmbed from "@/components/MapEmbed"

export default function LocationPage() {
  return (
    <div>
      <CandleQuoteSection />

      <MapEmbed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.854926215652!2d-77.4995356233896!3d37.58266272242957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b111db87e92b3b%3A0x20e4c147ed308c6c!2sEllie%20Shumaker%2C%20LCSW%20Counseling!5e0!3m2!1sen!2sin!4v1720199023329!5m2!1sen!2sin"
      />
    </div>
  )
}
