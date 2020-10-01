import React from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../../styles/variables'

const StyledPriceComparison = styled.div`
  .items {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 8rem;
  }

  .item {
    font-size: 110%;
    font-weight: 600;
    color: ${colors.textDark};
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14rem;
    width: 14rem;
    margin-bottom: 3rem;
    font-weight: 600;
    font-size: ${sizes.font.h1};
    border: 8px solid;
    border-radius: 50%;

    &--1 {
      border-color: ${colors.link};
    }

    &--2 {
      border-color: ${colors.orange};
    }
  }

  p {
    color: ${colors.textLight};
    font-size: 90%;
    text-align: center;
  }
`

const PriceComparison = () => (
  <StyledPriceComparison>
    <h3>Price for 100 Active Hours</h3>
    <div className="items">
      <div className="item">
        <div className="price price--1">$9</div>
        Gitpod
      </div>
      <div className="item">
        <div className="price price--2">$17</div>
        Codespaces
      </div>
    </div>
    <p>Sources: Gitpod Pricing, Codespaces Pricing.</p>
  </StyledPriceComparison>
)

export default PriceComparison
