
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume-deepak.pdf'; 
    link.download = 'Deepak_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Resume download started!');
  };

  return (
    <Button 
      onClick={handleDownload}
      className="mt-6 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg"
    >
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  );
};

export default ResumeButton;
