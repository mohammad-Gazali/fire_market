import { PhoneType } from "mytypes";
import { GetStaticProps } from "next";
import { Hero, Phones } from "../components";


export default function Home({ phones }: { phones: PhoneType[] }) {
	return (
		<main className="text-2xl text-center">
			<Hero />
      <Phones phones={phones} />
		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.HOST}`)
  const phones: PhoneType[] = await response.json()
  return {
      props: {
        phones
      },
      revalidate: 60
  }
}