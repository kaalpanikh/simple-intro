export type Post = { title: string; url: string; date: string }
export type Project = { title: string; url: string; meta: string }

// Hand-picked posts from nikhilmishra.xyz. Everything else is linked from "All posts".
export const posts: Post[] = [
  { title: 'Code, vibes and nostalgia', url: 'https://nikhilmishra.xyz/vibecode', date: 'May 2025' },
  {
    title: 'Automating GitHub Pages deployments with GitHub Actions',
    url: 'https://nikhilmishra.xyz/github-actions-deployment-workflow',
    date: 'March 2025',
  },
  {
    title: 'Building a cloud-native DevOps pipeline from first principles',
    url: 'https://nikhilmishra.xyz/gitops-majorproject',
    date: 'March 2025',
  },
  {
    title: 'Server monitoring from first principles',
    url: 'https://nikhilmishra.xyz/server-stats',
    date: 'March 2025',
  },
  {
    title: 'From logs to insights: nginx log analysis',
    url: 'https://nikhilmishra.xyz/nginx-log-analyzer',
    date: 'March 2025',
  },
  {
    title: 'Securing the cloud: SSH access on AWS',
    url: 'https://nikhilmishra.xyz/securing-the-cloud-mastering-ssh-access-on-aws',
    date: 'March 2025',
  },
  {
    title: 'A production-ready n8n platform on Azure Kubernetes Service',
    url: 'https://nikhilmishra.xyz/series-introduction-building-a-production-ready-n8n-workflow-automation-platform-on-azure-kubernetes-service',
    date: 'March 2025',
  },
  {
    title: 'I escalated my app to the cloud',
    url: 'https://nikhilmishra.xyz/i-escalated-my-app-to-the-cloud',
    date: 'July 2024',
  },
]

export const projects: Project[] = [
  { title: 'Aqua Ring', url: 'https://aquaring.nikhilmishra.xyz', meta: 'Game' },
  { title: 'Nokia Bounce, rebuilt for the web', url: 'https://bounce.nikhilmishra.xyz', meta: 'Game' },
  { title: 'Blue-green deployment', url: 'https://github.com/kaalpanikh/blue-green-deployment', meta: 'nginx · Docker' },
  { title: 'Bastion host on AWS', url: 'https://github.com/kaalpanikh/bastion-host', meta: 'AWS · Terraform' },
  { title: 'Automated MongoDB backups', url: 'https://github.com/kaalpanikh/automated-backups', meta: 'AWS S3 · cron' },
  { title: 'Multi-container service', url: 'https://github.com/kaalpanikh/multi-container-service', meta: 'Docker · GitHub Actions' },
]
