import { serverAPIPaths } from "next.config";



export const s3Config = {
    bucketName:  serverAPIPaths.s3Config.S3_BUCKET_NAME as string,
    dirName: "test-images/images",    
    region: serverAPIPaths.s3Config.AWS_REGION as string,
    accessKeyId: serverAPIPaths.s3Config.AWS_ACCESS_ID as string,
    secretAccessKey: serverAPIPaths.s3Config.AWS_SECRET_ACCESS_ID as string,
}