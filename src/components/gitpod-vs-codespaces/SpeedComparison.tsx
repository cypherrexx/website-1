import React from 'react'

import styled from '@emotion/styled'
import { colors, sizes } from '../../styles/variables'

const StyledSpeedComparison = styled.div`
  width: 100%;

  h4 {
    margin-bottom: 1rem;

    @media (max-width: ${sizes.breakpoints.sm}) {
      text-align: left;
    }
  }

  p {
    font-size: 90%;
    color: ${colors.textLight};
  }

  .bar {
    position: relative;
    display: flex;
    height: 7.5rem;
    font-weight: 600;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-container {
      margin-bottom: 8rem;
    }

    &--gitpod {
      &-1 {
        background: ${colors.link};
        flex: 0 0 7%;
      }

      &-2 {
        flex: 0 0 15%;
        min-width: 8rem;
      }
    }

    &--codespaces {
      color: ${colors.white};

      & > * {
        position: relative;
      }

      &-1 {
        flex: 0 0 20%;
        min-width: 10rem;
        background: ${colors.orange};

        @media (max-width: 360px) {
          min-width: 7rem;
        }
      }

      &-2 {
        flex: 0 0 50%;
        background: ${colors.orangeLight};
      }

      &-3 {
        color: ${colors.textDark};
        flex: 0 0 18%;
        min-width: 10rem;

        @media (max-width: 360px) {
          min-width: 8rem;
        }
      }
    }

    &__state {
      position: absolute;
      left: 0;
      bottom: -3rem;
      color: ${colors.textLight};
      font-size: 95%;
      font-weight: 400;
    }
  }
`

const SpeedComparison = () => (
  <StyledSpeedComparison>
    <div className="item">
      <h4>Gitpod</h4>
      <div className="bar-container">
        <div className="bar bar--gitpod">
          <div className="bar--gitpod-1"></div>
          <div className="bar--gitpod-2">&lt;1 min</div>
          <div className="bar__state">Loading</div>
        </div>
      </div>
    </div>
    <div className="item">
      <h4>Codespaces</h4>
      <div className="bar-container">
        <div className="bar bar--codespaces">
          <div className="bar--codespaces-1">
            &gt;5 min
            <div className="bar__state">Loading</div>
          </div>
          <div className="bar--codespaces-2">
            &gt;10 min
            <div className="bar__state">Project Build</div>
          </div>
          <div className="bar--codespaces-3">&gt; 15 min</div>
        </div>
      </div>
    </div>
    <p>Compared start up time until ready-to-code of https://github.com/microsoft/vscode. Last verified Sept 25, 2020.</p>
  </StyledSpeedComparison>
)

export default SpeedComparison
