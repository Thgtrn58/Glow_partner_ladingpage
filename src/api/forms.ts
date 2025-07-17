import { Role } from '../components/RoleSelection';

interface FormData {
  name: string;
  email: string;
  phone: string;
  agreedToMarketing: boolean;
  selectedRole: Role;
}

// Replace this with your Google Apps Script deployment URL
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYDt8Y5i9ecFLAoLRStBqjP0mfg_pKAj1Uu1m7lG8KOQ2HNhA-MaXXq0-rs8dI5-8E/exec';

export const submitToGoogleAppsScript = async (formData: FormData): Promise<void> => {
  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log("body", formData);

    if (!response.ok && response.type !== 'opaque') {
      throw new Error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}; 