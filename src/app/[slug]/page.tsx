import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { notes, getNote } from '../../content/notes'

export const dynamicParams = false

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const note = getNote(slug)
  if (!note) return {}
  return {
    title: note.title,
    description: note.description,
    openGraph: { title: note.title, description: note.description, url: `https://simple.nikhilmishra.xyz/${note.slug}/` },
    twitter: { title: note.title, description: note.description },
  }
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = getNote(slug)
  if (!note) notFound()

  return (
    <main className="site-shell">
      <article className="content-frame">
        <h1 className="content-title">{note.title}</h1>
        <div className="article-meta">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="article-meta-avatar" src="/avatar.jpg" alt="" width={20} height={20} />
          <p className="article-meta-details">
            <span>{note.date}</span>
            <span aria-hidden="true">·</span>
            <Link className="article-meta-link" href="/">
              Nikhil Mishra
            </Link>
          </p>
        </div>
        {note.body.map((block, i) => {
          if ('h2' in block)
            return (
              <h2 key={i} className="content-heading">
                {block.h2}
              </h2>
            )
          if ('ul' in block)
            return (
              <ul key={i} className="content-list">
                {block.ul.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          return (
            <p key={i} className="content-paragraph">
              {block.p}
            </p>
          )
        })}
        <Link className="tabs-back-link" href="/">
          ← Home
        </Link>
      </article>
    </main>
  )
}
