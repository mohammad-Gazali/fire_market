import { PhoneType } from "mytypes";
import { GetStaticProps } from "next";
import { Hero, Phones } from "./components";


export default function Home({ phones }: { phones: PhoneType[] }) {
	return (
		<div className="text-2xl text-center">
			<Hero />
      <Phones phones={phones} />
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.HOST}/api/phones`)
  const phones: PhoneType[] = await response.json()
  return {
      props: {
        phones
      }
  }
}