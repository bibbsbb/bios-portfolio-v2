'use client';

import { ResumeData } from '@/lib/types';

interface FriendlyContactProps {
  data: ResumeData;
}

export function FriendlyContact({ data }: FriendlyContactProps) {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Open to discussing IT leadership opportunities, consulting, or just talking tech.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <a
            href={`mailto:${data.email}`}
            className="glass-card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cyan-400"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Email</div>
              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                {data.email}
              </div>
            </div>
          </a>

          {/* Phone card - only show if phone exists */}
          {data.phone && (
            <a
              href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-cyan-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                  {data.phone}
                </div>
              </div>
            </a>
          )}

          {/* LinkedIn card */}
          <a
            href={`https://${data.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-cyan-400"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">LinkedIn</div>
              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                {data.linkedin}
              </div>
            </div>
          </a>

          {/* Location card */}
          <div className="glass-card p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cyan-400"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="text-white font-medium">{data.location}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`mailto:${data.email}?subject=Let's Connect`}
            className="friendly-btn-primary inline-block"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}
