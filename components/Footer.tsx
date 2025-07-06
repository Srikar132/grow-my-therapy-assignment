import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-color text-teal-100 pt-20 pb-5 text-sm">
      <div className="max-w-4xl mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-3">
          <Image src="/footer.png" alt="Ellie Logo" width={120} height={60} className="rounded-4xl"/>
          <div className="text-xs space-y-1">
            <p className="text-yellow-300 font-semibold">★ <span className="text-white">Top Rated</span></p>
            <p className="underline text-blue-100 cursor-pointer">Testimonials</p>
            <p className="underline text-blue-100 cursor-pointer">Media Mentions</p>
          </div>
          <div className="text-sm mt-2 leading-5">
            <p>4913 Fitzhugh Avenue, Suite 102, Richmond, VA 23230</p>
            <p className="mt-1">📞 (757) 474-5262</p>
          </div>
          <Image src="/featured1.jpg" width={100} height={100} alt="logo" className="w-[150px]"/>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3">LINKS</h4>
          <ul className="space-y-1 text-white/90">
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Get In Touch</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Testimonials</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">About Me</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">FAQ's</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Therapies</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3 tracking-wide">AREAS SERVED</h4>
          <ul className="space-y-2 text-teal-100/90">
            {[
              "Richmond, VA",
              "Ashland, VA",
              "Mechanicsville, VA",
              "Lakeside, VA",
              "East Highland Park, VA",
              "Short Pump, VA",
              "Highland Springs, VA",
              "Glen Allen, VA",
              "Sandston, VA",
              "Bon Air, VA",
              "Chester, VA",
              "Midlothian, VA",
              "Moseley, VA",
              "Hopewell, VA",
              "Petersburg, VA",
              "Colonial Heights, VA",
              "New Kent, VA",
              "Powhatan, VA",
              "Goochland, VA",
              "Ruther Glen, VA",
              "Williamsburg, VA",
              "Fredericksburg, VA",
            ].map((city) => (
              <li key={city} className="hover:underline cursor-pointer tracking-wide">{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-3 text-teal-100/90">SERVICES</h4>
          <ul className="space-y-2">
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Christian Individual Counseling in Richmond, VA</li>
            <li className="text-teal-100/90 tracking-wide hover:underline cursor-pointer">Christian Couples Counseling in Richmond, VA</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-4 text-center text-xs space-y-1 text-white/80">
        <p>Ellie Shumaker © Copyright 2024. All Rights Reserved.</p>
        <p>
          Credits to freepik for media{" "}
          <a
            href="https://www.freepik.com"
            className="underline text-blue-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.freepik.com
          </a>{" "}
          | People illustrations by Storyset
        </p>
        <p>
          <a href="#" className="underline text-blue-200">
            Privacy Policy
          </a>{" "}
          &amp;{" "}
          <a href="#" className="underline text-blue-200">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
