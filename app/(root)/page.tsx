import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { title } from "process";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query: string }>
}) {
  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'Safghan Alam'
    },
    description: "This is a description",
    image: "https://www.pexels.com/photo/overhead-portrait-of-young-woman-relaxing-outdoors-32832839/",
    category: "Robots",
    title: "We Robots"
  },]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup <br /> Connect With Enterprenuer</h1>
        <p className="sub-heading max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Vitrual Competition
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semi-bold">
          {query ? `Search Result for "${query}"` : `All Startups`}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id || index} post={post} />
            )
            )
          ) : (<p className="no-results">No startups found</p>)}
        </ul>
      </section>
    </>
  );
}
