import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/authcontext.jsx';
import ThreeBackground from './background.jsx'; // exports default as ThreeBackground

const LOGIN_URL = '/api/users/login';
const SIGNUP_URL = '/api/users/register';

function Field({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.15em] text-[#a6998a]">
        {label}
      </span>
      <input
        {...props}
        className="w-full rounded-md border border-[#f3ead9]/15 bg-[#0b0906]/60 px-3.5 py-2.5 text-[#f3ead9] placeholder-[#a6998a]/50 outline-none transition focus:border-[#d3a24c] focus:ring-1 focus:ring-[#d3a24c]"
      />
    </label>
  );
}

const initialForm = { name: '', email: '', password: '', confirm: '', phone: '', nationality: '' };

export default function Signin() {
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const switchMode = (next) => {
    setMode(next);
    setError('');
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (mode === 'signup' && form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    // usermodel.js requires a password of at least 6 chars — mirror that here
    if (form.password.length < 6) {
      setError('Password needs at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const url = mode === 'signin' ? LOGIN_URL : SIGNUP_URL;
      const body =
        mode === 'signin'
          ? { email: form.email, password: form.password }
          : {
              name: form.name,
              email: form.email,
              password: form.password,
              phone: form.phone,
              nationality: form.nationality,
            };

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // required so the httpOnly "token" cookie from authcontroller.js is stored
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong. Try again.');
        return;
      }

      login(data.user);
      navigate('/');
    } catch (err) {
      setError('Could not reach the server. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#f3ead9]">
      <ThreeBackground />

      <Link
        to="/"
        className="absolute left-6 top-6 z-10 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#a6998a] transition hover:text-[#f3ead9] sm:left-10 sm:top-10"
      >
        ← Sanskriti Setu
      </Link>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-16">
        <div className="grid w-full overflow-hidden rounded-2xl border border-[#f3ead9]/10 bg-[#120e0a]/70 shadow-2xl backdrop-blur md:grid-cols-2">
          <div className="relative hidden flex-col justify-between border-r border-[#f3ead9]/10 bg-gradient-to-br from-[#1a130c] to-[#0b0906] p-10 md:flex">
            <div>
              <p className="font-serif text-3xl tracking-wide">Sanskriti Setu</p>
              <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-[#a6998a]">
                A bridge to India's living heritage — culture, art, and community, kept for those who come next.
              </p>
            </div>

            <svg viewBox="0 0 200 160" className="w-full max-w-[220px] opacity-70">
              <g fill="none" stroke="#d3a24c" strokeLinecap="round">
                {/* nested temple-arch outline */}
                <path strokeWidth="1.2" d="M20 150 L20 90 C20 50 55 20 100 20 C145 20 180 50 180 90 L180 150" />
                <path strokeWidth="1" d="M35 150 L35 92 C35 58 64 32 100 32 C136 32 165 58 165 92 L165 150" />
                <path strokeWidth="0.8" d="M50 150 L50 94 C50 66 73 44 100 44 C127 44 150 66 150 94 L150 150" />

                {/* mandala rosette centered in the arch */}
                <g transform="translate(100 95)" strokeWidth="0.9">
                  <circle r="22" />
                  <circle r="14" />
                  <circle r="4" fill="#d3a24c" stroke="none" />
                  <line x1="0" y1="-22" x2="0" y2="-4" />
                  <line x1="0" y1="22" x2="0" y2="4" />
                  <line x1="-22" y1="0" x2="-4" y2="0" />
                  <line x1="22" y1="0" x2="4" y2="0" />
                  <line x1="-15.5" y1="-15.5" x2="-3" y2="-3" />
                  <line x1="15.5" y1="15.5" x2="3" y2="3" />
                  <line x1="-15.5" y1="15.5" x2="-3" y2="3" />
                  <line x1="15.5" y1="-15.5" x2="3" y2="-3" />
                </g>
              </g>
            </svg>
          </div>

          <div className="max-h-[90vh] overflow-y-auto p-8 sm:p-10">
            <div className="mb-7 flex rounded-md border border-[#f3ead9]/15 p-1">
              {['signin', 'signup'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => switchMode(m)}
                  className={`flex-1 rounded-[5px] py-2 text-xs font-medium uppercase tracking-[0.15em] transition ${
                    mode === m ? 'bg-[#f3ead9] text-[#0b0906]' : 'text-[#a6998a] hover:text-[#f3ead9]'
                  }`}
                >
                  {m === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>
              ))}
            </div>

            <h1 className="mb-1 font-serif text-2xl">
              {mode === 'signin' ? 'Welcome back' : 'Join Sanskriti Setu'}
            </h1>
            <p className="mb-6 text-sm text-[#a6998a]">
              {mode === 'signin' ? 'Sign in to keep exploring.' : 'Create an account to save what you discover.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <>
                  <Field label="Name" type="text" placeholder="Your name" value={form.name} onChange={update('name')} required />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Phone" type="tel" placeholder="98765 43210" value={form.phone} onChange={update('phone')} required />
                    <Field label="Nationality" type="text" placeholder="Indian" value={form.nationality} onChange={update('nationality')} required />
                  </div>
                </>
              )}
              <Field label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} required />
              <Field label="Password" type="password" placeholder="••••••••" value={form.password} onChange={update('password')} required />
              {mode === 'signup' && (
                <Field label="Confirm password" type="password" placeholder="••••••••" value={form.confirm} onChange={update('confirm')} required />
              )}

              {error && (
                <p className="rounded-md border border-[#c1572e]/40 bg-[#c1572e]/10 px-3 py-2 text-sm text-[#e39270]">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-full bg-[#f3ead9] py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-[#0b0906] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create account'}
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-[#a6998a]">
              {mode === 'signin' ? 'New here? ' : 'Already have an account? '}
              <button
                type="button"
                onClick={() => switchMode(mode === 'signin' ? 'signup' : 'signin')}
                className="font-medium text-[#d3a24c] hover:underline"
              >
                {mode === 'signin' ? 'Create an account' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}