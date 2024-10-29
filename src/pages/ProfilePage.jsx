import NotFound from "@/helpers/NotFound";
import SEO from "@/helpers/SEO";
import { BadgeCheck, Share } from "lucide-react";
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { username } = useParams();
  console.log(username);

  const users = [
    {
      id: 1,
      name: "Simon Sipes",
      username: "Tania_Hessel",
      email: "Kristie_Gutkowski53@yahoo.com",
      password: "-50d26983@",
      links: [
        {
          id: 1,
          title: "Application",
          url: "https://www.domain.com/tania_hessel",
          isPublic: false,
        },
        {
          id: 2,
          title: "Application",
          url: "https://www.domain.com/tania_hessel",
          isPublic: false,
        },
        {
          id: 3,
          title: "Application",
          url: "https://www.domain.com/tania_hessel",
          isPublic: false,
        },
      ],
    },
    {
      id: 2,
      name: "Bryan Kris",
      username: "Krista.Jaskolski",
      email: "Rhonda.Kirlin@yahoo.com",
      password: "-7a5baedf%",
    },
    {
      id: 3,
      name: "Mind Strata",
      username: "mindstrata",
      email: "hello@mindstrata.com",
      password: "mind@123",
      links: [
        {
          id: 1,
          title: "Application",
          url: "https://www.domain.com/mindstrata",
          isPublic: true,
        },
        {
          id: 2,
          title: "Application",
          url: "https://www.domain.com/mindstrata",
          isPublic: true,
        },
        {
          id: 3,
          title: "Application",
          url: "https://www.domain.com/mindstrata",
          isPublic: true,
        },
      ],
    },
  ];

  const user = users.find((u) => {
    return username === u.username;
  });

  if (!user) {
    return (
      <>
        <NotFound />
      </>
    );
  }

  return (
    <>
      <SEO title={`@${user.username}`} description={`${user.name}`} />
      <div className="pb-14 h-[100%] from-lime-100 to-teal-400 bg-[url('https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-star-wars-goh-splash.jpg.adapt.crop191x100.1200w.jpg')] bg-cover bg-no-repeat bg-fixed bg-center">
        <div className="pt-9 pb-10">
          <div className="flex items-center justify-end px-12">
            <div className="p-2 bg-white rounded-full w-fit cursor-macCursor">
              <Share color="#000000" size={17} />
            </div>
          </div>
          <div>
            <div className="flex justify-center flex-col items-center gap-y-1">
              <div className="h-36 w-36 rounded-full border-2 border-black">
                <img
                  src={"https://tailwindcss.com/img/erin-lindford.jpg"}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <h4 className="text-3xl font-semibold">{user.name}</h4>
              <p className="flex justify-center items-center gap-x-1 text-sm font-medium text-zinc-800">
                @{user.username}
                <BadgeCheck fill="#00b7ff" color="#00b7ff" />
              </p>
            </div>
            {user.links ? (
              <div className="flex flex-col justify-center items-center gap-y-4 py-7">
                {user.links.map((item) => {
                  return (
                    <a
                      href={item.url}
                      key={item.id}
                      target="_blank"
                      className="cursor-pointer"
                    >
                      <div className="bg-black min-w-[600px] min-h-10 rounded-md p-4 shadow-sm shadow-zinc-700 hover:shadow-xl hover:shadow-zinc-800">
                        <p className="flex items-center justify-center text-lg font-medium text-white">
                          Follow on {item.title}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div>No link provided</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
