export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{backgroundColor: '#1A1A1A'}}>
      <div className="max-w-2xl mx-auto px-3 py-6 w-full sm:px-4 sm:py-8 md:px-6 md:py-10 lg:px-8 lg:py-12">
        <h1 className="font-bold mb-6" style={{color: '#E8E8E8', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '-0.02em'}}>Nikhil Mishra</h1>
        
        {/* Desktop content */}
        <div className="hidden sm:block">
          <p className="mb-4" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
            I&apos;m a Site Reliability Engineer at <strong><a href="https://www.schbang.com" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Schbang</a></strong>, keeping production websites and platforms for 40+ enterprise brands fast, secure and online across 30+ cloud environments. 
            Before that, I was a DevOps Engineer at <strong><a href="https://behooked.ai" style={{color: '#E8E8E8', textDecoration: 'underline'}}>BeHooked</a></strong>, and I worked at <strong><a href="https://nikhilmishra.notion.site/SRE-INTERN-AT-DUKAAN-2d242bb787194466bfe3577b80735100?source=copy_link" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Dukaan</a></strong> as an SRE Intern during their cloud-to-bare-metal migration, 
            building monitoring solutions that improved system reliability.
          </p>
          
          <p className="mb-8" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
            My life&apos;s work is to make technology reliable, scalable, and cost-effective. 
            My favourite part of the job is taking a project from infra requirements to staging to production go-live, then keeping it running smoothly. 
            Along the way I&apos;ve closed security audit findings, patched dozens of live servers with zero lasting downtime, and migrated monoliths to Kubernetes microservices. 
            I&apos;ve built multiple DevOps projects following the roadmap, from Blue-Green deployments to Bastion host setups, 
            and I write about infrastructure automation and system optimization.
          </p>
        </div>

        {/* Mobile content - shorter and more concise */}
        <div className="block sm:hidden">
          <p className="mb-4" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
            SRE at <strong>Schbang</strong>. Previously DevOps at <strong><a href="https://behooked.ai" style={{color: '#E8E8E8', textDecoration: 'underline'}}>BeHooked</a></strong> and SRE Intern at <strong><a href="https://nikhilmishra.notion.site/SRE-INTERN-AT-DUKAAN-2d242bb787194466bfe3577b80735100?source=copy_link" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Dukaan</a></strong>.
          </p>
          
          <p className="mb-8" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
            I keep 40+ brands online and love the day prod goes live.
          </p>
        </div>

        <p className="mb-4" style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          You can read my <a href="https://nikhilmishra.xyz" style={{color: '#E8E8E8', textDecoration: 'underline'}}>writing</a> or <a href="https://github.com/kaalpanikh" style={{color: '#E8E8E8', textDecoration: 'underline'}}>code</a>, or <a href="https://links.nikhilmishra.xyz" style={{color: '#E8E8E8', textDecoration: 'underline'}}>follow me online</a>. 
          I also write about <a href="https://www.linkedin.com/in/nikhil-mishra-392503306" style={{color: '#E8E8E8', textDecoration: 'underline'}}>DevOps practices</a> and do <a href="https://github.com/kaalpanikh" style={{color: '#E8E8E8', textDecoration: 'underline'}}>open source</a>.
        </p>

        <p style={{color: '#E8E8E8', fontSize: '1.125rem', lineHeight: '1.7'}}>
          <a href="mailto:nm30472@gmail.com" style={{color: '#E8E8E8', textDecoration: 'underline'}}>Reach out if interested</a>.
        </p>
        </div>
    </div>
  )
}