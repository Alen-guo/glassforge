'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import GlassCard from '@/components/glass/GlassCard';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      
      <div className="page-shell pt-20">
        <div className="page-content max-w-4xl mx-auto px-6 py-12">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These terms govern your use of GlassForge and the services we provide. Please read them carefully.
            </p>
            <p className="text-white/60 mt-4">Last updated: January 15, 2024</p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            
            {/* Acceptance of Terms */}
            <GlassCard preset="ios" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-400" />
                Acceptance of Terms
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-4">
                By accessing and using GlassForge ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Important:</strong> These terms constitute a legally binding agreement between you and GlassForge. By using our service, you confirm that you have read, understood, and agree to these terms.
                </p>
              </div>
            </GlassCard>

            {/* Description of Service */}
            <GlassCard preset="macos" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-green-400" />
                Description of Service
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                GlassForge is a web-based tool that allows users to create, customize, and export liquid glass effects for use in various design and development projects.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Service Features</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Real-time liquid glass effect generator</li>
                    <li>• Multiple export formats (CSS, React, Vue, Flutter, etc.)</li>
                    <li>• Pre-built design system presets</li>
                    <li>• Educational content and tutorials</li>
                    <li>• Community features and sharing capabilities</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Service Availability</h3>
                  <p className="text-white/70 text-sm">
                    We strive to maintain high availability but do not guarantee uninterrupted access. The service may be temporarily unavailable due to maintenance, updates, or technical issues.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* User Rights and Responsibilities */}
            <GlassCard preset="vision-pro" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-purple-400" />
                User Rights and Responsibilities
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Your Rights</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Use the Service for personal and commercial projects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Export and use generated code in your projects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Share your creations with proper attribution</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Access customer support and documentation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Your Responsibilities</h3>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Provide accurate information when creating accounts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Use the Service in compliance with all applicable laws</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respect intellectual property rights</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Maintain the security of your account credentials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>

            {/* Prohibited Uses */}
            <GlassCard preset="material" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
                Prohibited Uses
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                You agree not to use the Service for any of the following prohibited activities:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">Illegal Activities</h3>
                    <p className="text-white/70 text-xs">Any unlawful purpose or in violation of local, state, national, or international law</p>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">Malicious Use</h3>
                    <p className="text-white/70 text-xs">Transmit malware, viruses, or any malicious code</p>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">Spam or Abuse</h3>
                    <p className="text-white/70 text-xs">Send spam, chain letters, or other unsolicited communications</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">System Interference</h3>
                    <p className="text-white/70 text-xs">Interfere with or disrupt the Service or servers</p>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">Unauthorized Access</h3>
                    <p className="text-white/70 text-xs">Attempt to gain unauthorized access to the Service</p>
                  </div>
                  
                  <div className="bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                    <h3 className="text-red-300 font-semibold text-sm mb-1">Reverse Engineering</h3>
                    <p className="text-white/70 text-xs">Reverse engineer, decompile, or disassemble the Service</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Intellectual Property */}
            <GlassCard preset="ios" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Intellectual Property Rights
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Our Content</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of GlassForge and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Your Content and Generated Code</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    You retain ownership of any content you create using our Service. The code generated by our tools is provided under the MIT License, allowing you to use it freely in personal and commercial projects.
                  </p>
                  
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-green-300 text-sm">
                      <strong>Generated Code License:</strong> All code generated by GlassForge is released under the MIT License, giving you maximum flexibility for use in your projects.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Third-Party Content</h3>
                  <p className="text-white/80 leading-relaxed">
                    Our Service may include content provided by third parties. All such content is the property of their respective owners and is used in accordance with applicable licenses and terms.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Disclaimer and Limitation of Liability */}
            <GlassCard preset="macos" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Gavel className="w-6 h-6 mr-3 text-yellow-400" />
                Disclaimer and Limitation of Liability
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Service Disclaimer</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this company:
                  </p>
                  <ul className="space-y-2 text-white/70 pl-6">
                    <li>• Excludes all representations and warranties relating to this website and its contents</li>
                    <li>• Does not warrant that the Service will be constantly available or available at all</li>
                    <li>• Makes no guarantees about the accuracy or completeness of generated code</li>
                    <li>• Excludes liability for any direct, indirect, or consequential loss or damage</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h3 className="text-yellow-300 font-semibold mb-2">Important Note</h3>
                  <p className="text-white/80 text-sm">
                    While we strive to provide high-quality tools and content, you should always test generated code thoroughly in your specific environment before using it in production applications.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Termination */}
            <GlassCard preset="vision-pro" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
                Termination
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Grounds for Termination</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Violation of these Terms of Service</li>
                    <li>• Misuse of the Service or its features</li>
                    <li>• Fraudulent or illegal activities</li>
                    <li>• Failure to pay applicable fees (for premium features)</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Effect of Termination</h3>
                  <p className="text-white/70 text-sm">
                    Upon termination, your right to use the Service will cease immediately. You may lose access to any content or configurations stored in your account.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Changes to Terms */}
            <GlassCard preset="material" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-400" />
                Changes to Terms
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-300 text-sm">
                  <strong>Your Responsibility:</strong> It is your responsibility to check these Terms periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
                </p>
              </div>
            </GlassCard>

            {/* Contact Information */}
            <GlassCard preset="ios" className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-green-400" />
                Contact Information
              </h2>
              
              <p className="text-white/80 leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-3">
                <p className="text-white/70">
                  <strong className="text-white">Email:</strong> legal@liquidglass.space
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Response Time:</strong> We aim to respond within 48 hours
                </p>
                <p className="text-white/70">
                  <strong className="text-white">Business Hours:</strong> Monday - Friday, 9 AM - 5 PM PST
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-gray-500/10 border border-gray-500/20 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong>Effective Date:</strong> These Terms of Service are effective as of January 15, 2024, and will remain in effect except with respect to any changes in their provisions in the future.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
}