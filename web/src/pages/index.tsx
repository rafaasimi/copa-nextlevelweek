import Head from "next/head";

interface HomeProps {
  count: number;
}

import Image from "next/image";
import logoImg from "../assets/logo.svg";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import userAvatarExampleImg from "../assets/users-avatar-example.png";
import iconCheckImg from "../assets/icon-check.svg";

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Next Level Week - Edição Copa</title>
      </Head>

      <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
        <main>
          <Image src={logoImg} alt="Logo NLW Copa" />

          <h1 className="mt-16 text-white text-5xl font-bold leading-tight">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>

          <div className="mt-10 flex items-center gap-2">
            <Image src={userAvatarExampleImg} alt="" />

            <strong>
              <span>+12.592</span> pessoas já estão usando
            </strong>
          </div>

          <form>
            <input
              type="text"
              placeholder="Qual nome do seu bolão?"
              required
            ></input>
            <button type="submit">Criar meu bolão</button>
          </form>

          <p>
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>

          <div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>+2.034</span>
                <span>Bolões criados</span>
              </div>
            </div>
            <div>
              <Image src={iconCheckImg} alt="" />
              <div>
                <span>+2.034</span>
                <span>Bolões criados</span>
              </div>
            </div>
          </div>
        </main>

        <Image
          src={appPreviewImg}
          alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa."
          quality={100}
        />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
