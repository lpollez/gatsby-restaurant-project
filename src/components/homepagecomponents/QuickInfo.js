import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import { Link } from "gatsby"
import styled from "styled-components"
import { styles } from "../../utils"

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="laissez-nous vous dire" title="notre mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ducimus facilis consequuntur, cumque placeat, tempora iusto nostrum
            reprehenderit eum quis quibusdam sequi consequatur, nulla cupiditate
            perferendis ratione nemo. Dolore repellendus cupiditate tenetur sunt
            eaque commodi tempora molestiae similique quo repudiandae, sapiente
            sequi alias quos, exercitationem quis id, quas omnis adipisci?
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
