import axios from 'axios';
import { Image } from '@chakra-ui/react';
import { FormControl, FormLabel, Button } from '@chakra-ui/react';

interface ImageUploadProps {
  handleImageUrl: (url: string) => void;
  value: string;
  setImageUploading: (uploading: boolean) => void;
}

const uploadUrl = process.env.REACT_APP_CLOUDINARY_URL;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const ImageUpload: React.FC<ImageUploadProps> = ({ handleImageUrl, value, setImageUploading }) => {
  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUploading(true);
    const data = new FormData();
    data.append('file', event.target.files![0]);
    if (uploadPreset) {
      data.append('upload_preset', uploadPreset);
    }
    if (uploadUrl) {
      const res = await axios.post(uploadUrl, data);
      if (res.data) setImageUploading(false);
      handleImageUrl(res.data.url);
    }
  };

  return (
    <>
      {value ? (
        <>
          <div>
            <Image id='add-habit-photo' src={value} alt='pp' h='200px' />
          </div>
          <FormControl>
            <Button width="full" as="label" htmlFor="file-input" cursor="pointer">
              Choose File
            </Button>
            <input
              className='input-pic'
              type='file'
              id="file-input"
              onChange={handleUpload}
              style={{ display: 'none' }}
            />
          </FormControl>
        </>
      ) : (
        <>
          <FormControl>
            <Button width="full" as="label" htmlFor="file-input" cursor="pointer">
              Choose File
            </Button>
            <input
              type="file"
              id="file-input"
              onChange={handleUpload}
              style={{ display: 'none' }}
            />
          </FormControl>
        </>
      )}
    </>
  );
};
