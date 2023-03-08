import React from 'react';
import styles from './Projects.module.css';
import { ReactComponent as MacBook } from '../../Assets/MacBook.svg';
import { ReactComponent as Imac } from '../../Assets/iMac.svg';
import { ReactComponent as Iphone } from '../../Assets/iPhone.svg';
import { ReactComponent as IpadCup } from '../../Assets/ipadCupGuesser.svg';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className={styles.background}>
      <div className={`${styles.content} container`}>
        <h1>Meus Projetos</h1>
        <ProjectCard
          project="Moview"
          description="Moview é um site de avaliações de filmes que oferece aos usuários a possibilidade de visualizar as notas atribuídas pelos outros usuários. A plataforma foi desenvolvida utilizando React.js e Bootstrap para o front-end e Springboot para o back-end. Além disso, o site oferece autenticação de e-mail para garantir a segurança das avaliações e uma lógica simples para o cálculo e exibição das notas. Infelizmente, atualmente o site está fora do ar devido às políticas de pacotes gratuitos do Heroku."
          src="https://github.com/AlexWasHeree/Moview"
          mockup={<MacBook />}
        />
        <ProjectCard
          project="Bikcraft"
          description="Bikcraft é uma loja virtual especializada na venda de bicicletas elétricas exclusivas da marca fictícia 'Bikcraft'. Com uma abordagem simples, o site é focado no design e na usabilidade, oferecendo aos usuários uma experiência de compra agradável e intuitiva. O site foi construído utilizando tecnologias essenciais como HTML, CSS e Javascript, garantindo uma interface eficiente e de fácil utilização para clientes em potencial que procuram adquirir uma bicicleta elétrica única e diferenciada. projeto do curso Origamid."
          src="https://github.com/AlexWasHeree/Bikcraft"
          mockup={<Imac />}
          rightCard
        />
        <ProjectCard
          project="Dogs"
          description="Dogs é uma plataforma de rede social especializada em compartilhamento de fotos de cachorros, incluindo informações como peso, raça e nome. Desenvolvida com uma API personalizada em WordPress e construída com React.js e CSS modules, a plataforma apresenta funcionalidades como postagem de fotos, scroll infinito e autenticação de usuários para maior segurança e privacidade. Em resumo, Dogs é uma plataforma única e exclusiva para amantes de cachorros que buscam compartilhar suas fotos e informações com uma comunidade dedicada. projeto do curso Origamid"
          src="https://dogs-seven-gules.vercel.app"
          mockup={<Iphone />}
        />
        <ProjectCard
          project="CupGuesser"
          description="Cupguesser é uma aplicação web criada para os usuários poderem palpitar nos jogos da Copa do Mundo do Qatar de 2022. O site conta com autenticação de usuário, garantindo segurança e privacidade nas apostas. Para construir o front-end, foi utilizado React.js e TailwindCSS, enquanto no back-end foi implementado Node.js com Prisma e Koa para o roteamento e configuração de cors. Devido ao banco de dados estar hibernando no momento e a copa ter terminado, não é mais possível utilizar a aplicação, porém o código ainda está disponível no github."
          src="https://github.com/AlexWasHeree/CupGuesser"
          mockup={<IpadCup />}
          rightCard
        />
      </div>
    </div>
  );
};

export default Projects;
