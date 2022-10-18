import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import RecentCode from "../components/RecentCode";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";

export default function Home({ repositories }: any) {
  return (
    <ContainerBlock
      title="Daniel Stolbov - Software Engineer"
      description={userData.about.title}
    >
      <Hero />
      {/* <FavoriteProjects /> */}
      <RecentCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(userData, token!);

  return {
    props: {
      repositories,
    },
  };
};
