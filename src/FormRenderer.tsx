import { useState } from 'react';
import type { FormEvent } from 'react';
import type { FormDefinition } from './types';

type Props = {
  form: FormDefinition;
};

export default function FormRenderer({ form }: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<Record<string, string> | null>(null);

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{form.title}</h2>

        {form.fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                required={field.required}
                value={values[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            ) : (
              <input
                id={field.id}
                type={field.type}
                required={field.required}
                value={values[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Submitted data</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}