import Link from 'next/link'
import Bio from './bio'
import Painting from './painting'
import { notes } from '../content/notes'
import { posts, projects } from '../content/site'

export default function Home() {
  return (
    <main className="site-shell">
      <article className="content-frame">
        <div className="home-layout">
          <div className="home-copy">
            <h1 className="site-title">
              <a
                href="https://github.com/kaalpanikh"
                target="_blank"
                rel="noopener noreferrer"
                className="site-title-link"
              >
                <p className="content-paragraph">
                  <span className="site-title-at">@</span>kaalpanikh
                </p>
              </a>
            </h1>

            <Bio />

            <div className="writing-index">
              <section aria-labelledby="notes-heading">
                <h2 id="notes-heading">Notes</h2>
                <ul className="notes-list">
                  {notes.map((note) => (
                    <li key={note.slug}>
                      <Link href={`/${note.slug}/`}>{note.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="blogs-heading">
                <h2 id="blogs-heading">Blogs</h2>
                <div className="blogs-list">
                  {posts.map((post) => (
                    <a key={post.url} className="blog-row" href={post.url} target="_blank" rel="noopener noreferrer">
                      <span>{post.title}</span>
                      <time>{post.date}</time>
                    </a>
                  ))}
                </div>
                <p className="all-posts">
                  <a href="https://nikhilmishra.xyz" target="_blank" rel="noopener noreferrer">
                    All posts →
                  </a>
                </p>
              </section>

              <section aria-labelledby="projects-heading">
                <h2 id="projects-heading">Projects</h2>
                <div className="blogs-list">
                  {projects.map((project) => (
                    <a
                      key={project.url}
                      className="blog-row"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{project.title}</span>
                      <span className="row-meta">{project.meta}</span>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <aside className="home-visual">
            <Painting />
          </aside>
        </div>
      </article>
    </main>
  )
}
