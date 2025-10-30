import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Topnav from "@/components/Topnav";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Terms and Conditions | AllSpark Technologies",
    description:
      "Read the Terms and Conditions for using AllSpark Technologies' website and services. Learn about your responsibilities and our legal limitations.",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: "https://allsparktechnologies.com/termsandconditions",
    },
    openGraph: {
      title: "Terms and Conditions | AllSpark Technologies",
      description:
        "Read the Terms and Conditions for using AllSpark Technologies' website and services. Learn about your responsibilities and our legal limitations.",
      url: "https://allsparktechnologies.com/termsandconditions",
      type: "website",
      siteName: "AllSpark Technologies",
      images: [
        {
          url: "https://testtest.libererllc.com/images/home/aboutThumb1_1.png",
          width: 1200,
          height: 630,
          alt: "Terms and Conditions - AllSpark Technologies",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms and Conditions | AllSpark Technologies",
      description:
        "Read the Terms and Conditions for using AllSpark Technologies' website and services. Learn about your responsibilities and our legal limitations.",
      images: [
        "https://testtest.libererllc.com/images/home/aboutThumb1_1.png",
      ],
    },
  };
}



export default function page() {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <section className="max-w-7xl mx-auto px-4 my-8 py-8">
        <div className="space-y-6">
          <h1 className="heading font-bold text-gray-900 text-center">
            Terms and Conditions
          </h1>
          <p className="para text-gray-500">Effective Date: 16 May 2025</p>

          <div className="space-y-6">
            <p className="para leading-6">
              Welcome to{" "}
              <strong className="font-semibold">Allspark Technologies</strong>.
              These Terms and Conditions (Terms) govern your use of our
              website located at{" "}
              <a
                href="https://www.allsparktechnologies.com"
                className="text-[#384BFF] underline" target="_blank"
              >
                www.allsparktechnologies.com
              </a>{" "}
              (the Website) and the services we offer.
            </p>

            <p className="para leading-6">
              By accessing or using this Website, you agree to these Terms in
              full. If you do not agree, please do not use the Website.
            </p>

            {/* Company Information */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              Company Information
            </h2>
            <div className="space-y-2">
              <p className="para font-semibold">AllSpark Technologies</p>
              <p className="para">
                638 Knollwood Road, Franklin Lakes, NJ 07417
              </p>
              <p className="para">
                Email:{" "}
                <a
                  href="mailto:info@allsparktechnologies.com"
                  className="text-[#384BFF] underline"
                >
                  info@allsparktechnologies.com
                </a>
              </p>
              <p className="para">Phone: +1 (616) 308-1863</p>
            </div>

            {/* 1. Use of the Website */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              1. Use of the Website
            </h2>
            <p className="para leading-6">
              You agree to use the Website only for lawful purposes and in
              accordance with these Terms. You may not:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="para">
                Violate any local, state, national, or international law
              </li>
              <li className="para">
                Transmit any harmful code, malware, or unauthorized data
              </li>
              <li className="para">
                Attempt to gain unauthorized access to our servers, networks, or
                databases
              </li>
              <li className="para">
                Use the Website in any way that may interfere with others&quot;
                access or safety
              </li>
            </ul>

            {/* 2. Intellectual Property Rights */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              2. Intellectual Property Rights
            </h2>
            <p className="para leading-6">
              All content on this Website—including text, images, logos,
              graphics, videos, software, and code—is the property of{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              or our licensors and is protected under copyright, trademark, and
              intellectual property laws.
            </p>
            <p className="para leading-6">
              You may not copy, distribute, reproduce, or modify any part of the
              Website without our prior written consent.
            </p>

            {/* 3. Service Descriptions */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              3. Service Descriptions
            </h2>
            <p className="para leading-6">
              We strive to ensure that the information on our Website is
              accurate, complete, and current. However, we do not guarantee that
              all service descriptions or content are always error-free or
              up-to-date.
            </p>
            <p className="para leading-6">Our services include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="para">Custom Software Development</li>
              <li className="para">Web & App Development</li>
              <li className="para">AI & Machine Learning Solutions</li>
              <li className="para">UI/UX Design</li>
              <li className="para">Cloud & DevOps Services</li>
              <li className="para">Ecommerce Solutions</li>
              <li className="para">Marketing, SEO, and BPO Support</li>
            </ul>
            <p className="para leading-6">
              We reserve the right to modify or discontinue any service without
              notice.
            </p>

            {/* 4. User-Submitted Information */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              4. User-Submitted Information
            </h2>
            <p className="para leading-6">
              By submitting inquiries, emails, or forms via the Website, you
              agree that:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="para">The information is true and accurate</li>
              <li className="para">
                You have the right to share the information
              </li>
              <li className="para">
                We may store and use your data according to our Privacy Policy
              </li>
              <li className="para">
                We reserve the right to reject or remove any submission deemed
                inappropriate or in violation of our Terms.
              </li>
            </ul>

            {/* 5. Limitation of Liability */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              5. Limitation of Liability
            </h2>
            <p className="para leading-6">
              To the fullest extent permitted by law,{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              and its affiliates, officers, employees, and agents will not be
              liable for any:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="para">
                Indirect, incidental, special, or consequential damages
              </li>
              <li className="para">Loss of data, profits, or revenue</li>
              <li className="para">
                Damages resulting from your use or inability to use the Website
                or services
              </li>
            </ul>
            <p className="para leading-6">
              Use of the Website is at your own risk.
            </p>

            {/* 6. Third-Party Links */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              6. Third-Party Links
            </h2>
            <p className="para leading-6">
              This Website may contain links to third-party websites. These are
              provided for your convenience only. We are not responsible for the
              content or practices of any linked site, and their inclusion does
              not imply our endorsement.
            </p>

            {/* 7. Indemnification */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              7. Indemnification
            </h2>
            <p className="para leading-6">
              You agree to defend, indemnify, and hold harmless{" "}
              <strong className="font-semibold">Allspark Technologies</strong>{" "}
              and its affiliates from any claims, liabilities, damages, losses,
              and expenses, including legal fees, arising from:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="para">Your use of the Website</li>
              <li className="para">Violation of these Terms</li>
              <li className="para">
                Violation of any rights of another person or entity
              </li>
            </ul>

            {/* 8. Governing Law */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              8. Governing Law
            </h2>
            <p className="para leading-6">
              These Terms shall be governed and construed in accordance with the
              laws of the <strong>State of New Jersey</strong>, United States,
              without regard to its conflict of law principles. Any legal action
              related to these Terms shall be brought exclusively in the state
              or federal courts located in New Jersey.
            </p>
            <p className="para leading-6">
              Any legal action related to these Terms shall be brought
              exclusively in the state or federal courts located in New Jersey.
            </p>

            {/* 9. Changes to These Terms */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              9. Changes to These Terms
            </h2>
            <p className="para leading-6">
              We may update or modify these Terms at any time. When we do, we
              will revise the Effective Date at the top. You are encouraged to
              review these Terms periodically. Your continued use of the Website
              constitutes acceptance of the revised Terms.
            </p>

            {/* 10. Contact Us */}
            <h2 className="heading font-bold text-gray-900 mt-10">
              10. Contact Us
            </h2>
            <p className="para leading-6">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="space-y-2">
              <p className="para font-semibold">Allspark Technologies</p>
              <p className="para">
                638 Knollwood Road, Franklin Lakes, NJ 07417
              </p>
              <p className="para">
                Email:{" "}
                <a
                  href="mailto:info@allsparktechnologies.com"
                  className="text-[#384BFF] underline"
                >
                  info@allsparktechnologies.com
                </a>
              </p>
              <p className="para">Phone: +1 (616) 308-1863</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
