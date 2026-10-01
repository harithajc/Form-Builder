import type { FormDefinition } from './types';

export const sampleForm: FormDefinition = {
  title: 'Contact Us',
  fields: [
    { id: 'name', type: 'text', label: 'Name', required: true },
    { id: 'email', type: 'email', label: 'Email', required: true },
    { id: 'message', type: 'textarea', label: 'Message', required: false },
    { id: 'phone', type: 'text', label: 'Phone', required: false },
  ],
};