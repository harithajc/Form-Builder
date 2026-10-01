import type { FormDefinition } from './types';

type Props = {
  form: FormDefinition;
};

export default function FormRenderer({ form }: Props) {
  return (
    <form>
      <h2>{form.title}</h2>

      {form.fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>

          {field.type === 'textarea' ? (
            <textarea id={field.id} required={field.required} />
          ) : (
            <input id={field.id} type={field.type} required={field.required} />
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}