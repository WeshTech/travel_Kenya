import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="hilink-logo.svg" alt="Hilink Logo" width={74} height={29}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <li key={index}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn key={FOOTER_CONTACT_INFO.title} title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">
                    {link.label}:
                  </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">
                    {link.value}
                  </p>
                </Link>
              ))}
            </FooterColumn>

            <FooterColumn key={SOCIALS.title} title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <Link href="/">
                      <Image src={link} alt={`Social icon`} width={24} height={24} />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border bg-gray-20 flex" />
        <div className='flex ml-10 items-center justify-center gap-2'>
        <Link href={"https://www.linkedin.com/in/david-waweru-9040b7241/"}>
             <Image 
              src = {'/developer.png'}
              alt = "Developer Image"
              width={50}
              height = {50}
              className='rounded-full'
             />   
        </Link>
        <Link href={"https://www.linkedin.com/in/david-waweru-9040b7241/"}>Meet the developer</Link>
        <p className="regular-14 w-full text-center">2023 Hilink | All rights reserved</p>
        </div>
        
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap ">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
