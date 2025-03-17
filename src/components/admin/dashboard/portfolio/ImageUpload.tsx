
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ImagePlus, X } from 'lucide-react';

interface ImageUploadProps {
  previewUrl: string;
  selectedFile: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearFile: () => void;
  inputId: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  previewUrl,
  selectedFile,
  onFileChange,
  onClearFile,
  inputId
}) => {
  return (
    <div className="space-y-2">
      <Label>Gambar Thumbnail</Label>
      <div className="flex items-center gap-2">
        <Button 
          type="button" 
          variant="outline" 
          className="w-full" 
          onClick={() => document.getElementById(inputId)?.click()}
        >
          <ImagePlus size={16} className="mr-2" />
          {previewUrl ? 'Ganti Gambar' : 'Pilih Gambar'}
        </Button>
        <input
          id={inputId}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={onFileChange}
        />
        {selectedFile && (
          <Button 
            type="button" 
            variant="ghost" 
            size="icon" 
            onClick={onClearFile}
          >
            <X size={16} />
          </Button>
        )}
      </div>
      {previewUrl && (
        <div className="mt-2 border rounded-md overflow-hidden">
          <img 
            src={previewUrl} 
            alt="Preview" 
            className="w-full h-auto max-h-40 object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
