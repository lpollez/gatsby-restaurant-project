import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="laissez-nous vous dire" title="infos" />
        <QuickInfoWrapper>
          <p className="text">
            Ceci est un simple exemple de site vitrine. Il est développé avec
            les technologies modernes (notamment React qui est la librairie de
            programmation développée par Facebook), ce qui le rend très
            performant. A contenu égal, il est 6 à 10 fois plus rapide qu'un
            site développé avec un CMS standard comme Wordpress ou Drupal. De
            plus, cette technologie offre une sécurité optimale et un
            hébergement simplifié. On remarque facilement sur ce site de
            démonstration le chargement initial des images en arrière plan avec
            une preview pour améliorer l'expérience utilisateur. C'est l'un des
            nombreux composants de cette librairie qui permet d'accélérer
            grandement le chargement des pages. Bien sûr, le site est
            responsive, càd que son contenu s'adapte à la taille de l'écran. Les
            possibilités de développement sont extrêmement puissantes et
            nombreuses (site vitrine, site e-commerce, applications métiers,
            progressive web apps, ...).
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>
              A propos
            </SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
