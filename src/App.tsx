import FormRenderer from './FormRenderer';
import { sampleForm } from './sampleForm';

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto' }}>
      <FormRenderer form={sampleForm} />
    </div>
  );
}

export default App;