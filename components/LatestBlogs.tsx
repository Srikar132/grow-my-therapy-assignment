
const LatestBlogs = () => {

    return (
        <section className="bg-zinc-100 text-cyan-900 common-padding py-12 lg:py-30">
        <div className="screen-max-width">
            <h1 className="text-5xl font-bold mb-5">Latest Blogs</h1>
            <p className="max-w-lg text-base">Discover helpful insights and strategies from Ellie Shumaker to improve your relationships and personal well-being.</p>
        </div>

        <hr className="w-full h-px text-gray-200 my-5 screen-max-width"/>
        
        <ul className="my-5 p-5 py-20 flex items-center justify-center">
            {/* No blogs for now  */}
            <p className="text-base">No blogs are posted till now.</p>
        </ul>
        </section>
    )
};

export default LatestBlogs;