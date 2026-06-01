// src/lib/consent.ts
// Client-side consent preferences stored in localStorage.
//
// Consent is intentionally stored client-side (not in an httpOnly cookie) so that
// the analytics gate can be evaluated in the browser without an origin request.
// This keeps every page statically cacheable at the CDN edge. Consent is a user
// preference, not a security secret, so localStorage is the appropriate store.

export interface ConsentPreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
}

const CONSENT_STORAGE_KEY = 'cookie_consent';

/**
 * Reads the stored consent preferences, or null if the user has not chosen yet.
 */
export function getConsentPreferences(): ConsentPreferences | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as ConsentPreferences;
  } catch {
    return null;
  }
}

/**
 * Persists the consent preferences to localStorage.
 */
export function setConsentPreferences(consent: ConsentPreferences): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage may be unavailable (private mode, quota). Fail silently.
  }
}

/**
 * Returns true if the user has made any consent choice.
 */
export function hasConsent(): boolean {
  return getConsentPreferences() !== null;
}

/**
 * Returns true only if the user has explicitly granted analytics consent.
 * This is the signal used to gate the analytics scripts.
 */
export function hasAnalyticsConsent(): boolean {
  return getConsentPreferences()?.analytics === true;
}

/**
 * Removes the stored consent preferences.
 */
export function clearConsentPreferences(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // Fail silently.
  }
}
