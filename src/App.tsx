import { useState } from 'react'
import { Code, DeviceMobile, Globe, PaperPlaneTilt, Envelope } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { CopenhagenSkyline } from '@/components/CopenhagenSkyline'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [emailError, setEmailError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setFormData({ ...formData, email })
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields')
      return
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    
    window.location.href = `mailto:info@aibomi.eu?subject=${subject}&body=${body}`
    
    toast.success('Opening your email client...')
    
    setFormData({ name: '', email: '', message: '' })
  }

  const isFormValid = formData.name && formData.email && formData.message && !emailError

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.65 0.22 40 / 0.25) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, oklch(0.45 0.18 265 / 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 40% 20%, oklch(0.75 0.15 180 / 0.2) 0%, transparent 50%)`
          }} />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[300px] opacity-20">
          <CopenhagenSkyline className="w-full h-full text-primary" />
        </div>

        <header className="relative z-10 border-b border-border/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight text-primary">Aibomi ApS</h1>
              <a 
                href="mailto:info@aibomi.eu"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                <Envelope size={20} />
                <span className="hidden sm:inline">info@aibomi.eu</span>
              </a>
            </div>
          </div>
        </header>

        <section className="relative z-10 py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-[56px] font-bold tracking-tight leading-[1.1] text-foreground">
              AI-Powered Apps for the Modern Web
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We specialize in creating intelligent web and mobile applications that solve real problems. 
              Expert AI coding meets thoughtful design.
            </p>
          </div>
        </section>
      </div>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              What We Do
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we build applications that users love.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 bg-card/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center">
                <Globe size={28} weight="duotone" className="text-primary" />
              </div>
              <h4 className="text-2xl font-medium text-foreground">Web Applications</h4>
              <p className="text-muted-foreground leading-relaxed">
                Modern, responsive web apps built with cutting-edge technologies. 
                Fast, secure, and designed for scale.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-secondary/30 bg-card/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <DeviceMobile size={28} weight="duotone" className="text-secondary" />
              </div>
              <h4 className="text-2xl font-medium text-foreground">Mobile Apps</h4>
              <p className="text-muted-foreground leading-relaxed">
                Native and cross-platform mobile solutions that deliver exceptional 
                user experiences on any device.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-accent/30 bg-card/80 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center">
                <Code size={28} weight="duotone" className="text-accent" />
              </div>
              <h4 className="text-2xl font-medium text-foreground">AI Coding</h4>
              <p className="text-muted-foreground leading-relaxed">
                Leverage artificial intelligence to build smarter applications. 
                Our AI specialization sets us apart.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-6xl mx-auto" />

      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-secondary/15 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[200px] opacity-10 rotate-180">
          <CopenhagenSkyline className="w-full h-full text-accent" />
        </div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Get in Touch
            </h3>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>

          <Card className="p-8 md:p-10 border-border/50 bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`h-12 ${emailError ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                  required
                />
                {emailError && (
                  <p className="text-sm text-destructive">{emailError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[140px] resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-base transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperPlaneTilt size={20} className="mr-2" weight="fill" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground">
                Or email us directly at{' '}
                <a 
                  href="mailto:info@aibomi.eu" 
                  className="text-accent hover:underline font-medium"
                >
                  info@aibomi.eu
                </a>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="relative border-t border-border/50 py-12 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[180px] opacity-[0.07]">
          <CopenhagenSkyline className="w-full h-full text-foreground" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center space-y-4 relative z-10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aibomi ApS. Creating intelligent applications for end users.
          </p>
          <p className="text-xs text-muted-foreground">
            Specialists in AI coding, web applications, and mobile development.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App