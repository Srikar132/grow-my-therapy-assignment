import BookCard from "@/components/BookCard"

const books = [
    {
        title: "Baby Dolls & Ninja Swords: 6 True Tales of Play Therapy",
        image: "https://m.media-amazon.com/images/I/41Nk9CF4dLL._AC_SY200_QL15_.jpg",
        available: true,
        link: "https://amazon.com",
        format: "Kindle & Paperback",
    },
    {
        title: "Frozen Tears: 15 Stories of Blindness & Hope after Abortion",
        image: "https://rukminim1.flixcart.com/image/300/300/xif0q/book/i/x/8/the-fallen-drop-of-tears-collection-of-modern-poems-original-imagyqf5nywhrja7.jpeg",
        available: true,
        link: "https://amazon.com",
        format: "Kindle & Paperback",
    },
    {
        title: "99 Devotionals: Heart Reactions and Soul Stretches from the Book of Acts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4st5EeQTVan3fdTX6JIwdw0d3wa-C20Vz7EFPRcuLKpLGln7BrvjWElXG64mpjevq_w&usqp=CAU",
        available: true,
        link: "https://amazon.com",
        format: "Kindle format",
    },
    {
        title: "Passion with Principle: How to Turn Romance into Lifelong Love",
        comingSoon: true,
        available: false,
    },
]

export default function BooksPage() {
    return (
        <div className="w-full common-padding py-12 lg:py-30">
            <div className="screen-max-width ">
                <div className="mb-4">
                <span className="bg-yellow-200 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">
                  Authored Works
                </span>
                    <h2 className="text-5xl font-bold text-gray-900 mt-3">Ellie&apos;s Books</h2>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
                    {books.map((book, i) => (
                        <BookCard key={i} {...book} />
                    ))}
                </div>
            </div>
        </div>
    )
}
