import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const linkGroups = [
    {
        title: 'Product',
        links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
    },
    {
        title: 'Company',
        links: ['About', 'Careers', 'Blog', 'Press'],
    },
    {
        title: 'Resources',
        links: ['Docs', 'Guides', 'Support', 'API Status'],
    },
]

const socials = [
    { icon: FaGithub, label: 'GitHub', href: '#' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', href: '#' },
]
function Footer() {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)

    const handleSubscribe = (e) => {
        e.preventDefault()
        if (!email.trim()) return
        setSubscribed(true)
        setEmail('')
    }

    return (
        <footer className="bg-[#14171F] text-[#E8E6E1]">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_2fr] gap-12 lg:gap-20">
                    {/* Brand + newsletter */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-md bg-[#E8A33D] flex items-center justify-center">
                                <span className="font-bold text-[#14171F] text-sm">S</span>
                            </div>
                            <span className="font-semibold tracking-tight text-lg">Sanskritik Setu</span>
                        </div>
                        <p className="text-[#8A8F98] text-sm leading-relaxed max-w-xs mb-6">
                            Tools for teams who ship. Get product updates and the occasional
                            good idea, straight to your inbox.
                        </p>

                        {subscribed ? (
                            <div className="flex items-center gap-2 text-sm text-[#E8A33D]">
                                <Check className="w-4 h-4" />
                                <span>You're on the list.</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex max-w-xs">
                                <label htmlFor="footer-email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="footer-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="flex-1 min-w-0 bg-[#1C2029] border border-[#262B36] rounded-l-md px-3 py-2 text-sm text-[#E8E6E1] placeholder:text-[#5C6270] focus:outline-none focus:ring-2 focus:ring-[#E8A33D] focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    aria-label="Subscribe"
                                    className="flex items-center justify-center bg-[#E8A33D] hover:bg-[#F0B25A] transition-colors rounded-r-md px-3 text-[#14171F]"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {linkGroups.map((group) => (
                            <div key={group.title}>
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5C6270] mb-4">
                                    {group.title}
                                </h3>
                                <ul className="space-y-3">
                                    {group.links.map((link) => (
                                        <li key={link}>
                                            <a
                                                href="#"
                                                className="text-sm text-[#B7BAC2] hover:text-[#E8A33D] transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-14 pt-8 border-t border-[#262B36] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#5C6270]">
                        © {new Date().getFullYear()} Sanskritik Setu, Inc. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-[#8A8F98] hover:text-[#E8A33D] transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer