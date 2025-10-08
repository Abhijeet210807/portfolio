import { Code } from "lucide-react";
const Card = ({ title, description, delayClass }) => (
  <div
    className={`p-6 gradient-border card-hover rounded-2xl bg-card shadow-lg opacity-0 ${delayClass} transform`}
  >
    <div className="flex items-start gap-4">
      <div className="p-4 rounded-full bg-primary/10">
        <Code className="text-primary" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground ">{description}</p>
      </div>
    </div>
  </div>
);


const CardGrid = () => (
  <div className="grid justify-end grid-cols-1 gap-4">
    <Card
      title="Frontend Development"
      description="Building responsive and interactive user interfaces."
      delayClass="animate-fade-up-delay-1"
    />
    <Card
      title="Backend Development"
      description="Designing scalable and secure server-side applications."
      delayClass="animate-fade-up-delay-2"
    />
    <Card
      title="UI/UX Design"
      description="Creating visually appealing and user-friendly designs."
      delayClass="animate-fade-up-delay-3"
    />
    <Card
      title="Tools & Technologies"
      description="Leveraging modern frameworks, libraries, and developer tools for efficient workflows."
      delayClass="animate-fade-up-delay-4"
    />
  </div>
);


// ✅ Main About Section
export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          <span className="text-primary">About </span>Me
        </h2>

{/* Grid layout */}
<div className="grid items-start grid-cols-1 gap-12 md:grid-cols-12">
  {/* Left: Text content */}
  <div className="space-y-6 md:col-span-6">
    <h3 className="text-2xl font-semibold opacity-0 text-foreground animate-fade-in-delay-1">
      Passionate Web Developer & Tech Explorer
    </h3>

    <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-2">
    Hi I’m <span className="font-semibold text-foreground">Abhijeet Mundavare</span>, 
a passionate Front-End Developer who enjoys building clean, responsive, and user-friendly web applications. 
I specialize in <span className="font-medium">React.js, JavaScript, and modern web technologies</span>. 
My goal is to transform creative ideas into impactful digital experiences.

    </p>

    <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-3">
    I specialize in developing modern full-stack applications using <span className="font-medium">React, Node.js, and SQL</span>. I take pride in writing clean, efficient, and maintainable code. What drives me most is the excitement of learning new technologies, exploring innovative tools, and refining my skills with every project    </p>

    <p className="leading-relaxed text-justify opacity-0 text-muted-foreground animate-fade-in-delay-4">
    Beyond coding, I’m passionate about continuous learning, creative thinking, and teamwork. Whether collaborating with others or working independently, I always aim to bring innovation, precision, and a strong problem-solving mindset to everything I do
    </p>
    <div className="flex flex-col sm:flex-row gap-7 pt-4 justify-center animate-fade-in-delay-5">
      <a href="#contact" className="cosmic-button">
        {" "}
        Get In Touch 
      </a>

      <a href="/" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300
      animate-fade-in-delay-5">
        {" "}
        Download CV 
      </a>


    </div>
  </div>
  


  {/* Right: Card Grid */}
  <div className="md:col-span-6">
    <CardGrid />
          </div>
        </div>
      </div>
    </section>
  );
};



