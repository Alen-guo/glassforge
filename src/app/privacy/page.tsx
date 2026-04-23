'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import GlassCard from '@/components/glass/GlassCard';
import { Shield, Eye, Cookie, Database, Globe, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      
      <div className="page-shell pt-20">
        <div className="page-content max-w-4xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use GlassForge.
            </p>
            <p className="text-white/60 mt-4">Last updated: January 15, 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            
            {/* Information We Collect */}
            <GlassCard preset="ios" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-blue-400" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    We may collect the following types of personal information when you use our service:
                  </p>
                  <ul className="space-y-2 text-white/70 pl-6">
                    <li>• Email address (when subscribing to newsletter or creating an account)</li>
                    <li>• Name (if provided voluntarily)</li>
                    <li>• Usage preferences and settings</li>
                    <li>• Glass effect configurations you create</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technical Information</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    We automatically collect certain technical information:
                  </p>
                  <ul className="space-y-2 text-white/70 pl-6">
                    <li>• Browser type and version</li>
                    <li>• Device information and screen resolution</li>
                    <li>• IP address and general location</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referring websites and search terms</li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* How We Use Information */}
            <GlassCard preset="macos" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-green-400" />
                How We Use Your Information
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Service Provision</h3>
                  <p className="text-white/80 text-sm">
                    To provide and maintain our glass effect generator, save your preferences, and improve user experience.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Communication</h3>
                  <p className="text-white/80 text-sm">
                    To send you updates, newsletters, and respond to your inquiries (only with your consent).
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Analytics and Improvement</h3>
                  <p className="text-white/80 text-sm">
                    To analyze usage patterns, improve our services, and develop new features.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Legal Compliance</h3>
                  <p className="text-white/80 text-sm">
                    To comply with applicable laws, regulations, and legal processes.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Cookies and Tracking */}
            <GlassCard preset="vision-pro" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Cookie className="w-6 h-6 mr-3 text-purple-400" />
                Cookies and Tracking Technologies
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              
              <div className="space-y-4">
                <div className="border border-white/10 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Required for basic website functionality and cannot be disabled.
                  </p>
                  <p className="text-white/60 text-xs">
                    Examples: Session management, security features, load balancing
                  </p>
                </div>
                
                <div className="border border-white/10 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Help us understand how visitors interact with our website.
                  </p>
                  <p className="text-white/60 text-xs">
                    Examples: Google Analytics, usage statistics, performance metrics
                  </p>
                </div>
                
                <div className="border border-white/10 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Preference Cookies</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Remember your settings and preferences for a better experience.
                  </p>
                  <p className="text-white/60 text-xs">
                    Examples: Theme preferences, saved glass effects, language settings
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>Cookie Control:</strong> You can control and manage cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                </p>
              </div>
            </GlassCard>

            {/* Data Sharing and Third Parties */}
            <GlassCard preset="material" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-cyan-400" />
                Data Sharing and Third-Party Services
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share data with:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-green-300 font-semibold mb-2">Service Providers</h3>
                  <p className="text-white/80 text-sm">
                    Trusted third-party services that help us operate our website (hosting, analytics, email services).
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="text-yellow-300 font-semibold mb-2">Legal Requirements</h3>
                  <p className="text-white/80 text-sm">
                    When required by law, court order, or governmental authority.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-blue-300 font-semibold mb-2">Business Transfers</h3>
                  <p className="text-white/80 text-sm">
                    In the event of a merger, acquisition, or sale of assets (with prior notice).
                  </p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Third-Party Services We Use:</h3>
              <ul className="space-y-2 text-white/70 pl-6">
                <li>• Google Analytics (website analytics)</li>
                <li>• Vercel (website hosting and deployment)</li>
                <li>• Google AdSense (advertising services)</li>
                <li>• Email service providers (newsletter delivery)</li>
              </ul>
            </GlassCard>

            {/* Data Security */}
            <GlassCard preset="ios" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-red-400" />
                Data Security and Retention
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Technical Measures</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• SSL/TLS encryption</li>
                    <li>• Secure data transmission</li>
                    <li>• Regular security updates</li>
                    <li>• Access controls and authentication</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Organizational Measures</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Limited data access</li>
                    <li>• Staff training and protocols</li>
                    <li>• Regular security assessments</li>
                    <li>• Data minimization practices</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <h3 className="text-orange-300 font-semibold mb-2">Data Retention</h3>
                <p className="text-white/80 text-sm">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy or as required by law. You can request deletion of your data at any time by contacting us.
                </p>
              </div>
            </GlassCard>

            {/* Your Rights */}
            <GlassCard preset="vision-pro" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-pink-400" />
                Your Rights and Choices
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Access</h3>
                    <p className="text-white/70 text-xs">Request copies of your personal data</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Rectification</h3>
                    <p className="text-white/70 text-xs">Request correction of inaccurate data</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Erasure</h3>
                    <p className="text-white/70 text-xs">Request deletion of your data</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Portability</h3>
                    <p className="text-white/70 text-xs">Export your data in a common format</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Restriction</h3>
                    <p className="text-white/70 text-xs">Limit how we process your data</p>
                  </div>
                  
                  <div className="bg-white/5 p-3 rounded-lg">
                    <h3 className="text-white font-semibold text-sm mb-1">Objection</h3>
                    <p className="text-white/70 text-xs">Object to processing for direct marketing</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Contact Information */}
            <GlassCard preset="macos" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-400" />
                Contact Us
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-3">
                <p className="text-white/70">
                  <strong className="text-white">Email:</strong> privacy@liquidglass.space
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Response Time:</strong> We aim to respond within 48 hours
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Data Protection Officer:</strong> Available upon request
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-300 text-sm">
                  <strong>Updates:</strong> We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "last updated" date.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
}