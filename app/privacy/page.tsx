import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Standout",
  description: "Privacy Policy for Standout Education Pvt. Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            At Standout ("Company", "we", "our", or "us"), we are committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you interact with our website, landing pages, Meta ads, or submit your information through lead forms.
          </p>

          <p className="text-gray-700 mb-8">
            By accessing or using our services, you agree to the terms outlined in this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-700 mb-4">
            When you fill out a form, register for an event, request information, or communicate with us, we may collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Academic/Grade information</li>
            <li>Country/City</li>
            <li>Parent details (if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatic Data</h3>
          <p className="text-gray-700 mb-4">
            When you interact with our website or ads, we may automatically collect:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>IP address</li>
            <li>Browser and device type</li>
            <li>Pages viewed and time spent</li>
            <li>Interaction with ads and pixels</li>
          </ul>
          <p className="text-gray-700 mb-6">
            This information is used to improve experience and website performance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Respond to inquiries and provide customer support</li>
            <li>Send updates, event reminders, and educational resources</li>
            <li>Improve our marketing campaigns and ad relevance</li>
            <li>Personalize your experience with Standout</li>
            <li>Contact you regarding programs, offers, or services you may be interested in</li>
            <li>Analyze performance and optimize user experience</li>
          </ul>
          <p className="text-gray-700 mb-6">
            We will never sell or misuse your data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 mb-4">
            We may share information with trusted third-party service providers such as:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Email communication and CRM platforms</li>
            <li>Payment gateways (if applicable)</li>
            <li>Analytics tools and Meta platforms for ad optimization</li>
          </ul>
          <p className="text-gray-700 mb-6">
            These partners are required to safeguard your data and use it only for the services they provide.
          </p>
          <p className="text-gray-700 mb-6">
            We do not sell or rent personal information to any third party.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies & Tracking Technologies</h2>
          <p className="text-gray-700 mb-6">
            We use cookies and Meta pixels to optimize ads and improve performance.
            You can disable cookies through your browser settings if you prefer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Protection & Security</h2>
          <p className="text-gray-700 mb-6">
            We implement reasonable administrative and technical security measures to protect your information 
            from loss, misuse, or unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
            <li>Request access to personal data we hold</li>
            <li>Request correction or deletion of your data</li>
            <li>Unsubscribe from communications at any time</li>
          </ul>
          <p className="text-gray-700 mb-6">
            To request data modifications or removal, contact us at:
          </p>
          <p className="text-gray-700 mb-6">
            📩 [Insert Email Here]
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 mb-6">
            Our services are intended for students above 13 years old with parental consent. We do not knowingly 
            collect personal information from children without permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Links</h2>
          <p className="text-gray-700 mb-6">
            Our site may contain links to third-party websites. We are not responsible for their content or 
            privacy practices.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            We may update this policy from time to time. Any changes will be reflected with a new "Last Updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have questions about this Privacy Policy or how your information is handled, please contact:
          </p>
          <div className="text-gray-700 mb-8 space-y-2">
            <p>📍 Standout Education Pvt. Ltd.</p>
            <p>📩 Email: khushiunvi@gmsil.com</p>
            <p>📞 Phone: 9910477033</p>
            <p>🌐 Website: www.standout-app.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

