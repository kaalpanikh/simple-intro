export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#1A1A1A'}}>
      <div className="max-w-2xl mx-auto px-4 py-8 w-full sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12">
        <h1 className="font-bold mb-6" style={{color: '#E8E8E8', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '-0.02em'}}>Nikhil Mishra</h1>
        
        <p className="mb-4" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          I'm a DevOps Engineer. I work at <strong>Hooked</strong> architecting cloud infrastructure and optimizing CI/CD pipelines. 
          Previously, I worked at <strong><a href="https://nikhilmishra.notion.site/SRE-INTERN-AT-DUKAAN-2d242bb787194466bfe3577b80735100?source=copy_link" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Dukaan</a></strong> as an SRE Intern during their cloud-to-bare-metal migration, 
          building monitoring solutions that improved system reliability.
        </p>
        
        <p className="mb-8" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          My life's work is to make technology reliable, scalable, and cost-effective. 
          I orchestrated migrations from monolithic apps to Kubernetes microservices, significantly reducing latency and costs. 
          I've built multiple DevOps projects following the roadmap, from Blue-Green deployments to Bastion host setups, 
          and I write about infrastructure automation and system optimization.
        </p>

        <p className="mb-4" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          You can read my <a href="https://nikhilmishra.xyz" style={{color: '#E8E8E8', textDecoration: 'underline'}}>writing</a> or <a href="https://github.com/kaalpanikh" style={{color: '#E8E8E8', textDecoration: 'underline'}}>code</a>, or <a href="https://links.nikhilmishra.xyz" style={{color: '#E8E8E8', textDecoration: 'underline'}}>follow me online</a>. 
          I also write about <a href="https://linkedin.com/in/nikhil-mishra" style={{color: '#E8E8E8', textDecoration: 'underline'}}>DevOps practices</a>, <a href="https://iam.nikhilmishra.xyz" style={{color: '#E8E8E8', textDecoration: 'underline'}}>share resources</a>, and do <a href="https://github.com/kaalpanikh" style={{color: '#E8E8E8', textDecoration: 'underline'}}>open source</a>.
        </p>

        <p style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          <a href="mailto:nm30472@gmail.com" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Reach out if interested</a>.
        </p>
        </div>
    </div>
  )
}