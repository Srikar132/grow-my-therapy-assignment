import CandleQuoteSection from "@/components/CandleQuoteSection"
import MapEmbed from "@/components/MapEmbed"

export default function LocationPage() {
  return (
    <div>
      <CandleQuoteSection />

      <MapEmbed
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.091554787279!2d-118.26573498478256!3d34.07736728059988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7f0374983f3%3A0x6e91dfd69ee4094e!2s1287%20Maplewood%20Dr%2C%20Los%20Angeles%2C%20CA%2090026!5e0!3m2!1sen!2sus!4v1720526931325!5m2!1sen!2sus"
      />
    </div>
  )
}
