import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import { RecentPosts } from "@/components/RecentPosts";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8 max-w-3xl mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-balance">
          Hey, I&apos;m{" "}
          <span className="text-foreground/80">Alé Pouroullis</span> 👋
        </h1>
        <div className="flex flex-col gap-4 text-lg text-foreground/80 text-balance leading-relaxed">
          <p>
            I&apos;m a software engineer who thrives on building sophisticated
            systems from the ground up. Born and raised in South Africa, I
            recently moved to the UK to pursue new challenges and opportunities.
          </p>
          <p>
            My journey isn&apos;t your typical tech story. From composing
            electronic music to playing electric guitar, I&apos;ve always
            balanced the analytical with the artistic. This dual perspective
            shapes how I approach software engineering—with both technical
            precision and creative innovation.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me pushing my limits in
            various ways —from training for marathon majors to practicing
            handstands and exploring the vibrant arts scene. I bring this same
            energy and dedication to everything I do, whether it&apos;s building
            software or mastering a new skill.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/alexandros-pouroullis-a105051b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href="https://github.com/AlePouroullis"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <FaGithub />
              GitHub
            </a>
            <a href="mailto:alexpouroullis@gmail.com" className="link-button">
              <FaEnvelope />
              Email
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              <FaFilePdf />
              CV
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Professional Impact</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            At my core, I&apos;m a builder who loves tackling complex
            challenges. I&apos;ve architected and delivered sophisticated
            full-stack systems that made real-world impact:
          </p>
          <ul>
            <li>
              Built a mobility platform from scratch that revolutionized
              corporate transport and taxi payments in South Africa, reaching
              $1.2M in annual revenue
            </li>
            <li>
              Developed an innovative payment system that caught Visa&apos;s
              attention, leading to a partnership and funding
            </li>
            <li>
              Mastered iOS development in just 5 months to build and publish a
              social app on the App Store
            </li>
            <li>
              Led technical teams in fast-paced startup environments,
              implementing comprehensive cloud-native solutions on AWS
            </li>
          </ul>
        </div>
      </section>

      {/* Current Project */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Current Exploration</h2>
        <div className="card">
          <h3 className="text-xl font-medium mb-3">EdgeLogger</h3>
          <p className="text-foreground/80 mb-4">
            A high-performance log ingestion server built with Rust, exploring
            modern systems programming through Kubernetes orchestration and
            cloud-native observability patterns.
          </p>
          <a
            href="https://github.com/AlePouroullis/EdgeLogger"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <FaGithub />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Recent Posts Section */}
      <RecentPosts />

      {/* Interests Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">Beyond Code</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Life is about balance, and I dedicate myself to pursuing excellence
            across different domains:
          </p>
          <ul>
            <li>
              <strong>Movement as Art:</strong> I approach movement as a
              holistic practice, inspired by methodologies like Ido
              Portal&apos;s. From handstand practice to tumbling and gymnastics,
              I explore the intersection of strength, mobility, and creative
              expression through movement.
            </li>
            <li>
              <strong>Athletic Pursuits:</strong> An avid runner with the Cape
              Town marathon under my belt, I&apos;m now training for the world
              majors. This endurance work complements my broader movement
              practice, which includes calisthenics and weightlifting—each
              discipline informing and enhancing the others.
            </li>
            <li>
              <strong>Musical Background:</strong> My creative side comes alive
              through music production and electric guitar. I&apos;m always
              eager to connect with fellow musicians and explore live
              performance opportunities in the UK.
            </li>
          </ul>
          <p>
            These pursuits reflect my philosophy that mastery in any domain—be
            it movement, music, or code—comes through dedicated practice,
            creative exploration, and an open mind to learning.
          </p>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Looking Forward</h2>
        <p className="text-foreground/80 text-lg">
          Based in Solihull and looking for opportunities in London, I&apos;m
          excited to contribute to meaningful projects while immersing myself in
          the UK&apos;s tech scene and cultural landscape. I&apos;m particularly
          interested in roles that challenge me to grow as an engineer while
          allowing me to bring my unique perspective to the table.
        </p>
      </section>
    </div>
  );
}
