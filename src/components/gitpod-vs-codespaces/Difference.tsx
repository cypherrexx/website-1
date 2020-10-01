import React from 'react'
import styled from '@emotion/styled'

const getBrowser = () => {
  const browsers = ['Opera', 'Chrome', 'Firefox', 'IE']
  let browser
  const userAgent = window.navigator.userAgent

  browsers.forEach((b) => {
    if (userAgent.indexOf(b) !== -1) {
      browser = b
    }
  })

  return browser
}

const StyledDifference = styled.section`
  margin: 14rem 0 12rem;
  text-align: center;

  p {
    font-size: 110%;
  }

  h2 + p {
    margin: 3rem 0 2rem;
  }

  .btn {
    margin-bottom: 5rem;
  }
`

const Difference = () => (
  <StyledDifference className="pattern-bg">
    <div className="row">
      <h2>
        <strong>Want to See the Difference for Yourself?</strong>
      </h2>
      <p>Add a Gitpod button to your repository.</p>
      <a
        href={
          getBrowser() === 'Firefox'
            ? 'https://addons.mozilla.org/en-GB/firefox/addon/gitpod/'
            : 'https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki'
        }
        target="_blank"
        className="btn btn--big btn--cta"
      >
        Install Browser Extension
      </a>
      <p>
        Or prefix any GitLab, GitHub or Bitbucket URL with <strong>gitpod.io/#</strong>
      </p>
    </div>
  </StyledDifference>
)

export default Difference
