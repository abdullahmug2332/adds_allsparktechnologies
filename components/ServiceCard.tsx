"use client";

import { ChevronsRight, Bot } from "lucide-react";
import React from "react";

export default function ServiceCard() {
  return (
    <div className="w-full max-w-sm rounded-3xl border border-[#e0e6f8] bg-[#f8faff] p-6 text-left shadow-sm transition hover:shadow-md">
      {/* Icon Box */}
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dce3ff] bg-[#f0f4ff]">
        <Bot className="h-7 w-7 text-[#4b6bff]" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 leading-snug">
        Custom Web Application Development
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        We create future-ready software using AI, cloud, and IoT for competitive
        advantage.
      </p>

      {/* Button */}
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#ccd4f2] px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#4b6bff] hover:bg-[#4b6bff] hover:text-white transition"
      >
        Read more
        <ChevronsRight className="h-4 w-4" />
      </button>
    </div>
  );
}
