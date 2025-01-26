import ReactS3Client from 'react-aws-s3-typescript';
import { s3Config } from './index';

export const uploadFileOnS3 = async (file: File, filename: string) => {
    console.log(s3Config);
    const s3 = new ReactS3Client(s3Config);
    try {
        const res = await s3.uploadFile(file, filename);
        if(!res) return false
        return res;
    } catch (exception) {
        console.log(exception);
        return false
    }
}