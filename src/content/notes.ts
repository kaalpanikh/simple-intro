export type Block = { p: string } | { h2: string } | { ul: string[] }

export type Note = {
  slug: string
  title: string
  date: string
  description: string
  body: Block[]
}

export const notes: Note[] = [
  {
    slug: 'prod',
    title: 'Taking a project to prod',
    date: 'November 2026',
    description: 'How I take a project from infra requirements to production go-live.',
    body: [
      { p: 'My favourite part of the job is taking a project the whole way. Not just the deploy, but everything around it.' },
      { h2: 'Requirements first' },
      { p: 'Every project starts with a short write-up of the infrastructure it needs: where it runs, how big it is, what it costs each month, and what happens when traffic spikes.' },
      { p: 'I only add a web application firewall, a load balancer, auto-scaling or a managed database when the project actually needs it. Every extra piece is something to pay for, patch and monitor.' },
      { h2: 'Agree, then build' },
      { p: 'The client and I land on what both sides agree to before anything gets built. It saves arguments later about why the bill looks the way it does.' },
      { h2: 'Staging' },
      { p: 'Staging is where the real work happens. The goal is for it to look like prod in every way that matters: same stack, same web server config, same way of deploying.' },
      { p: 'Getting staging live is a small win. It means the team can test against something real.' },
      { h2: 'Prod' },
      { p: 'Then comes the best day: prod goes live. DNS flips, certificates are in place, health checks go green, and real users start showing up.' },
      { h2: 'Running smooth' },
      { p: 'After launch, the job is keeping it boring. Uptime checks, certificate renewals, patches, backups and a monthly look at the bill. If nobody talks about the site, I did my job.' },
    ],
  },
  {
    slug: 'patching',
    title: 'Patching without downtime',
    date: 'November 2026',
    description: 'How I patch live servers across a portfolio without taking anything down.',
    body: [
      { p: 'In October 2026, critical PHP and Node.js vulnerabilities were disclosed. I went through our whole client portfolio and patched dozens of live servers. Nothing stayed down.' },
      { p: 'The trick is not being clever. It’s following the same boring steps every time.' },
      { h2: 'The routine' },
      {
        ul: [
          'Find out which servers are actually affected before touching anything.',
          'Take a backup you have tested you can restore.',
          'Do a dry run so you know exactly what will change.',
          'Apply the patch, then run health checks straight away.',
          'If a health check fails, roll back automatically and look at it calmly.',
        ],
      },
      { p: 'Doing this by hand across dozens of servers is where mistakes happen, so the steps live in scripts, not in my head.' },
      { h2: 'Audits' },
      { p: 'The same habit helped when closing every infrastructure finding from a third-party VAPT audit: TLS settings, security headers, rate limiting, locking down admin panels and tightening network rules. Each fix went through the same backup, change, check loop.' },
    ],
  },
  {
    slug: 'boring',
    title: 'Keep prod boring',
    date: 'November 2026',
    description: 'Why the best production systems are the ones nobody talks about.',
    body: [
      { p: 'A good production system is boring. Nobody mentions it in meetings, nobody gets paged, and the bill looks the same as last month.' },
      { p: 'Boring takes work. A few things I keep coming back to:' },
      {
        ul: [
          'Use the simplest setup that will survive the traffic you actually expect.',
          'Renew certificates before anyone notices they were expiring.',
          'Prefer SSM over opening SSH to the internet.',
          'Give people and vendors the least access they need, and nothing extra.',
          'Shut down what isn’t used. Old cloud accounts are a cost and a risk.',
          'Leave every server better documented than you found it.',
        ],
      },
      { p: 'Excitement in prod is almost always a sign something was skipped earlier.' },
    ],
  },
  {
    slug: 'unnecessary',
    title: 'Making myself unnecessary',
    date: 'November 2026',
    description: 'Building tools so people don’t need to ping me for everything.',
    body: [
      { p: 'If people have to ask me every time they need to know something about our infrastructure, I’m a bottleneck. So I try to build my way out of it.' },
      { h2: 'Self-serve answers' },
      { p: 'I built a self-serve portal where account and project managers can look up bills, instance sizes and IAM users across many AWS accounts without asking me.' },
      { h2: 'Guardrails' },
      { p: 'I also built an uptime monitor that notices downtime before the client does, and a single sign-on gateway that every internal tool sits behind. Right now I’m exploring an in-house VAPT scanner built on open-source tools, so we find our own holes before the auditors do.' },
      { p: 'Every one of these started as a question I got asked too many times.' },
    ],
  },
  {
    slug: 'walls',
    title: 'Working inside other people’s walls',
    date: 'November 2026',
    description: 'Shipping inside client infrastructure and security processes.',
    body: [
      { p: 'A lot of my work happens in infrastructure that isn’t ours: a client’s cloud account, their security team, their rules.' },
      { p: 'Some examples: deploying through a client’s privileged-access management system on Azure, agreeing web application firewall rules with a security team in the middle of a production migration, and giving third-party vendors scoped, least-privilege access.' },
      { p: 'The lesson is to treat their process as part of the system, not an obstacle. Ask early what access you’ll get, plan around it, and write down every change you make. You still ship, just more carefully.' },
    ],
  },
  {
    slug: 'ai',
    title: 'Working with AI as an SRE',
    date: 'November 2026',
    description: 'How I use AI in day-to-day operations.',
    body: [
      { p: 'I use Claude as an ops partner every day. Not to replace judgment, but to move faster on the parts that are mostly reading and writing.' },
      {
        ul: [
          'Auditing servers over SSM and summarising what it finds.',
          'Writing runbooks and handover docs I’ll be glad to have at 3am.',
          'Planning cloud account clean-ups and working out who spent what.',
          'Drafting hosting proposals for new builds.',
        ],
      },
      { p: 'I still review every command before it runs. AI is great at the first draft and at not getting tired. The final call stays with me.' },
      { p: 'Outside infra, I make AI videos: short films, motion graphics, and a reel series on getting real work done with Claude.' },
    ],
  },
  {
    slug: 'games',
    title: 'Why I rebuild old games',
    date: 'November 2026',
    description: 'Rebuilding the games I grew up with, for the web.',
    body: [
      { p: 'When I want to switch off, I rebuild the games I grew up with.' },
      {
        ul: [
          'Bounce, the Nokia classic, rebuilt in 3D with Three.js and Cannon.js physics.',
          'Cricket, the batting game from old Nokia phones.',
          'Aqua Ring, a remake of the handheld water ring-toss toy, with matter-js physics and a leaderboard.',
        ],
      },
      { p: 'They’re small, they’re fun, and they make me write code with no one waiting on it. You can play them on my GitHub.' },
    ],
  },
  {
    slug: 'learning-in-public',
    title: 'Learning in public',
    date: 'November 2026',
    description: 'How writing about my projects got me a job.',
    body: [
      { p: 'DevOps projects are expensive to keep live all the time. So instead of paying to keep them running, I wrote about them.' },
      { p: 'I worked through 20+ projects from the roadmap.sh DevOps track, from blue-green deployments to bastion hosts to automated backups, and wrote up each one on my blog.' },
      { p: 'That blog landed me a job. Writing forced me to understand what I built, and it gave people something to read before they ever spoke to me.' },
    ],
  },
]

export function getNote(slug: string) {
  return notes.find((n) => n.slug === slug)
}
