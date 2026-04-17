import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

function VerifyEmail() {
    const { token } = useParams();
    const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
    const [message, setMessage] = useState('Verifying your email address...');

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get(`https://aidtrack.onrender.com/api/verify-email/${token}`);
                setStatus('success');
                setMessage(response.data.message || 'Email verified successfully! You can now log in.');
            } catch (error) {
                setStatus('error');
                setMessage(error.response?.data?.message || 'Verification failed. The link may be invalid or expired.');
            }
        };

        if (token) {
            verifyToken();
        }
    }, [token]);

    return (
        <div className="flex min-h-screen relative overflow-hidden bg-surface-50 items-center justify-center p-6">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-32 left-1/2 w-[500px] h-[500px] bg-secondary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

            <div className="w-full max-w-md animate-slide-up relative z-10">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-heading font-bold text-gray-900 mb-2">
                        Email Verification
                    </h2>
                </div>

                <Card className="text-center p-8 border-0 shadow-2xl bg-white/70 backdrop-blur-xl ring-1 ring-white/50">

                    {status === 'verifying' && (
                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                            <p className="text-lg text-gray-600 font-medium">{message}</p>
                        </div>
                    )}

                    {status === 'success' && (
                        <div className="animate-fade-in py-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <p className="text-xl text-gray-800 font-semibold mb-8">{message}</p>
                            <Link to="/login">
                                <Button variant="primary" className="w-full py-4 text-base font-semibold shadow-xl shadow-primary/30 rounded-xl hover:-translate-y-1 transition-transform">
                                    Proceed to Login
                                </Button>
                            </Link>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="animate-fade-in py-4">
                            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </div>
                            <p className="text-lg text-red-600 font-medium mb-8 bg-red-50 p-4 rounded-xl border border-red-100">{message}</p>
                            <Link to="/login">
                                <Button variant="outline" className="w-full py-4 text-base font-semibold hover:bg-gray-50 rounded-xl transition-colors">
                                    Back to Login
                                </Button>
                            </Link>
                        </div>
                    )}

                </Card>
            </div>
        </div>
    );
}

export default VerifyEmail;
