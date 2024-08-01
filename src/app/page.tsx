import AddCompanyButton from '@/app/components/add-company-button';
import Sidebar from './components/sidebar';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1> 
      <Sidebar/>     
    </main>
  );
}