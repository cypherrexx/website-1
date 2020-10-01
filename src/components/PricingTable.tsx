import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../styles/variables'

const StyledPricingTable = styled.section`
  padding-bottom: 0;
  margin-bottom: 5rem;

  .comparison {
    h2 {
      font-size: 3rem;
      margin-bottom: 0;
      font-weight: 600;
    }

    td,
    th {
      border: none;
    }

    .header {
      th {
        background: ${colors.offWhite};
      }
    }

    th {
      background: none;
    }

    tr {
      background: ${colors.offWhite};

      th {
        background: ${colors.white};
        font-weight: 600;
      }
    }
  }

  th {
    span {
      display: block;
    }

    img {
      height: 2rem;
      transform: translateY(5px);
      margin-right: 1rem;

      @media (max-width: ${sizes.breakpoints.md}) {
        height: 1.7rem;
        transform: translateY(3px);
        margin-right: 0.5rem;
      }

      @media (max-width: ${sizes.breakpoints.md}) {
        height: 1.5rem;
      }
    }
  }

  .header {
    th {
      text-align: center;
      font-weight: 600;
      font-size: 2rem;
      padding: 3rem;
      width: 25%;

      @media (max-width: ${sizes.breakpoints.md}) {
        padding: 2rem;
      }

      @media (max-width: ${sizes.breakpoints.md}) {
        padding: 1.5rem;
      }

      span {
        font-size: 1.6rem;
        font-weight: 400;

        @media (max-width: ${sizes.breakpoints.md}) {
          font-size: 1.4rem;
        }

        @media (max-width: ${sizes.breakpoints.md}) {
          font-size: 1.2rem;
        }

        span {
          display: inline;
          color: ${colors.link};
          font-weight: 600;
        }
      }
    }
  }

  .buttons {
    th,
    td {
      background: none;
      border: none;
    }

    .btn {
      margin-top: 2rem;
    }
  }

  .description {
    display: inline-block;
    transform: translateY(-0.1rem);

    &__text {
      position: absolute;
      top: 0;
      left: 3rem;
      width: 25rem;
      min-width: 15rem;

      @media (max-width: ${sizes.breakpoints.md}) {
        width: 18rem;
      }
    }
  }

  .disclaimer {
    padding: 3rem 0;
    background: ${colors.white};
    font-size: 95%;
    color: ${colors.textLight};
  }
`

interface PricingTableProps {
  title: string | JSX.Element
  paragraph?: JSX.Element | string
  id?: string
  rows?: number
  styles?: React.CSSProperties
}

const PricingTable: React.SFC<PricingTableProps> = ({ title, paragraph, children, id, rows, styles }) => (
  <div className="row" id={id}>
    <StyledPricingTable>
      <h2 style={!paragraph ? { paddingBottom: '5rem' } : {}}>{title}</h2>
      <p>{paragraph}</p>
      <div className={`table-container ${rows == 3 ? 'rows-3' : ''}`}>
        <table style={{ ...styles }}>{children}</table>
      </div>
    </StyledPricingTable>
  </div>
)

export default PricingTable
