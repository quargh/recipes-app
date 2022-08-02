import Head from 'next/head';
import Image from 'next/image';

export default function Dessert() {
      return (
          <>
                <Head>
                      <title>Dessert Section</title>
                </Head>
                <h1>Dessert</h1>
                <p>List of dessert recipes</p>
                <Image
                    src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
                    alt="Schöne Fische"
                    layout="responsive"
                    width={2400}
                    height={1599}
                />
          </>
      );
}