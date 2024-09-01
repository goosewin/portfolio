import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import RecentCode, { Repository } from "../components/RecentCode";
import userData from "../constants/data";
import getLatestRepos from "../lib/getLatestRepos";

interface Props {
  repositories: Repository[];
}

export default function Home({ repositories }: Props) {
  return (
    <ContainerBlock>
      <Hero />
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
