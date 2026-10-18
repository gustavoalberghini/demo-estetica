
"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(
  /\D/g,
  ""
);

function whatsappLink(message: string) {
  const encodedMessage = encodeURIComponent(message);

  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : "#contato";
}

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={diagonal ? "icon icon-diagonal" : "icon"}
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      className="brand-flower"
    >
      <path
        d="M24 23.5c-5.8-3.1-7.2-7.1-4.6-10.2 2.1-2.5 5.1-1.2 4.6 10.2Zm0 1c3.1-5.8 7.1-7.2 10.2-4.6 2.5 2.1 1.2 5.1-10.2 4.6Zm-1 0c-5.8 3.1-7.2 7.1-4.6 10.2 2.1 2.5 5.1 1.2 4.6-10.2Zm1-1c3.1 5.8 7.1 7.2 10.2 4.6 2.5-2.1 1.2-5.1-10.2-4.6Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="24" cy="24" r="2.2" stroke="currentColor" strokeWidth="1.1" />
      <circle
        cx="24"
        cy="24"
        r="15.5"
        stroke="currentColor"
        strokeWidth=".7"
        opacity=".55"
      />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Cuidado facial",
    description:
      "Um momento dedicado à pele, com atenção às necessidades individuais.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Ambiente de cuidado facial com toalhas e produtos",
    message:
      "Olá! Gostaria de saber mais sobre os tratamentos faciais disponíveis.",
  },
  {
    number: "02",
    title: "Rituais de pele",
    description:
      "Uma experiência de cuidado pensada para valorizar a sua rotina.",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Produtos de cuidado pessoal em uma composição minimalista",
    message:
      "Olá! Gostaria de conhecer os rituais de cuidado com a pele.",
  },
  {
    number: "03",
    title: "Beleza e bem-estar",
    description:
      "Cuidado pessoal em um ambiente acolhedor e atento aos detalhes.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Ambiente sereno preparado para uma experiência de bem-estar",
    message: "Olá! Gostaria de conhecer os serviços disponíveis.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="concept-banner">
        <span className="concept-star" aria-hidden="true">
          ✳
        </span>
        <span>Conceito visual demonstrativo</span>
        <span className="concept-divider" aria-hidden="true">
          /
        </span>
        <span>Proposta não oficial</span>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          aria-label="Ateliê — início"
          onClick={closeMenu}
        >
          <FlowerIcon />
          <span className="brand-copy">
            <span className="brand-name">ATELIÊ</span>
            <span className="brand-subtitle">ESTÉTICA &amp; BEM-ESTAR</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={menuOpen ? "main-nav nav-open" : "main-nav"}
          aria-label="Navegação principal"
        >
          <a href="#filosofia" onClick={closeMenu}>
            Filosofia
          </a>
          <a href="#servicos" onClick={closeMenu}>
            Tratamentos
          </a>
          <a href="#espaco" onClick={closeMenu}>
            O espaço
          </a>
          <a
            className="nav-cta"
            href={whatsappLink(
              "Olá! Gostaria de conhecer os serviços e consultar horários disponíveis."
            )}
            target={WHATSAPP_NUMBER ? "_blank" : undefined}
            rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
            onClick={closeMenu}
          >
            Agendar uma visita <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div
          className="hero-image"
          role="img"
          aria-label="Ambiente tranquilo com luz natural e tons suaves"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            Beleza em seu próprio tempo
          </p>

          <h1 id="hero-title">
            O cuidado que
            <br />
            floresce <em>em você.</em>
          </h1>

          <p className="hero-description">
            Um convite para desacelerar, reconectar-se e descobrir a beleza
            nos detalhes.
          </p>

          <a
            className="button button-light"
            href={whatsappLink(
              "Olá! Gostaria de conhecer os serviços e agendar uma visita."
            )}
            target={WHATSAPP_NUMBER ? "_blank" : undefined}
            rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
          >
            Descubra sua experiência <ArrowIcon />
          </a>
        </div>

        <div className="hero-bottom">
          <span className="hero-note">Beleza com intenção</span>
          <span className="hero-count">
            01 <span>/</span> 03
          </span>
          <a className="scroll-cue" href="#filosofia">
            <span className="scroll-line" />
            Deslize para descobrir
          </a>
        </div>
      </section>

      <section className="philosophy section-shell" id="filosofia">
        <div className="section-kicker">
          <span className="section-number">01</span>
          <span className="kicker-line" />
          <span>Nossa filosofia</span>
        </div>

        <div className="philosophy-grid">
          <h2>
            Menos pressa.
            <br />
            Mais <em>presença.</em>
          </h2>

          <div className="philosophy-copy">
            <p>
              Acreditamos que o cuidado começa quando você reserva um momento
              para si. Cada detalhe convida a viver uma experiência mais
              tranquila, consciente e pessoal.
            </p>
            <a className="text-link" href="#servicos">
              Explore nossas experiências <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="philosophy-foot">
          <span>Uma pausa para você</span>
          <span>Beleza que respeita a sua essência</span>
        </div>
      </section>

      <section className="services section-shell" id="servicos">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span className="section-number">02</span>
              <span className="kicker-line" />
              <span>Cuidado em cada detalhe</span>
            </div>
            <h2>
              Nossas <em>experiências</em>
            </h2>
          </div>

          <p className="section-intro">
            Momentos de cuidado pensados para transformar a rotina em um
            ritual só seu.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <a
                className="service-image-link"
                href={whatsappLink(service.message)}
                target={WHATSAPP_NUMBER ? "_blank" : undefined}
                rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
                aria-label={`Consultar sobre ${service.title}`}
              >
                <div
                  className="service-image"
                  role="img"
                  aria-label={service.imageAlt}
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <span className="service-image-arrow">
                  <ArrowIcon diagonal />
                </span>
              </a>

              <div className="service-meta">
                <span>{service.number}</span>
                <span>Experiência de cuidado</span>
              </div>

              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <a
                className="text-link service-link"
                href={whatsappLink(service.message)}
                target={WHATSAPP_NUMBER ? "_blank" : undefined}
                rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
              >
                Quero saber mais <ArrowIcon />
              </a>
            </article>
          ))}
        </div>

        <p className="demo-disclaimer">
          Os nomes e as descrições acima são ilustrativos. Os serviços reais
          devem ser confirmados com a profissional antes da publicação.
        </p>
      </section>

      <section className="quote-section" aria-label="Mensagem de inspiração">
        <div
          className="quote-image"
          role="img"
          aria-label="Detalhe de um ambiente acolhedor e sereno"
        />
        <div className="quote-shade" />

        <div className="quote-content">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            Seu momento de cuidado
            <br />
            não precisa de motivo.
            <br />
            Só de <em>espaço.</em>
          </blockquote>
          <p className="quote-caption">Um lembrete para você</p>
        </div>
      </section>

      <section className="space-section section-shell" id="espaco">
        <div className="space-image-wrap">
          <div
            className="space-image"
            role="img"
            aria-label="Espaço de bem-estar com tons naturais e luz suave"
          />
          <span className="image-index">
            FIG. 01 <span>—</span> ATMOSFERA
          </span>
        </div>

        <div className="space-copy">
          <div className="section-kicker">
            <span className="section-number">03</span>
            <span className="kicker-line" />
            <span>Um convite à calma</span>
          </div>

          <h2>
            Um espaço para <em>respirar.</em>
          </h2>

          <p>
            Uma atmosfera serena, onde cada detalhe ajuda você a desacelerar
            e se sentir acolhida.
          </p>

          <a
            className="text-link"
            href={whatsappLink(
              "Olá! Gostaria de conhecer o espaço e consultar horários disponíveis."
            )}
            target={WHATSAPP_NUMBER ? "_blank" : undefined}
            rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
          >
            Conheça o espaço <ArrowIcon />
          </a>
        </div>

        <p className="space-disclaimer">
          Fotografia ilustrativa. Imagens definitivas e informações do espaço
          devem ser aprovadas pela responsável.
        </p>
      </section>

      <section className="closing-cta" id="contato">
        <div className="closing-decoration" aria-hidden="true">
          <FlowerIcon />
        </div>

        <p className="eyebrow">
          <span className="eyebrow-line" />
          O seu momento começa aqui
        </p>

        <h2>
          Que tal reservar
          <br />
          um tempo para <em>você?</em>
        </h2>

        <p className="closing-description">
          Entre em contato para conhecer os serviços e encontrar o melhor
          momento para sua visita.
        </p>

        <a
          className="button button-dark"
          href={whatsappLink(
            "Olá! Gostaria de conhecer os serviços e consultar horários disponíveis."
          )}
          target={WHATSAPP_NUMBER ? "_blank" : undefined}
          rel={WHATSAPP_NUMBER ? "noreferrer" : undefined}
        >
          Conversar pelo WhatsApp <ArrowIcon />
        </a>

        <span className="closing-footnote">
          Um cuidado que começa com você.
        </span>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <a
            className="brand footer-brand"
            href="#inicio"
            aria-label="Ateliê — voltar ao início"
          >
            <FlowerIcon />
            <span className="brand-copy">
              <span className="brand-name">ATELIÊ</span>
              <span className="brand-subtitle">ESTÉTICA &amp; BEM-ESTAR</span>
            </span>
          </a>

          <p className="footer-manifesto">
            Um conceito de beleza, cuidado e presença.
          </p>

          <a className="back-to-top" href="#inicio">
            Voltar ao topo <span aria-hidden="true">↑</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p>
            Conceito demonstrativo não oficial. Conteúdo, marca e imagens
            sujeitos à validação antes de qualquer publicação comercial.
          </p>
          <p className="copyright">
            © 2026 ATELIÊ — PROPOSTA CONCEITUAL
          </p>
        </div>
      </footer>
    </main>
  );
}
