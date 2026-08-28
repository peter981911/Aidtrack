import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

function HomePage() {
    return (
        <div className="min-h-screen bg-surface-50 font-sans text-gray-800 relative">

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary-light/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-secondary-light/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-primary/10 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 animate-blob animation-delay-4000"></div>
            </div>

            {/* Modern Glass Header */}
            <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl tracking-tighter">AT</span>
                        </div>
                        <span className="text-2xl font-heading font-black tracking-tight text-gray-900">AidTrack</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-gray-600 font-medium hover:text-primary transition-colors duration-200">
                            Log In
                        </Link>
                        <Link to="/signup">
                            <Button variant="primary" className="shadow-lg shadow-primary/30 rounded-xl font-semibold px-6 py-2">
                                Join Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text Content */}
                    <div className="animate-slide-in-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-sm font-semibold text-primary-dark tracking-wide uppercase">Next-Gen Relief Management</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-heading font-black leading-[1.1] text-gray-900 mb-8 tracking-tight">
                            Coordinate Aid.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-dark leading-tight pb-2 block">Transform Lives.</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
                            AidTrack provides a seamless, transparent, and powerful platform to manage relief operations. Ensure every resource reaches those who need it most with absolute clarity and control.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link to="/signup">
                                <Button variant="primary" className="text-lg px-8 py-4 rounded-2xl shadow-xl shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
                                    Get Started Free
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="outline" className="text-lg px-8 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-white/80 hover:border-gray-300 transition-all duration-300">
                                    Access Dashboard
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Real-time Tracking
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Role-based Security
                            </div>
                        </div>
                    </div>

                    {/* Right Floating Image / UI Mockup */}
                    <div className="relative animate-fade-in lg:ml-auto w-full max-w-lg" style={{ animationDelay: '300ms' }}>
                        {/* Soft decorative background shadow for the image */}
                        <div className="absolute inset-x-12 -inset-y-12 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl rounded-full opacity-60"></div>

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-white/50 bg-white/30 backdrop-blur-xl group hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                            <img
                                src="/images/cloud_abstract_bg.png"
                                alt="Abstract Dashboard Representation"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                style={{ minHeight: '500px' }}
                            />

                            {/* Overlay UI elements to make it look like an app feature */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">Distributions Active</p>
                                                <p className="text-xs text-gray-500">Live globally</p>
                                            </div>
                                        </div>
                                        <span className="text-green-600 font-bold text-lg">+124%</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-3/4 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -left-8 top-1/4 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl shadow-primary/10 border border-white flex items-center gap-4 animate-float">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-lg">10k+</p>
                                <p className="text-gray-500 text-sm font-medium">Volunteers</p>
                            </div>
                        </div>

                        {/* Floating Badge 2 */}
                        <div className="absolute -right-8 bottom-1/3 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl shadow-secondary/10 border border-white flex items-center gap-4 animate-float" style={{ animationDelay: '1.5s' }}>
                            <div className="w-12 h-12 rounded-full bg-secondary-light/20 flex items-center justify-center text-secondary-dark">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-lg">50k+</p>
                                <p className="text-gray-500 text-sm font-medium">Resources Deployed</p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Feature Highlight Section */}
            <section className="relative z-10 bg-white/60 backdrop-blur-xl border-y border-white/40 py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">Why Choose AidTrack?</h2>
                        <p className="text-gray-600 text-lg">Built for speed, transparency, and accountability at every stage of the relief process.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-8 rounded-3xl bg-white/50 border border-white/60 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-primary-light/30 flex items-center justify-center mb-6 text-primary-dark">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure verification</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ensure authorized access with email verifications, strict role-based access controls, and secure data storage.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-8 rounded-3xl bg-white/50 border border-white/60 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 translate-y-4">
                            <div className="w-14 h-14 rounded-2xl bg-secondary-light/30 flex items-center justify-center mb-6 text-secondary-dark">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Inventory Accuracy</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Real-time connection between distributions and the central stock system, preventing oversights.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-8 rounded-3xl bg-white/50 border border-white/60 shadow-lg shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Empower your administrators and volunteers with tools specifically tailored to their daily tasks and responsibilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="relative z-10 bg-gray-900 pt-16 pb-8 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark shadow-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">AT</span>
                        </div>
                        <span className="text-2xl font-heading font-bold text-white">AidTrack</span>
                    </div>
                    <p className="text-gray-400 max-w-md mx-auto mb-10">Simplifying relief operations and maximizing global humanitarian impact through technology.</p>
                    <div className="border-t border-gray-800 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center bg">
                        <p>&copy; 2026 AidTrack Inc. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
