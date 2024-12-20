import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, loadCaseStudies, type MDXEntry } from '@/lib/mdx'
import { client } from '@/sanity/lib/client'
import { PROJECT_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import { Marquee } from '@/components/ui/Marquee'
// import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export const revalidate = 1

async function Clients() {
  const projects = await client.fetch(PROJECT_QUERY)

  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve built amazing projects
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul role="list" className="mt-10">
            <Marquee pauseOnHover className="[--duration:10s]">
              {projects.map((project) => (
                <li key={project.projectName}>
                  <FadeIn>
                    <div className="flex min-w-60 items-center gap-x-2 hover:cursor-pointer">
                      <Image
  src={project?.logo ? urlFor(project.logo).url() : ''}
  alt="logo"
                        width={64}
                        height={64}
                        unoptimized
                      />
                      <h1 className="text-xl font-medium text-white/50">
                        {project.projectName}
                      </h1>
                    </div>
                  </FadeIn>
                </li>
              ))}
            </Marquee>
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

async function CaseStudies() {
  const projects = await client.fetch(PROJECT_QUERY)
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((caseStudy) => (
            <FadeIn key={caseStudy.projectName} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={`/work/${caseStudy.currentSlug}`}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      height={64}
                      width={64}
                      src={caseStudy?.logo ? urlFor(caseStudy.logo).url() : ''}

                      alt="Project Logo"
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy._createdAt.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy._createdAt.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.projectSlogun}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.projectShortDescription}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="UI/UX Design & Front-End Development">
            Create visually appealing and responsive interfaces using Tailwind CSS and Material UI, ensuring a top-notch user experience.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom Application Development">
            Develop tailored applications with a focus on performance and functionality, leveraging tools like React, Node.js, and Mongoose.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development Farm working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-4xl ">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Empower Your Digital Journey with <span >CodexFarm</span>
          </h1>
         

          <p className="mt-6 text-xl text-neutral-600">
          <span className='font-medium'>CodexFarm</span> is a development agency operating at the dynamic crossroads of design and technology. In this bustling and inspiring space, creativity meets innovation head-on. Our team thrives in a fast-paced environment, crafting exceptional solutions that seamlessly bridge aesthetics and functionality.
          </p>
        </FadeIn>
        <div className="max-w-2xl px-4 py-8">
      {/* nderline  */}

      
      
    </div>
      </Container>

      <Clients />

      <Services />

      <CaseStudies />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <ContactSection />
    </>
  )
}
