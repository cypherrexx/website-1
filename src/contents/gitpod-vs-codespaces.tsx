import React from 'react'
import { FeatureCardProps } from '../components/FeatureCard'
import GitPlatforms from '../resources/stay-in-flow.svg'
import SpeedComparison from '../components/gitpod-vs-codespaces/SpeedComparison'
import PriceComparison from '../components/gitpod-vs-codespaces/PriceComparison'
import { colors } from '../styles/variables'

export const features: FeatureCardProps[] = [
  {
    id: 'fast',
    title: <strong>Loads 15x Faster</strong>,
    text: (
      <>
        <p>
          Gitpod removes long init and build times by continuously pre-building workspaces for your project, allowing you to start coding or
          debugging immediately, from any context, at any time.
        </p>
        <p>
          Simply add your build command into a .gitpod.yml file and let Gitpod do the heavy-lifting. Once you’ve experienced the freedom of
          ephemeral workspaces, you’ll never want to go back to long-lived, manually-maintained environments.
        </p>
        <p>
          <strong>Why wait for long builds when you can start coding immediately?</strong>
        </p>
      </>
    ),
    Figure: SpeedComparison
  },
  {
    id: 'cost-efficient',
    title: <strong>More Power for Less Money</strong>,
    text: (
      <>
        <p>
          By leveraging cloud technologies like containers and Kubernetes, Gitpod achieves best-in-class resource-efficiency with scalable
          workspaces running on shared high-powered cloud servers (16 vCPU / 60GB RAM as of September 2020).
        </p>
        <p>
          Gitpod is not only more resource-efficient but it also runs on 100% carbon-neutral cloud servers (GCP).<sup>1</sup>
        </p>
        <p style={{marginTop: '6rem', fontSize: '90%', color: colors.textLight}}>Last verified Sept 25, 2020. 1 https://cloud.google.com/sustainability</p>
      </>
    ),
    Figure: PriceComparison
  },
  {
    id: 'open-source',
    title: <strong>Open-Source</strong>,
    text: (
      <>
        <p>
          <strong>Gitpod is open-source and thereby guarantees full transparency and flexibility</strong>
        </p>
        <ul className="text-list">
          <li>
            <div>
              <strong>Do code reviews within Gitpod</strong>
              <br />
              No need to switch contexts anymore.
            </div>
          </li>
          <li>
            <div>
              <strong>Mentor or be mentored</strong>
              <br />
              Work together in one workspace in real-time.
            </div>
          </li>
          <li>
            <div>
              <strong>Take snapshots</strong>
              <br />
              Share a reproducible workspace with your team.
            </div>
          </li>
        </ul>
      </>
    ),
    src: GitPlatforms
  }
]
