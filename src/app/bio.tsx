'use client'

import { useState } from 'react'

export default function Bio() {
  const [mode, setMode] = useState<'default' | 'long'>('default')

  return (
    <section className="bio-section" aria-label="Biography">
      <div className="bio-toggle">
        <span>Bio</span>
        <div className="bio-toggle-options" aria-label="Bio length">
          <button
            type="button"
            aria-controls="bio-content"
            aria-pressed={mode === 'default'}
            onClick={() => setMode('default')}
          >
            Default
          </button>
          <button
            type="button"
            aria-controls="bio-content"
            aria-pressed={mode === 'long'}
            onClick={() => setMode('long')}
          >
            Long
          </button>
        </div>
      </div>
      <div id="bio-content">{mode === 'default' ? <DefaultBio /> : <LongBio />}</div>
    </section>
  )
}

function DefaultBio() {
  return (
    <>
      <p className="content-paragraph">
        I’m a site reliability engineer. I work at{' '}
        <a className="home-schbang-link" href="https://www.schbang.com" target="_blank" rel="noopener noreferrer">
          Schbang
        </a>
        , where I keep production websites and platforms for 40+ enterprise brands fast, secure and online.
        Previously, I was a DevOps engineer at{' '}
        <a className="home-behooked-link" href="https://behooked.ai" target="_blank" rel="noopener noreferrer">
          BeHooked
        </a>{' '}
        and an SRE intern at{' '}
        <a className="home-dukaan-link" href="https://mydukaan.io" target="_blank" rel="noopener noreferrer">
          Dukaan
        </a>
        .
      </p>
      <p className="content-paragraph">
        My favourite day at work is the day prod goes live. Off the servers, I make AI videos and rebuild old
        Nokia games for fun. You can find my code on{' '}
        <a href="https://github.com/kaalpanikh" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{' '}
        and my resume{' '}
        <a href="https://cv.nikhilmishra.xyz" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
    </>
  )
}

function LongBio() {
  return (
    <>
      <p className="content-paragraph">I like owning the boring, critical parts of a system.</p>
      <p className="content-paragraph">
        I’m based in Mumbai and studied computer engineering at the University of Mumbai, graduating in 2025.
        Most of what I know about infrastructure I learned by building it, breaking it, and writing about it.
      </p>
      <p className="content-paragraph">
        My first real taste of production was an SRE internship at{' '}
        <a className="home-dukaan-link" href="https://nikhilmishra.notion.site/SRE-INTERN-AT-DUKAAN-2d242bb787194466bfe3577b80735100" target="_blank" rel="noopener noreferrer">
          Dukaan
        </a>{' '}
        in 2023, during their move from the cloud to bare metal. I set up Grafana on top of the ELK stack so the
        team could see what the APIs were doing, and I learned what “it works on my machine” costs at scale.
      </p>
      <p className="content-paragraph">
        After that I worked through 20+ projects from the roadmap.sh DevOps track and wrote about each one on{' '}
        <a href="https://nikhilmishra.xyz" target="_blank" rel="noopener noreferrer">
          my blog
        </a>
        . DevOps projects are expensive to keep running, so writing them up was the cheapest way to keep them
        alive. That blog is what landed me my next job.
      </p>
      <p className="content-paragraph">
        At{' '}
        <a className="home-behooked-link" href="https://behooked.ai" target="_blank" rel="noopener noreferrer">
          BeHooked
        </a>{' '}
        I was the DevOps engineer from July 2024 to March 2026. I built monitoring that tracked errors across 16
        endpoints, set up CI/CD with Docker and GitHub Actions, ran a bot backend on Kubernetes, and cut our
        monthly AWS bill from $120+ to under $10.
      </p>
      <p className="content-paragraph">
        Since March 2026 I’ve been an SRE at{' '}
        <a className="home-schbang-link" href="https://www.schbang.com" target="_blank" rel="noopener noreferrer">
          Schbang
        </a>
        , running 30+ cloud environments for 40+ brands across AWS, Azure, Cloudflare, DigitalOcean and E2E. I
        take projects from infra requirements to staging to production go-live, close security audit findings,
        patch servers without downtime, and build tools so people don’t need to ping me for everything.
      </p>
      <p className="content-paragraph">
        I also work with AI every day. I use Claude as an ops partner, and I make AI short films, motion graphics
        and a reel series on getting real work done with Claude. When I want to switch off, I rebuild the Nokia
        games I grew up with.
      </p>
      <p className="content-paragraph">
        If you want to talk about infra, reliability or AI video, email me at{' '}
        <a href="mailto:nm30472@gmail.com">nm30472@gmail.com</a>.
      </p>
    </>
  )
}
