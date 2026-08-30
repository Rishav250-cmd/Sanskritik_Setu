import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Wrap your <App /> (in main.jsx) with <AuthProvider> so every page
// can read/set who's logged in.
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, ask the server who the httpOnly "token" cookie belongs to.
  // This is the source of truth — localStorage is just a fast first paint.
  useEffect(() => {
    const cached = localStorage.getItem('setu_user');
    if (cached) {
      try {
        setUser(JSON.parse(cached));
      } catch {
        localStorage.removeItem('setu_user');
      }
    }

    fetch('/api/users/me', { credentials: 'include' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
          localStorage.setItem('setu_user', JSON.stringify(data.user));
        } else {
          setUser(null);
          localStorage.removeItem('setu_user');
        }
      })
      .catch(() => {
        // Network error — leave whatever was cached, don't force a logout.
      })
      .finally(() => setLoading(false));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('setu_user', JSON.stringify(userData));
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('setu_user');
    try {
      await fetch('/api/users/logout', { method: 'POST', credentials: 'include' });
    } catch {
      // Non-fatal — local state is already cleared.
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}