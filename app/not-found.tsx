'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0000aa] font-mono text-[#aaaaaa] flex items-center justify-center p-4 crt-screen">
      <div className="max-w-2xl w-full">
        {/* Error Header */}
        <div className="bg-[#aaaaaa] text-[#0000aa] px-4 py-2 text-center font-bold mb-4">
          BIBBINSTECH BIOS - SYSTEM ERROR
        </div>

        {/* Error Box */}
        <div className="border-2 border-[#aaaaaa] p-6">
          <div className="text-[#ff5555] text-xl mb-4">
            *** DRIVE NOT FOUND ***
          </div>

          <div className="space-y-2 mb-6">
            <p>ERROR CODE: 404</p>
            <p>The requested sector could not be located on any available drive.</p>
            <p className="text-[#ffff55]">Primary IDE Master... NOT FOUND</p>
            <p className="text-[#ffff55]">Secondary IDE Slave... NOT FOUND</p>
            <p className="text-[#ffff55]">Floppy Drive A:... NOT FOUND</p>
          </div>

          <div className="border-t border-[#555555] pt-4 mb-6">
            <p className="text-[#55ffff]">Possible causes:</p>
            <ul className="ml-4 mt-2 space-y-1">
              <li>- The page may have been moved or deleted</li>
              <li>- The URL may have been typed incorrectly</li>
              <li>- The drive cable may be disconnected</li>
              <li>- Solar flares may have corrupted the data</li>
            </ul>
          </div>

          <div className="text-center space-y-4">
            <p className="text-[#aaaaaa]">Press any key to return to system...</p>

            <Link
              href="/"
              className="inline-block bg-[#aaaaaa] text-[#0000aa] px-6 py-2 font-bold hover:bg-[#ffffff] transition-colors"
            >
              [ RETURN TO BIOS ]
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-[#555555]">
          <p>BibbinsTech BIOS v2.0 - Copyright (C) 2014-2025</p>
          <p>System halted.</p>
        </div>
      </div>
    </div>
  );
}
