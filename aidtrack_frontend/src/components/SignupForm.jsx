// src/components/SignupForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Button from './ui/Button';
import Card from './ui/Card';
import { validatePasswordStrength } from '../utils/validation';

function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('volunteer'); // Default to volunteer
  const [adminCode, setAdminCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // OTP Verification States
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

  // If user is already logged in, redirect them to prevent duplicate signups
  if (user) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/volunteer'} replace />;
  }

  const handleSendOtp = async () => {
    if (!email) {
      setError('Please enter an email address first.');
      return;
    }
    setError('');
    setOtpLoading(true);
    setSuccess('');
    try {
      const res = await axios.post('https://aidtrack.onrender.com/api/send-otp', { email });
      setSuccess(res.data.message);
      setIsOtpSent(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send code.');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return;
    setError('');
    setSuccess('');
    try {
      const res = await axios.post('https://aidtrack.onrender.com/api/verify-otp', { email, otp });
      setSuccess(res.data.message);
      setIsEmailVerified(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid code.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isEmailVerified) {
      setError('Please verify your email address before creating an account.');
      return;
    }

    const passwordValidation = validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      setError(passwordValidation.message);
      return;
    }

    setIsLoading(true);

    try {
      await axios.post('https://aidtrack.onrender.com/api/signup', {
        fullName,
        username,
        email,
        password,
        role,
        adminCode: role === 'admin' ? adminCode : undefined,
      });

      setSuccess('Account created successfully!');
      setTimeout(() => navigate('/login'), 1500);

    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen relative overflow-hidden bg-surface-50 flex-col-reverse lg:flex-row">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-32 right-1/2 w-[500px] h-[500px] bg-primary-light/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative z-10 overflow-y-auto min-h-screen">
        <div className="w-full max-w-md animate-slide-in-left py-8">

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-2">
              Join AidTrack
            </h2>
            <p className="text-lg text-gray-600">
              Start making a difference today
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white/70 backdrop-blur-xl ring-1 ring-white/50">
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50/80 backdrop-blur-sm border border-red-100 text-red-600 text-sm font-medium animate-slide-up">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 rounded-xl bg-green-50/80 backdrop-blur-sm border border-green-100 text-green-700 text-sm font-medium animate-slide-up">
                {success}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="animate-fade-in" style={{ animationDelay: '50ms' }}>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input placeholder-gray-400 text-gray-900 outline-none text-base"
                  placeholder="John Doe"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Username</label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input placeholder-gray-400 text-gray-900 outline-none text-base"
                  placeholder="johndoe123"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Email Address</label>
                <div className="flex gap-2 items-center">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsEmailVerified(false);
                      setIsOtpSent(false);
                    }}
                    disabled={isEmailVerified}
                    required
                    className="w-full px-5 py-3.5 rounded-xl glass-input placeholder-gray-400 text-gray-900 outline-none text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:bg-gray-50"
                    placeholder="name@company.com"
                  />
                  {!isEmailVerified && (
                    <Button
                      type="button"
                      variant="outline"
                      className="px-5 py-3.5 rounded-xl whitespace-nowrap bg-white hover:bg-gray-50 text-gray-700 font-semibold"
                      isLoading={otpLoading}
                      onClick={handleSendOtp}
                    >
                      {isOtpSent ? 'Resend' : 'Verify'}
                    </Button>
                  )}
                  {isEmailVerified && (
                    <div className="flex items-center justify-center p-3.5 bg-green-50 border border-green-200 rounded-xl text-green-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  )}
                </div>
              </div>

              {isOtpSent && !isEmailVerified && (
                <div className="animate-slide-up bg-white/60 p-5 rounded-xl border border-secondary/30 shadow-inner">
                  <label htmlFor="otp" className="block text-sm font-semibold text-secondary-dark mb-2 ml-1">We sent a 6-digit code to your email</label>
                  <div className="flex gap-2">
                    <input
                      id="otp"
                      type="text"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-secondary/30 outline-none text-center tracking-[0.4em] font-bold text-gray-800 focus:ring-2 focus:ring-secondary/50 text-lg"
                      placeholder="123456"
                    />
                    <Button type="button" variant="primary" onClick={handleVerifyOtp} className="px-6 rounded-xl shadow-md shadow-secondary/20 font-semibold">
                      Confirm
                    </Button>
                  </div>
                </div>
              )}

              <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-3.5 rounded-xl glass-input placeholder-gray-400 text-gray-900 outline-none text-base"
                  placeholder="Create a strong password"
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '250ms' }}>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">I am registering as</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    if (e.target.value === 'volunteer') setAdminCode('');
                  }}
                  className="w-full px-5 py-3.5 rounded-xl glass-input text-gray-900 outline-none text-base appearance-none bg-white/50"
                  required
                >
                  <option value="volunteer">Volunteer</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              {role === 'admin' && (
                <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                  <label htmlFor="adminCode" className="block text-sm font-semibold mb-1.5 ml-1 text-secondary-dark">Admin Invite Code</label>
                  <input
                    id="adminCode"
                    type="password"
                    value={adminCode}
                    onChange={(e) => setAdminCode(e.target.value)}
                    required={role === 'admin'}
                    className="w-full px-5 py-3.5 rounded-xl glass-input placeholder-gray-400 text-gray-900 outline-none text-base ring-1 ring-secondary/30 focus:ring-secondary"
                    placeholder="Enter the secret organization code"
                  />
                </div>
              )}

              <div className="pt-4 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <Button type="submit" variant="primary" className="w-full py-4 text-base font-semibold shadow-xl shadow-secondary/30 bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-dark hover:to-secondary rounded-xl hover:-translate-y-1 transition-transform" isLoading={isLoading}>
                  Create Account
                </Button>
              </div>

              <div className="pt-6 text-center border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-bold text-secondary hover:text-secondary-dark transition-colors">
                    Log In
                  </Link>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-secondary-dark">
        <img
          src="/images/cloud_abstract_bg.png"
          alt="Cloud Abstract"
          className="absolute inset-0 w-full h-full object-cover opacity-90 animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/90 via-secondary-dark/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white animate-slide-up">
          <h1 className="text-5xl font-heading font-bold mb-6 leading-tight">Be Part of the <br />Solution.</h1>
          <p className="text-xl text-white/90 max-w-lg font-light leading-relaxed">
            Every contribution counts. Manage, distribute, and track resources securely, efficiently, and with full transparency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;